import { contactSchema, demoSchema } from "./enquiry-validation";
import { acceptEnquiryRequest } from "./enquiry-rate-limit";
import { saveAndNotify, type Enquiry } from "./enquiry-notifications.server";

export async function handleEnquiry(request: Request, kind: "demo" | "contact") {
  const origin = request.headers.get("Origin");
  const allowedOrigins = new Set([
    new URL(request.url).origin,
    "https://mascons.in",
    "https://www.mascons.in",
    "https://mascons-website-2-0.lovable.app",
    "https://id-preview--8104feea-edda-49e5-824c-57cdf40578c3.lovable.app",
  ]);
  if (origin && !allowedOrigins.has(origin)) {
    return Response.json({ error: "This request is not allowed." }, { status: 403 });
  }
  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return Response.json({ error: "Please submit the form as JSON." }, { status: 415 });
  }
  if (Number(request.headers.get("Content-Length") || 0) > 24000) {
    return Response.json({ error: "The submitted message is too long." }, { status: 413 });
  }
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip && !acceptEnquiryRequest(`${kind}:${ip}`)) {
    return Response.json({ error: "Please wait a few minutes before submitting again." }, { status: 429, headers: { "Retry-After": "600" } });
  }

  let input: unknown;
  try {
    const text = await request.text();
    if (text.length > 24000) return Response.json({ error: "The submitted message is too long." }, { status: 413 });
    input = JSON.parse(text);
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const contact = kind === "contact" ? contactSchema.safeParse(input) : null;
  const demo = kind === "demo" ? demoSchema.safeParse(input) : null;
  const enquiry: Enquiry | null = contact?.success ? { kind: "contact", data: contact.data }
    : demo?.success ? { kind: "demo", data: demo.data } : null;
  if (!enquiry) {
    return Response.json({ error: "Please check all required fields and message length." }, { status: 400 });
  }

  try {
    // Privileged insert-only action: validated public form data, fixed tables and recipients.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const table = kind === "demo" ? "demo_requests" : "contact_submissions";
    const { count, error: countError } = await supabaseAdmin.from(table)
      .select("id", { count: "exact", head: true })
      .eq("email", enquiry.data.email)
      .gte("created_at", new Date(Date.now() - 10 * 60 * 1000).toISOString());
    if (countError) throw new Error("Submission check failed");
    if ((count || 0) >= 5) {
      return Response.json({ error: "Please wait a few minutes before submitting again." }, { status: 429, headers: { "Retry-After": "600" } });
    }
    const result = await saveAndNotify(enquiry, async (entry) => {
      const query = entry.kind === "demo"
        ? supabaseAdmin.from("demo_requests").insert(entry.data)
        : supabaseAdmin.from("contact_submissions").insert(entry.data);
      const { data, error } = await query.select("id, created_at").single();
      if (error || !data) throw new Error("Submission could not be saved");
      return data;
    });
    return Response.json(result);
  } catch {
    console.error("Enquiry could not be saved", { kind });
    return Response.json({ error: "Could not submit your enquiry. Please try again or email support@mascons.in." }, { status: 500 });
  }
}
import type { ContactSubmission, DemoSubmission } from "./enquiry-validation";
import { sendTemplateEmail } from "./email-templates/send-email";

type StoredEvent = { id: string; created_at: string };
export type Enquiry =
  | { kind: "demo"; data: DemoSubmission }
  | { kind: "contact"; data: ContactSubmission };

type Sender = typeof sendTemplateEmail;
type Store = (enquiry: Enquiry) => Promise<StoredEvent>;

const countries: Record<string, string> = { in: "India", us: "USA", uk: "UK", ca: "Canada", ae: "UAE", other: "Other" };

export async function saveAndNotify(enquiry: Enquiry, store: Store, send: Sender = sendTemplateEmail) {
  // Saving succeeds before any email is attempted; email failure never discards a lead.
  const event = await store(enquiry);
  const { data } = enquiry;
  const details = {
    email: data.email,
    company: data.company || "",
    submissionId: event.id,
    submittedAt: event.created_at,
    ...(enquiry.kind === "demo" ? {
      kind: "demo request",
      name: `${enquiry.data.first_name} ${enquiry.data.last_name}`,
      phone: enquiry.data.phone || "",

      message: enquiry.data.goal || "",
      country: countries[enquiry.data.country || ""] || "",
      companySize: enquiry.data.company_size || "",
      interest: enquiry.data.interest === "fintech" ? "Fintech Platform" : enquiry.data.interest === "unsure" ? "Not sure yet" : "",
    } : {
      kind: "contact enquiry", name: enquiry.data.full_name,
      subject: enquiry.data.subject, message: enquiry.data.message,
    }),
  };
  const sendOwner = (owner: "pankaj" | "gaurav") => {
    const templateName = `${enquiry.kind}-owner-${owner}`;
    return send(templateName, "", {
      templateData: details,
      replyTo: data.email,
      idempotencyKey: `${templateName}-${event.id}`,
    });
  };
  // Two separate, fixed owner notices for this specific submission; no recipient list from visitors.
  const [pankaj, gaurav] = await Promise.allSettled([sendOwner("pankaj"), sendOwner("gaurav")]);
  const describe = (result: PromiseSettledResult<Awaited<ReturnType<Sender>>>) => {
    if (result.status === "fulfilled") return result.value.sent ? "sent" : "suppressed";
    const code = result.reason && typeof result.reason === "object" && "code" in result.reason
      ? String(result.reason.code) : "send_failed";
    // Record the failure category only, never the submitted personal data or credentials.
    console.warn("Owner enquiry email unavailable", { submissionId: event.id, code });
    return "unavailable";
  };
  return { success: true, notifications: { pankaj: describe(pankaj), gaurav: describe(gaurav) } };
}
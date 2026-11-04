import { contactSchema, demoSchema, type ContactSubmission, type DemoSubmission } from "./enquiry-validation";

export async function submitEnquiry(kind: "demo", payload: DemoSubmission): Promise<void>;
export async function submitEnquiry(kind: "contact", payload: ContactSubmission): Promise<void>;
export async function submitEnquiry(kind: "demo" | "contact", payload: DemoSubmission | ContactSubmission) {
  const parsed = (kind === "demo" ? demoSchema : contactSchema).safeParse(payload);
  if (!parsed.success) throw new Error("Please check all required fields and message length.");
  const response = await fetch(`/api/public/enquiries/${kind}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || "Please try again or email support@mascons.in");
  }
}
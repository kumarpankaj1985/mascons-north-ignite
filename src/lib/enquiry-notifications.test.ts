import { describe, expect, it, vi } from "vitest";
import { demoSchema, contactSchema } from "./enquiry-validation";
import { saveAndNotify, type Enquiry } from "./enquiry-notifications.server";
import { TEMPLATES } from "./email-templates/registry";
import { acceptEnquiryRequest } from "./enquiry-rate-limit";

const demo: Enquiry = { kind: "demo", data: {
  first_name: "Test", last_name: "Visitor", email: "visitor@example.com", company: "Test Company",
  country: "in", company_size: "11-50", interest: "fintech", goal: "A wallet platform",
} };
const contact: Enquiry = { kind: "contact", data: {
  full_name: "Test Visitor", email: "visitor@example.com", company: "Test Company",
  subject: "New fintech platform", message: "Please contact us.",
} };
const event = { id: "submission-123", created_at: "2026-11-04T07:43:00.000Z" };

describe("owner notifications", () => {
  it("sends each completed demo submission to Pankaj and Gaurav only", async () => {
    const send = vi.fn().mockResolvedValue({ sent: true });
    const store = vi.fn().mockImplementation(async () => {
      expect(send).not.toHaveBeenCalled();
      return event;
    });
    await saveAndNotify(demo, store, send);
    expect(store).toHaveBeenCalledExactlyOnceWith(demo);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls.map(([name]) => TEMPLATES[name].to)).toEqual(["pankaj@mascons.in", "gaurav@mascons.in"]);
    expect(send.mock.calls.map(([, , options]) => options.idempotencyKey)).toEqual([
      "demo-owner-pankaj-submission-123", "demo-owner-gaurav-submission-123",
    ]);
    expect(send.mock.calls[0][2].templateData).toMatchObject({ name: "Test Visitor", email: "visitor@example.com", country: "India", message: "A wallet platform" });
  });

  it("also notifies both owners after Contact Us is saved", async () => {
    const send = vi.fn().mockResolvedValue({ sent: true });
    await saveAndNotify(contact, async () => event, send);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls.map(([name]) => TEMPLATES[name].to)).toEqual(["pankaj@mascons.in", "gaurav@mascons.in"]);
    expect(send.mock.calls[0][2]).toMatchObject({ replyTo: "visitor@example.com", templateData: { subject: "New fintech platform", message: "Please contact us." } });
  });

  it("sends no email if the form submission has not been saved", async () => {
    const send = vi.fn();
    await expect(saveAndNotify(demo, async () => { throw new Error("Save failed"); }, send)).rejects.toThrow("Save failed");
    expect(send).not.toHaveBeenCalled();
  });

  it("retains a successfully stored enquiry even when DNS verification blocks email", async () => {
    const warning = vi.spyOn(console, "warn").mockImplementation(() => {});
    const store = vi.fn().mockResolvedValue(event);
    const send = vi.fn().mockRejectedValue({ code: "domain_not_verified" });
    const result = await saveAndNotify(demo, store, send);
    expect(store).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ success: true, notifications: { pankaj: "unavailable", gaurav: "unavailable" } });
    expect(send).toHaveBeenCalledTimes(2);
    warning.mockRestore();
  });

  it("respects suppression while still trying the other owner", async () => {
    const send = vi.fn().mockResolvedValueOnce({ sent: false, reason: "recipient_suppressed" }).mockResolvedValueOnce({ sent: true });
    const result = await saveAndNotify(demo, async () => event, send);
    expect(result.notifications).toEqual({ pankaj: "suppressed", gaurav: "sent" });
    expect(send).toHaveBeenCalledTimes(2);
  });

  it("rejects incomplete input and visitor-controlled recipient fields", () => {
    expect(demoSchema.safeParse({ ...demo.data, first_name: " " }).success).toBe(false);
    expect(demoSchema.safeParse({ ...demo.data, recipient: "outsider@example.com" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...contact.data, email: "invalid" }).success).toBe(false);
  });

  it("throttles a sixth request within ten minutes and allows requests after expiry", () => {
    const key = "rate-test";
    for (let i = 0; i < 5; i++) expect(acceptEnquiryRequest(key, 1000)).toBe(true);
    expect(acceptEnquiryRequest(key, 1001)).toBe(false);
    expect(acceptEnquiryRequest(key, 601000)).toBe(true);
  });
});
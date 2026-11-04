import { z } from "zod";

const name = z.string().trim().min(1).max(100);
const email = z.string().trim().email().max(254);
const optionalText = (max: number) => z.string().trim().max(max).nullable();
const phone = z.string().trim().max(20)
  .regex(/^[+]?[0-9][0-9\s().-]{4,18}$/, "Enter a valid mobile number")
  .refine((value) => { const digits = value.replace(/\D/g, ""); return digits.length >= 7 && digits.length <= 15; }, "Enter a valid mobile number")
  .nullable();


export const contactSchema = z.object({
  full_name: name,
  company: optionalText(200),
  email,
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
}).strict();

export const demoSchema = z.object({
  first_name: name,
  last_name: name,
  email,
  phone,

  company: z.string().trim().min(1).max(200),
  country: z.enum(["in", "us", "uk", "ca", "ae", "other"]).nullable(),
  company_size: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).nullable(),
  interest: z.enum(["fintech", "unsure"]).nullable(),
  goal: optionalText(5000),
}).strict();

export type ContactSubmission = z.infer<typeof contactSchema>;
export type DemoSubmission = z.infer<typeof demoSchema>;
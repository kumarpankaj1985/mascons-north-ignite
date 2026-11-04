import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  kind?: string;
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  country?: string;
  companySize?: string;
  interest?: string;
  submissionId?: string;
  submittedAt?: string;
}

function OwnerEnquiry({ kind = "Enquiry", name = "Not provided", email, company, subject, message,
  country, companySize, interest, submissionId, submittedAt }: Props) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {kind} from {name}{company ? ` at ${company}` : ""}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>MASCONS</Text>
          <Heading style={styles.heading}>New {kind}</Heading>
          <Text>A visitor submitted an enquiry on mascons.in.</Text>
          <Section style={styles.details}>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email ? <Link href={`mailto:${email}`}>{email}</Link> : "Not provided"}</Text>
            <Text><strong>Company:</strong> {company || "Not provided"}</Text>
            {subject && <Text><strong>Subject:</strong> {subject}</Text>}
            {country && <Text><strong>Country:</strong> {country}</Text>}
            {companySize && <Text><strong>Company size:</strong> {companySize}</Text>}
            {interest && <Text><strong>Product interest:</strong> {interest}</Text>}
          </Section>
          <Heading as="h2" style={styles.subheading}>{kind === "demo request" ? "Challenge or goal" : "Message"}</Heading>
          <Text style={styles.message}>{message || "Not provided"}</Text>
          <Hr style={styles.divider} />
          <Text style={styles.footer}>Submission: {submissionId || "Preview"}<br />{submittedAt || ""}</Text>
          <Link href="https://mascons.in">mascons.in</Link>
        </Container>
      </Body>
    </Html>
  );
}

const previewData = {
  name: "Website test visitor", email: "visitor@example.com", company: "Example Company",
  message: "We would like to discuss a fintech platform.", submissionId: "preview",
};

export const template = {
  component: OwnerEnquiry,
  subject: "Mascons — New enquiry",
  displayName: "Owner enquiry",
  previewData,
} satisfies TemplateEntry;

export const demoPankajTemplate = { ...template, subject: "Mascons — New Book a Demo request", to: "pankaj@mascons.in", displayName: "Demo request · Pankaj", previewData: { ...previewData, kind: "demo request" } } satisfies TemplateEntry;
export const demoGauravTemplate = { ...demoPankajTemplate, to: "gaurav@mascons.in", displayName: "Demo request · Gaurav" } satisfies TemplateEntry;
export const contactPankajTemplate = { ...template, subject: "Mascons — New Contact Us enquiry", to: "pankaj@mascons.in", displayName: "Contact enquiry · Pankaj", previewData: { ...previewData, kind: "contact enquiry", subject: "Fintech platform" } } satisfies TemplateEntry;
export const contactGauravTemplate = { ...contactPankajTemplate, to: "gaurav@mascons.in", displayName: "Contact enquiry · Gaurav" } satisfies TemplateEntry;

// Email clients require inline styles; these are the shared email brand tokens.
const styles = {
  body: { backgroundColor: "#ffffff", color: "#18212f", fontFamily: "Arial, sans-serif" },
  container: { maxWidth: "600px", padding: "32px 24px" },
  brand: { color: "#167ea7", fontSize: "18px", fontWeight: 700 },
  heading: { fontSize: "26px", lineHeight: "34px" },
  subheading: { fontSize: "18px", marginTop: "24px" },
  details: { borderLeft: "3px solid #167ea7", paddingLeft: "18px" },
  message: { whiteSpace: "pre-wrap" as const, overflowWrap: "anywhere" as const, lineHeight: "24px" },
  divider: { borderColor: "#e0e6eb", marginTop: "28px" },
  footer: { color: "#596573", fontSize: "12px", lineHeight: "18px" },
};
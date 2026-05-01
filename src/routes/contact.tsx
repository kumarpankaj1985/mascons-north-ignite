import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Mail, MapPin, Clock, Linkedin, Twitter, Youtube, Briefcase, HandshakeIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mascons — Fintech & Agentic AI Solutions" },
      { name: "description", content: "Talk to Mascons about white-label fintech platforms or Agentic AI projects. Sales, partnerships, careers and support — response within 4 business hours." },
      { name: "keywords", content: "contact Mascons, fintech vendor contact, AI consulting contact, fintech partnerships, AI partnerships" },
      { property: "og:title", content: "Contact Mascons — Fintech & AI" },
      { property: "og:description", content: "Reach our team. Response within 4 business hours." },
    ],
    links: [
      { rel: "canonical", href: "https://mascons-north-ignite.lovable.app/contact" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How quickly can Mascons deploy a solution?", a: "For our standard fintech platforms, deployment typically takes 4–8 weeks from contract signing. AI solutions vary by complexity — our off-the-shelf AI products can go live in as few as 2 weeks." },
  { q: "Do you offer customization for regulatory requirements?", a: "Yes. Our platforms support various regulatory frameworks out of the box, with deeper customization available for banks, NBFCs, and regulated entities in any jurisdiction." },
  { q: "Do you offer pilots or POCs before a full engagement?", a: "Yes — most of our AI products are available as 30-day pilots so you can validate ROI before committing to a full rollout." },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      full_name: String(fd.get("cName") || "").trim(),
      company: String(fd.get("cCompany") || "").trim() || null,
      email: String(fd.get("cEmail") || "").trim(),
      subject: String(fd.get("cSubject") || "").trim(),
      message: String(fd.get("cMessage") || "").trim(),
    };
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send message", { description: "Please try again or email support@mascons.in" });
      return;
    }
    form.reset();
    toast.success("Message sent!", { description: "We'll respond within 4 business hours." });
  };

  return (
    <div>
      <Toaster richColors position="top-center" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-28">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Let's <span className="text-gradient-brand">talk.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Sales, partnerships, careers, or just curious — we'd love to hear from you.
            Our team responds within 4 business hours.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Mail, title: "Sales & Demos", lines: ["support@mascons.in", "Within 4 business hours"] },
            { icon: HandshakeIcon, title: "Partnerships", lines: ["support@mascons.in", "Partnership inquiries welcome"] },
            { icon: Briefcase, title: "Careers", lines: ["support@mascons.in", "Engineering, Product, AI, Sales"] },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-7 shadow-card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand mb-5 shadow-glow">
                <c.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <h3 className="text-lg font-bold">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-20 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Headquarters</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                648/A, 4th Floor, Binnamangala 1st Stage,<br />
                Indiranagar, Bangalore - 560038
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Hours</h3>
              <p className="mt-2 text-muted-foreground text-sm">Mon–Fri · 9 AM – 6 PM IST</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> Email</h3>
              <p className="mt-2 text-muted-foreground text-sm">support@mascons.in · www.mascons.in</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow</h3>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
                <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-2xl p-8 shadow-elevated space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cName">Full name</Label>
                <Input id="cName" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cCompany">Company</Label>
                <Input id="cCompany" placeholder="Company (optional)" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cEmail">Email</Label>
              <Input id="cEmail" type="email" required placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cSubject">Subject</Label>
              <Input id="cSubject" required placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cMessage">Message</Label>
              <Textarea id="cMessage" rows={5} required placeholder="Tell us a bit more..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Frequently asked <span className="text-gradient-brand">questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="glass-card rounded-xl p-6 group">
              <summary className="cursor-pointer font-semibold list-none flex items-center justify-between gap-4">
                {f.q}
                <span className="text-accent text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

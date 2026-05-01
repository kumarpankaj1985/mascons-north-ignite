import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircle2, Calendar, Phone, Mail, Shield, Clock, Users, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title: "Book a Free Demo & AI Audit — Mascons Fintech & Agentic AI" },
      { name: "description", content: "Book a 45-minute Mascons demo or free AI Readiness Audit. See live fintech platforms — wallets, cards, remittance, BaaS — and Agentic AI products with real ROI conversations." },
      { name: "keywords", content: "book fintech demo, AI audit, free AI readiness audit, fintech platform demo, agentic AI demo, Mascons demo" },
      { property: "og:title", content: "Book a Free Demo & AI Audit — Mascons" },
      { property: "og:description", content: "Real products, real data, real ROI. Book your 45-minute session." },
    ],
    links: [
      { rel: "canonical", href: "https://mascons-north-ignite.lovable.app/book-a-demo" },
    ],
  }),
  component: BookDemoPage,
});

const steps = [
  { icon: Target, title: "Discovery", time: "10 min", desc: "We learn about your business, your goals, and where you are today." },
  { icon: Users, title: "Live Product Walkthrough", time: "20 min", desc: "A hands-on tour of the Mascons platform or AI products most relevant to you." },
  { icon: Calendar, title: "ROI Discussion", time: "10 min", desc: "Realistic timelines, implementation approach, and the expected business impact." },
  { icon: CheckCircle2, title: "Q&A and Next Steps", time: "5 min", desc: "All your questions answered. You leave with clarity — zero pressure." },
];

function BookDemoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [country, setCountry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      first_name: String(fd.get("firstName") || "").trim(),
      last_name: String(fd.get("lastName") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      country: country || null,
      company_size: companySize || null,
      interest: interest || null,
      goal: String(fd.get("goal") || "").trim() || null,
    };
    const { error } = await supabase.from("demo_requests").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit request", { description: "Please try again or email support@mascons.in" });
      return;
    }
    form.reset();
    setCountry(""); setCompanySize(""); setInterest("");
    toast.success("Demo request received!", {
      description: "A Mascons expert will reach out within 4 business hours.",
    });
  };

  return (
    <div>
      <Toaster richColors position="top-center" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-28">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Book a Demo</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            See the future of your business — <span className="text-gradient-brand">live.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Whether you're exploring fintech infrastructure or ready to deploy AI, a 45-minute Mascons
            demo will show you exactly what's possible — with real products, real data, and real ROI.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">What to expect</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">45 minutes. Four steps.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-6 shadow-card relative">
              <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand mb-5 shadow-glow">
                <s.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <div className="flex items-center gap-2 text-xs text-accent font-medium mb-1">
                <Clock className="h-3 w-3" /> {s.time}
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-20">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Reserve your session</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tell us a little about your team and goals. A Mascons expert will reach out within
                4 business hours to confirm your time.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> support@mascons.in</div>
                <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-accent" /> Your data is never shared.</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-2xl p-8 shadow-elevated space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" required placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company name</Label>
                <Input id="company" name="company" required placeholder="Acme Inc." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="us">USA</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="ae">UAE</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Company size</Label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="201-500">201–500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>What are you looking for?</Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger><SelectValue placeholder="Select an interest" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fintech">Fintech Platform</SelectItem>
                    <SelectItem value="ai">AI Solution</SelectItem>
                    <SelectItem value="audit">AI Audit</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Tell us briefly about your challenge or goal</Label>
                <Textarea id="goal" name="goal" rows={4} placeholder="What are you trying to solve or launch?" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Submitting..." : "Book My Demo →"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Prefer to talk first? Email <a href="mailto:support@mascons.in" className="text-primary underline-offset-4 hover:underline">support@mascons.in</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

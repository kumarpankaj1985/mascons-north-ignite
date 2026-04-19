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

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Mascons Canada" },
      { name: "description", content: "See the future of your business — live. Book a 45-minute Mascons demo and explore fintech infrastructure or Agentic AI for your organization." },
      { property: "og:title", content: "Book a Demo — Mascons Canada" },
      { property: "og:description", content: "Real products, real data, real ROI. Book your 45-minute session." },
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Demo request received!", {
        description: "A Mascons expert will reach out within 4 business hours.",
      });
    }, 800);
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
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +1 (toll-free) coming soon</div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> support@mascons.ca</div>
                <div className="flex items-center gap-3"><Shield className="h-4 w-4 text-accent" /> Your data is never shared.</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-2xl p-8 shadow-elevated space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business email</Label>
                <Input id="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company name</Label>
                <Input id="company" required placeholder="Acme Inc." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="us">USA</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Company size</Label>
                  <Select>
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
                <Select>
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
                <Textarea id="goal" rows={4} placeholder="What are you trying to solve or launch?" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Submitting..." : "Book My Demo →"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Prefer to talk first? Email <a href="mailto:support@mascons.ca" className="text-primary underline-offset-4 hover:underline">support@mascons.ca</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

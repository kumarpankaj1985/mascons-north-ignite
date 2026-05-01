import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Shield, Rocket, Globe2, Zap, Bot, Wallet, CreditCard, PhoneCall,
  ArrowRight, CheckCircle2, TrendingUp, Users, Award, Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-mascons.jpg";
import { ClientsSection } from "@/components/ClientsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mascons — Intelligent Fintech & Agentic AI Solutions" },
      { name: "description", content: "White-labeled fintech platforms and Agentic AI solutions transforming how businesses operate, grow, and compete globally." },
      { property: "og:title", content: "Mascons — Intelligent Fintech & Agentic AI" },
      { property: "og:description", content: "Launch-ready fintech platforms and live Agentic AI products. Book a free AI audit." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "15+", label: "Years of Fintech Expertise", icon: Award },
  { value: "7+", label: "Live AI Products Deployed", icon: Bot },
  { value: "3", label: "Continents of Global Clients", icon: Globe2 },
  { value: "2", label: "Successful Fintech Exits", icon: TrendingUp },
];

const featured = [
  { icon: Users, title: "AI-Powered Recruitment", desc: "Hire smarter. Reduce time-to-hire by 60% with intelligent matching and screening." },
  { icon: Wallet, title: "AI Expense Management", desc: "Automate corporate spend, eliminate fraud, and save your finance team hours every week." },
  { icon: PhoneCall, title: "AI Inbound & Outbound Calling", desc: "24/7 intelligent call handling with zero wait times and human-grade conversations." },
  { icon: CreditCard, title: "Corporate Wallet & Cards", desc: "Spend control, real-time visibility, and instant card issuance under your brand." },
];

const whyUs = [
  "Proven founders with 15+ years in fintech and 2 successful exits",
  "Live AI products already deployed — not concepts, not prototypes",
  "End-to-end support: from AI readiness audit to full implementation",
  "Global delivery with deep domain expertise in financial services",
  "White-label first: you own the brand, we power the technology",
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Serving businesses globally
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Intelligent Fintech &{" "}
              <span className="text-gradient-brand">Agentic AI</span>{" "}
              for your business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We build white-labeled fintech platforms and deploy Agentic AI solutions that
              transform how businesses operate, grow, and compete.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">Explore Our Solutions <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glow" size="xl">
                <Link to="/book-a-demo">Book a Free AI Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <s.icon className="h-6 w-6 text-accent mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PILLARS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Two pillars. <span className="text-gradient-brand">Infinite outcomes.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Mascons operates at the intersection of advanced fintech infrastructure and Agentic AI —
            built for compliance, built for scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-all group">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-6 shadow-glow">
              <Building2 className="h-6 w-6 text-brand-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fintech-as-a-Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              White-labeled, launch-ready platforms — digital wallets, card management, remittance,
              branchless banking, corporate expense, and Banking as a Service.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Explore Fintech <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-all group">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-6 shadow-glow">
              <Bot className="h-6 w-6 text-brand-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Agentic AI Solutions</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We assess your organization, identify the highest-impact AI opportunities, and deploy
              ready-built or custom AI agents that automate your workflows.
            </p>
            <Link to="/agentic-ai" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Explore Agentic AI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY MASCONS */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Why Mascons</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Proven products. <br /> <span className="text-gradient-brand">Real deployments.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We don't sell roadmaps — we deliver platforms our clients launch in weeks, not years.
            </p>
          </div>
          <ul className="space-y-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3 glass-card rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI READINESS SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 shadow-elevated">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent opacity-10 blur-3xl" />
          <div className="relative max-w-3xl">
            <Sparkles className="h-10 w-10 text-accent mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Not sure where AI <span className="text-gradient-brand">fits in your business?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Most organizations know they need AI — but don't know where to start. Our structured
              AI Audit maps your current operations and surfaces the top 3–5 areas where Agentic AI
              can deliver measurable ROI within 90 days.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/book-a-demo">Start Your Free AI Audit <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Featured solutions</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Live products. <span className="text-gradient-brand">Real ROI.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-5">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS & PARTNERS */}
      <ClientsSection />

      {/* TESTIMONIALS */}
      <section className="border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">What our <span className="text-gradient-brand">clients say</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: "Mascons delivered our digital wallet in record time. The platform is rock solid and our customers love the experience.", a: "Director of Product", c: "HiWiPay" },
              { q: "Their AI audit identified four areas where we could automate immediately. The ROI was instant and measurable.", a: "VP Operations", c: "Cashzen, Canada" },
              { q: "From card issuance to compliance workflows, Mascons became a true extension of our team. Truly white-label, truly turnkey.", a: "Head of Payments", c: "Instapay Technologies" },
              { q: "We launched our remittance corridor in under 90 days. The platform scales effortlessly across geographies.", a: "Founder & CEO", c: "MEGO Forex" },
              { q: "The Mascons team understands fintech end-to-end — from regulatory nuances to customer experience.", a: "Chief Technology Officer", c: "Royal Bank Pacific" },
              { q: "Their Agentic AI for expense management saved our finance team dozens of hours every week.", a: "Finance Director", c: "MYNTPE" },
            ].map((t) => (
              <div key={t.q} className="glass-card rounded-2xl p-8 shadow-card">
                <Zap className="h-6 w-6 text-accent mb-4" />
                <p className="text-lg leading-relaxed">"{t.q}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold">{t.a}</div>
                  <div className="text-muted-foreground">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24 text-center">
        <Rocket className="h-10 w-10 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
          Ready to <span className="text-gradient-brand">transform your business?</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you need a ready-to-launch fintech platform or want to explore where AI fits in
          your organization — Mascons is your partner for the journey.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="xl"><Link to="/book-a-demo">Book a Demo</Link></Button>
          <Button asChild variant="glow" size="xl"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>

      <ShieldStrip />
    </div>
  );
}

function ShieldStrip() {
  return (
    <div className="border-t border-border/50 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> PCI-DSS Compliant Infrastructure</div>
        <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> SOC 2 Aligned Controls</div>
        <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Global Data Residency</div>
      </div>
    </div>
  );
}

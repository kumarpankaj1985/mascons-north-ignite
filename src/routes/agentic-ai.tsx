import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Bot, Brain, Users, Wallet, Shirt, PhoneCall, Mic, ClipboardList, Calculator,
  ArrowRight, Search, Lightbulb, Rocket, CheckCircle2, Sparkles,
} from "lucide-react";
import aiHero from "@/assets/ai-hero.jpg";

export const Route = createFileRoute("/agentic-ai")({
  head: () => ({
    meta: [
      { title: "Agentic AI Solutions — Mascons" },
      { name: "description", content: "Live, deployed Agentic AI products: AI recruitment, expense management, calling, meeting notetaker, procurement, accounting, and more. Start with a free AI audit." },
      { property: "og:title", content: "Agentic AI for Business — Mascons" },
      { property: "og:description", content: "Live AI products. Free AI audit. Measurable ROI within 90 days." },
    ],
  }),
  component: AIPage,
});

const products = [
  { icon: Users, title: "AI-Powered Recruitment Portal", desc: "Hire smarter for both employers and candidates. Reduce time-to-hire by up to 60%.", points: ["AI-driven JD parsing and candidate matching", "Automated screening calls and video interview analysis", "Bias-detection and diversity hiring insights", "ATS integration with real-time hiring dashboard", "Mobile-first candidate experience"] },
  { icon: Wallet, title: "AI-Based Expense Management", desc: "Beyond tracking — predict overspend, flag policy violations, and auto-categorize every transaction.", points: ["Receipt OCR and smart auto-categorization", "Anomaly detection for fraud and policy violations", "Predictive budget alerts before limits are breached", "Natural language spend queries", "CFO-ready dashboards with zero manual entry"] },
  { icon: Shirt, title: "AI Wardrobe & Fashion Recommendation", desc: "Personalized styling for retail, e-commerce, and apparel brands. Higher AOV, lower returns.", points: ["Computer vision style matching", "Occasion- and weather-aware recommendations", "Virtual try-on integration", "Personalized merchandising for storefronts", "Loyalty and engagement uplift analytics"] },
  { icon: PhoneCall, title: "AI Inbound & Outbound Calling", desc: "24/7 intelligent voice agents for sales, support, collections, and surveys — human-grade conversations at scale.", points: ["Natural-sounding multi-accent voice models", "CRM and helpdesk integrations", "Sentiment and intent analysis on every call", "Compliance-aware scripting and recording", "Real-time human handoff when needed"] },
  { icon: Mic, title: "AI Meeting Notetaker (Vernacular)", desc: "Joins your meetings, transcribes in real time, summarizes, and assigns action items — in multiple languages.", points: ["Multi-language support out of the box", "Real-time transcription and post-meeting summary", "Automatic action items with owners and deadlines", "Zoom, Teams, Google Meet, Webex integrations", "Searchable meeting library with semantic search"] },
  { icon: ClipboardList, title: "AI Tender & Procurement Management", desc: "Automate the full procurement cycle — from tender creation to bid evaluation, contracts, and compliance.", points: ["Automated tender drafting and vendor outreach", "AI bid evaluation against multiple criteria", "Risk flagging and supplier recommendation", "Contract generation and e-signature workflow", "Cycles reduced by up to 50%"] },
  { icon: Calculator, title: "AI Accounting Management System", desc: "Continuous, autonomous accounting — from invoice ingestion to ledger entries, reconciliation, and reporting.", points: ["Invoice and document OCR with auto-coding", "Bank reconciliation in minutes, not days", "Anomaly and duplicate detection", "Real-time P&L and cash flow dashboards", "Audit-ready logs with full traceability"] },
];

const auditSteps = [
  { icon: Search, title: "Discovery & Process Mapping", desc: "We map your current business processes, data flows, and tooling — fast." },
  { icon: Lightbulb, title: "Opportunity Identification", desc: "We surface the top 5 highest-ROI opportunities for Agentic AI deployment." },
  { icon: Rocket, title: "ROI Roadmap & Pilot Plan", desc: "You walk away with a prioritized 90-day plan, expected ROI, and an implementation path." },
];

function AIPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${aiHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/65 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Live products · Real deployments
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Agentic AI that <span className="text-gradient-brand">acts, not just answers.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Unlike traditional AI tools that respond to individual queries, Agentic AI systems plan,
            execute, and adapt — making decisions, calling APIs, and managing workflows across your
            organization with minimal human input.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg"><Link to="/book-a-demo">Start Your Free AI Audit</Link></Button>
            <Button asChild variant="glow" size="lg"><a href="#products">See Live Products</a></Button>
          </div>
        </div>
      </section>

      {/* WHAT IS AGENTIC AI */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Brain, title: "Plans", desc: "Breaks down your goal into multi-step tasks." },
          { icon: Bot, title: "Executes", desc: "Calls APIs, updates systems, and takes real action." },
          { icon: Sparkles, title: "Adapts", desc: "Learns from outcomes and improves over time." },
        ].map((c) => (
          <div key={c.title} className="glass-card rounded-2xl p-8 text-center shadow-card">
            <c.icon className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* AUDIT */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">The Mascons AI Audit</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Where we <span className="text-gradient-brand">always start.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Most organizations know they need AI but aren't sure where to begin. Our structured
              2–4 week AI Readiness Audit identifies exactly where AI will deliver measurable ROI for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {auditSteps.map((s, i) => (
              <div key={s.title} className="glass-card rounded-2xl p-7 shadow-card relative">
                <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand mb-5 shadow-glow">
                  <s.icon className="h-5 w-5 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg"><Link to="/book-a-demo">Book Your Free AI Audit <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Live Agentic AI Products</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Deployed today. <span className="text-gradient-brand">Yours next month.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <div key={p.title} className="glass-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <p.icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {p.points.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10">
          ...and many more in active development. <Link to="/contact" className="text-primary underline-offset-4 hover:underline">Talk to us</Link> about your specific use case.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 md:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Stop wondering. <span className="text-gradient-brand">Start measuring.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          90 days from your AI Audit to measurable ROI in your business.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-10">
          <Link to="/book-a-demo">Book Your Free AI Audit <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, Send, Receipt, Building2, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Fintech Services — Mascons Canada" },
      { name: "description", content: "White-labeled digital wallets, card management, remittance, branchless banking, corporate expense, and Banking as a Service for Canada and the USA." },
      { property: "og:title", content: "Fintech-as-a-Service — Mascons Canada" },
      { property: "og:description", content: "Launch-ready, compliance-aware fintech platforms under your brand." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    desc: "Give your customers a seamless, secure digital wallet experience supporting P2P, bills, merchant payments, and loyalty — all under your brand.",
    features: [
      "Multi-currency wallet for CAD & USD markets",
      "Instant P2P transfers and QR-based payments",
      "PCI-DSS compliant infrastructure",
      "Full white-label customization",
      "Real-time transaction notifications & analytics",
    ],
  },
  {
    icon: CreditCard,
    title: "Card Management Solution",
    desc: "Issue, manage, and secure prepaid, debit, and credit card programs with a fully featured backend and customer-facing controls.",
    features: [
      "Virtual & physical card issuance",
      "Real-time spend controls and limits",
      "Tokenization & 3DS-2 secure authentication",
      "Loyalty and rewards program engine",
      "Network-agnostic (Visa, Mastercard, Interac)",
    ],
  },
  {
    icon: Send,
    title: "Remittance Platform",
    desc: "Move money across borders effortlessly. Compliant, fast, and built for the diverse Canadian and US diaspora corridors.",
    features: [
      "Multi-corridor support (Canada, USA, India, LATAM, more)",
      "FX rate aggregation and best-price routing",
      "FINTRAC and FinCEN compliance built in",
      "Cash pickup, wallet, and bank account payouts",
      "Mobile-first sender experience",
    ],
  },
  {
    icon: Receipt,
    title: "Corporate Expense Management",
    desc: "Replace spreadsheets and manual approval chains with an intelligent expense platform — ideal for distributed teams across North America.",
    features: [
      "Mobile receipt scanning with OCR",
      "Policy-based auto-approval workflows",
      "Real-time budget tracking by team or project",
      "QuickBooks, Xero, and SAP integrations",
      "Corporate card integration for full visibility",
    ],
  },
  {
    icon: Building2,
    title: "Branchless Banking Platform",
    desc: "Enable banking access through agents, mobile apps, or kiosks — without physical branch overhead. Perfect for credit unions and community banks.",
    features: [
      "Agent banking network management",
      "Mobile-first account opening and KYC",
      "Core banking integration APIs",
      "Multi-lingual interface for diverse communities",
      "Real-time settlement and reporting",
    ],
  },
  {
    icon: Layers,
    title: "Banking as a Service (BaaS)",
    desc: "Embed banking, payments, and card capabilities into your own product. Launch your fintech in weeks, not years.",
    features: [
      "Modular APIs for accounts, payments, and cards",
      "Sponsor bank network access",
      "KYC/KYB orchestration",
      "Compliance and reporting dashboards",
      "Sandbox-to-production parity",
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Fintech-as-a-Service</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Launch financial products <span className="text-gradient-brand">under your brand.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Our fintech suite gives businesses, banks, NBFCs, and enterprises the ability to launch,
            manage, and scale financial products under their own brand — powered by Mascons' battle-tested
            infrastructure.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild variant="hero" size="lg"><Link to="/book-a-demo">Book a Demo</Link></Button>
            <Button asChild variant="glow" size="lg"><Link to="/agentic-ai">Explore Agentic AI</Link></Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                  <s.icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 md:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          See it live on <span className="text-gradient-brand">your data.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          A 45-minute demo with real products, real data, and real ROI conversations.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-10">
          <Link to="/book-a-demo">Book a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </section>
    </div>
  );
}

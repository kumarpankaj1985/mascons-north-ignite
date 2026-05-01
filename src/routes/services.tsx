import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, Send, Receipt, Building2, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import fintechHero from "@/assets/fintech-hero.jpg";
import walletPhoto from "@/assets/wallet-photo.jpg";
import globalPhoto from "@/assets/global-photo.jpg";
import walletMobile from "@/assets/wallet-mobile.jpg";
import cardsPlatform from "@/assets/cards-platform.jpg";
import remittanceGlobe from "@/assets/remittance-globe.jpg";
import branchlessBanking from "@/assets/branchless-banking.jpg";
import baasApi from "@/assets/baas-api.jpg";
import expenseDashboard from "@/assets/expense-dashboard.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Fintech Software Development Company | Digital Wallet, Cards, Remittance, BaaS — Mascons" },
      { name: "description", content: "Mascons builds white-label fintech platforms: digital wallets, prepaid & credit card issuing, cross-border remittance, branchless banking, corporate expense management and Banking-as-a-Service (BaaS) APIs. Launch in weeks." },
      { name: "keywords", content: "fintech software development, white label digital wallet, card management platform, card issuing software, remittance software, cross border payments platform, branchless banking, banking as a service, BaaS, corporate expense management software, fintech platform provider, payment gateway development" },
      { property: "og:title", content: "Fintech-as-a-Service — White-Label Wallets, Cards, Remittance | Mascons" },
      { property: "og:description", content: "Launch-ready, compliance-aware fintech platforms under your brand. Wallets, cards, remittance, BaaS." },
      { property: "og:image", content: "https://mascons-north-ignite.lovable.app/og-services.jpg" },
      { name: "twitter:image", content: "https://mascons-north-ignite.lovable.app/og-services.jpg" },
      { rel: "canonical", href: "https://mascons-north-ignite.lovable.app/services" },
    ],
    links: [
      { rel: "canonical", href: "https://mascons-north-ignite.lovable.app/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fintech-as-a-Service by Mascons",
          provider: { "@type": "Organization", name: "Mascons", url: "https://mascons-north-ignite.lovable.app" },
          areaServed: "Worldwide",
          serviceType: ["Digital Wallet", "Card Management", "Remittance Platform", "Corporate Expense Management", "Branchless Banking", "Banking as a Service"],
          description: "White-label fintech platforms — digital wallets, card issuing, cross-border remittance, branchless banking, corporate expense management, and Banking-as-a-Service APIs.",
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Wallet,
    image: walletMobile,
    title: "Digital Wallet",
    desc: "Empower your customers with a seamless, secure digital wallet experience — P2P, bills, merchant payments, and loyalty — all under your brand.",
    features: [
      "Multi-currency wallet support",
      "Instant P2P transfers and QR-based payments",
      "PCI-DSS compliant infrastructure",
      "Full white-label customization",
      "Real-time transaction notifications & analytics",
    ],
  },
  {
    icon: CreditCard,
    image: cardsPlatform,
    title: "Card Management Solution",
    desc: "Simplify your payment processes. Issue, manage, and secure prepaid, debit, and credit card programs with a fully featured backend.",
    features: [
      "Virtual & physical card issuance",
      "Real-time spend controls and limits",
      "Tokenization & 3DS-2 secure authentication",
      "Loyalty and rewards program engine",
      "Network-agnostic (Visa, Mastercard)",
    ],
  },
  {
    icon: Send,
    image: remittanceGlobe,
    title: "Remittance Platform",
    desc: "Effortlessly transfer money across borders. Compliant, fast, and built for diverse corridors worldwide.",
    features: [
      "Multi-corridor support globally",
      "FX rate aggregation and best-price routing",
      "Compliance frameworks built in",
      "Cash pickup, wallet, and bank account payouts",
      "Mobile-first sender experience",
    ],
  },
  {
    icon: Receipt,
    image: expenseDashboard,
    title: "Corporate Expense Management",
    desc: "Manage corporate expenses effectively with real-time tracking and insights to optimize your financial operations.",
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
    image: branchlessBanking,
    title: "Branchless Banking Platform",
    desc: "Transform your banking experience — accessible and efficient banking services without physical branch overhead.",
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
    image: baasApi,
    title: "Banking as a Service (BaaS)",
    desc: "Unlock seamless banking solutions. Embed banking, payments, and card capabilities into your own product.",
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
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${fintechHero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
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

      {/* VISUAL STRIP */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl glass-card aspect-[16/10] shadow-card">
            <img src={walletPhoto} alt="Branded digital wallet on mobile" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">Wallet & Cards</p>
              <h3 className="mt-1 text-xl font-bold">Your brand, in every customer's pocket</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl glass-card aspect-[16/10] shadow-card">
            <img src={globalPhoto} alt="Global remittance corridors" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">Global Rails</p>
              <h3 className="mt-1 text-xl font-bold">Cross-border payments, ready to launch</h3>
            </div>
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

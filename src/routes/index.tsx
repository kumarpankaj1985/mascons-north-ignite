import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Shield, Rocket, Globe2, Zap, Wallet, CreditCard, Send, Store,
  ArrowRight, CheckCircle2, TrendingUp, Award, Building2,
} from "lucide-react";
import heroPoster from "@/assets/coffee-shop-pos-bright.jpg.asset.json";
import heroVideo from "@/assets/coffee-shop-pos-bright.mp4.asset.json";
import heroWebm from "@/assets/coffee-shop-pos-bright.webm.asset.json";
import fintechPillar from "@/assets/merchant-wallet-transaction.jpg";
import platformPhoto from "@/assets/payment-infrastructure-wallet.jpg";
import teamCollab from "@/assets/cross-border-people.jpg";
import walletPhoto from "@/assets/product-digital-wallet.jpg";
import cardPhoto from "@/assets/product-card-management.jpg";
import merchantPhoto from "@/assets/product-merchant-acquiring.jpg";
import globalPhoto from "@/assets/product-remittance-reference.jpg";
import closingPhoto from "@/assets/ai-audit-workshop.jpg";
import { ClientsSection } from "@/components/ClientsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mascons — Technology That Enables the Future of Fintech" },
      { name: "description", content: "Mascons provides enterprise-grade fintech software and infrastructure that empowers banks, businesses and financial institutions to build, launch and scale modern financial products." },
      { name: "keywords", content: "AI in fintech, fintech as a service, fintech software development company, white label fintech platform, digital wallet provider, card issuing platform, remittance software, banking as a service, BaaS provider, fintech infrastructure, AI fintech solutions" },
      { property: "og:title", content: "Mascons — Technology That Enables the Future of Fintech" },
      { property: "og:description", content: "Enterprise-grade fintech software and infrastructure for modern financial products." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mascons.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://mascons.in/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mascons",
          url: "https://mascons.in",
          logo: "https://mascons.in/logo-mascons.png",
          description: "AI powered Fintech-as-a-Service company building white-label fintech platforms for banks, NBFCs, and enterprises worldwide.",
          sameAs: [],
          areaServed: "Worldwide",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mascons",
          url: "https://mascons.in",
        }),
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "15+", label: "Years of Fintech Expertise", icon: Award },
  { value: "10", label: "Fintech Solutions", icon: Wallet },
  { value: "12+", label: "Countries with Deployments", icon: Globe2 },
  { value: "2", label: "Successful Fintech Exits", icon: TrendingUp },
];

const featured = [
  { icon: Wallet, title: "Digital Wallet", desc: "Launch branded wallets for transfers, bill payments and everyday spending.", image: walletPhoto },
  { icon: CreditCard, title: "Card Management", desc: "Issue and manage payment cards with real-time controls under your brand.", image: cardPhoto },
  { icon: Send, title: "Cross-Border Payments", desc: "Connect customers to efficient international payment corridors.", image: globalPhoto },
  { icon: Store, title: "Merchant Acquiring", desc: "Help merchants accept wallet, UPI and in-store payments.", image: merchantPhoto },
];

const whyUs = [
  "Proven founders with 15+ years in fintech and 2 successful exits",
  "Fintech infrastructure designed for real-world transactions",
  "End-to-end support: from product design to launch",
  "Global delivery with deep domain expertise in financial services",
  "White-label first: you own the brand, we power the technology",
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <img src={heroPoster.url} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_32%]" aria-hidden="true" />
        <video className="hero-motion-video absolute inset-0 h-full w-full object-cover object-[center_32%]" autoPlay muted loop playsInline preload="auto" poster={heroPoster.url} aria-hidden="true">
          <source src={heroWebm.url} type="video/webm" />
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Serving businesses globally
            </div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Enterprise Fintech Infrastructure</p>
            <h1 className="text-[clamp(2rem,5vw,4.25rem)] font-bold tracking-tight leading-[1.04] text-balance">
              Technology That Enables the <span className="text-gradient-brand">Future of Fintech</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Mascons provides enterprise-grade fintech software and infrastructure that empowers banks,
              businesses and financial institutions to build, launch and scale modern financial products.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">Explore Our Solutions <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glow" size="xl">
                <Link to="/book-a-demo">Book a Demo</Link>
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

      {/* CLIENTS & PARTNERS — moved up so visitors see trust signals immediately */}
      <ClientsSection />

      {/* TWO PILLARS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient-brand">modern finance.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From customer-facing payments to the infrastructure behind them,
            our fintech solutions are designed for scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={fintechPillar} alt="Merchant accepting a digital wallet payment at a retail store" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={1408} height={912} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-8 md:p-10 -mt-6 relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-6 shadow-glow">
                <Building2 className="h-6 w-6 text-brand-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fintech-as-a-Service</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                End-to-end, compliance-ready financial infrastructure — wallets, card issuing,
                remittance, branchless banking, BaaS, and expense management — all white-labeled
                and built to scale with your business.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={platformPhoto} alt="Customer sending money from a digital wallet with visible wallet balance and transactions" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={1280} height={800} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-8 md:p-10 -mt-6 relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-6 shadow-glow">
                <CreditCard className="h-6 w-6 text-brand-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Payment Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Build connected payment experiences with secure APIs, card programs,
                merchant acceptance and banking integrations.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Explore Platforms <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MASCONS */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-24">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Why Mascons</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Proven products. <span className="text-gradient-brand">Real deployments.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We don't sell roadmaps — we deliver platforms our clients launch in weeks, not years.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            <div className="relative min-h-64 overflow-hidden rounded-2xl glass-card shadow-card">
              <img src={teamCollab} alt="Global payments professionals collaborating on cross-border fintech" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1408} height={912} />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
            <ul className="grid gap-3 content-stretch">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3 glass-card rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Featured solutions</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Financial products. <span className="text-gradient-brand">Built to scale.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={f.image} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={1280} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <h3 className="absolute bottom-0 left-0 p-4 text-lg font-semibold leading-tight text-foreground">{f.title}</h3>
              </div>
              <div className="p-6 -mt-5 relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-5 shadow-card">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">What our <span className="text-gradient-brand">clients say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Mascons delivered our digital wallet in record time. The platform is rock solid and our customers love the experience.", a: "Director of Product", c: "HiWiPay" },
              { q: "From card issuance to compliance workflows, Mascons became a true extension of our team. Truly white-label, truly turnkey.", a: "Head of Payments", c: "Instapay Technologies" },
              { q: "We launched our remittance corridor in under 90 days. The platform scales effortlessly across geographies.", a: "Founder & CEO", c: "MEGO Forex" },
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
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl glass-card shadow-elevated p-10 md:p-16 text-center">
          <img src={closingPhoto} alt="Fintech professionals planning payment solutions" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" width={1408} height={912} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background/90" />
          <div className="relative">
            <Rocket className="h-10 w-10 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to <span className="text-gradient-brand">transform your business?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a ready-to-launch fintech platform or infrastructure tailored to
              your business — Mascons is your partner for the journey.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="xl"><Link to="/book-a-demo">Book a Demo</Link></Button>
              <Button asChild variant="glow" size="xl"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
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

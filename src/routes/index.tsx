import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Rocket, Globe2, Zap, Wallet, CreditCard, Building2,
  ArrowRight, CheckCircle2, TrendingUp, Award, Gift, Landmark,
} from "lucide-react";

import fintechPillar from "@/assets/fintech-pillar.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import expenseDashboard from "@/assets/expense-dashboard.jpg";
import cardsPlatform from "@/assets/cards-platform.jpg";
import globalPhoto from "@/assets/global-photo.jpg";
import { ClientsSection } from "@/components/ClientsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mascons — Technology That Enables the Future of Fintech" },
      { name: "description", content: "Mascons is an AI powered Fintech-as-a-Service company. We build white-label digital wallets, card management, remittance, BaaS platforms and intelligent fintech infrastructure for banks, NBFCs, and enterprises. Launch financial products under your brand." },
      { name: "keywords", content: "AI powered fintech as a service, fintech software development company, white label fintech platform, digital wallet provider, card issuing platform, remittance software, banking as a service, BaaS provider, fintech infrastructure, AI fintech solutions" },
      { property: "og:title", content: "Mascons — Technology That Enables the Future of Fintech" },
      { property: "og:description", content: "White-label, launch-ready fintech platforms powered by AI. Wallets, cards, remittance, BaaS and more under your brand." },
      { property: "og:type", content: "website" },
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
  { value: "3", label: "Continents of Global Clients", icon: Globe2 },
  { value: "2", label: "Successful Fintech Exits", icon: TrendingUp },
];

const featured = [
  { icon: Wallet, title: "AI Expense Management", desc: "Automate corporate spend, eliminate fraud, and save your finance team hours every week.", image: expenseDashboard },
  { icon: CreditCard, title: "Corporate Wallet & Cards", desc: "Spend control, real-time visibility, and instant card issuance under your brand.", image: cardsPlatform },
  { icon: Gift, title: "AI-Powered Rewards & Loyalty", desc: "Personalize incentives and keep customers engaged across every payment journey.", image: fintechPillar },
  { icon: Landmark, title: "Loan Origination & Management", desc: "Bring lending from application to repayment onto one connected platform.", image: teamCollab },
];

const whyUs = [
  "Proven founders with 15+ years in fintech and 2 successful exits",
  "Global delivery with deep domain expertise in financial services",
  "White-label first: you own the brand, we power the technology",
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 pt-16 md:pt-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-4 py-2 text-xs font-semibold text-primary mb-6 shadow-card">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Fintech infrastructure for the world
            </div>
            <p className="text-sm font-bold text-primary uppercase tracking-[0.18em] mb-5">MASCONS / FINANCIAL TECHNOLOGY</p>
            <h1 className="text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[1.05] max-w-4xl mx-auto">Technology That Enables the <span className="text-gradient-brand">Future of Fintech</span></h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl mx-auto">Mascons provides enterprise-grade fintech software and infrastructure that empowers banks, businesses and financial institutions to build, launch and scale modern financial products.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero" size="xl"><Link to="/services">Explore Our Solutions <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild variant="glow" size="xl"><Link to="/book-a-demo">Book a Demo</Link></Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> White-label platforms</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Built to scale globally</span>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-5xl px-2 md:px-12">
            <div className="relative overflow-hidden rounded-xl border-8 border-foreground/90 bg-foreground shadow-elevated aspect-[16/8]">
              <img src={fintechPillar} alt="Connected digital wallets and payment cards" className="w-full h-full object-cover" fetchPriority="high" />
            </div>
            <div className="absolute bottom-4 left-0 md:left-8 bg-card rounded-lg border border-border shadow-elevated px-5 py-4 text-left">
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Built for growth</p>
              <p className="mt-1 text-lg font-bold text-foreground">One platform. More possibilities.</p>
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

      {/* FINTECH PLATFORMS */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Built for the way <span className="text-gradient-brand">money moves.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From digital payments to lending, our connected platforms help financial products reach more people.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="glass-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={fintechPillar} alt="Fintech infrastructure visual" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
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
                Explore Fintech <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
            <div className="mt-8 relative overflow-hidden rounded-2xl glass-card aspect-[16/10] shadow-card">
              <img src={teamCollab} alt="Mascons team collaborating on fintech solutions" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1280} height={800} />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
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
            <div key={f.title} className="glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={f.image} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
              </div>
              <div className="p-6 -mt-5 relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-5 shadow-card">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: "Mascons delivered our digital wallet in record time. The platform is rock solid and our customers love the experience.", a: "Director of Product", c: "HiWiPay" },
              { q: "From card issuance to compliance workflows, Mascons became a true extension of our team. Truly white-label, truly turnkey.", a: "Head of Payments", c: "Instapay Technologies" },
              { q: "We launched our remittance corridor in under 90 days. The platform scales effortlessly across geographies.", a: "Founder & CEO", c: "MEGO Forex" },
              { q: "The Mascons team understands fintech end-to-end — from regulatory nuances to customer experience.", a: "Chief Technology Officer", c: "Royal Bank Pacific" },
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
          <img src={globalPhoto} alt="Global fintech delivery" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/95" />
          <div className="relative">
            <Rocket className="h-10 w-10 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to <span className="text-gradient-brand">transform your business?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Launch a modern financial product on infrastructure designed to grow with your business.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="xl"><Link to="/book-a-demo">Book a Demo</Link></Button>
              <Button asChild variant="glow" size="xl"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Target, Heart, Sparkles, Globe2, MapPin, Users, Briefcase, Lightbulb, UserCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mascons" },
      { name: "description", content: "Two decades of fintech innovation and a new chapter in Agentic AI. Meet the leadership team behind Mascons." },
      { property: "og:title", content: "About Mascons — Fintech & AI Innovators" },
      { property: "og:description", content: "Meet the founders and the mission behind Mascons." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Excellence in Execution", desc: "We deliver shipped products, not slide decks. Every engagement is measured by what goes live." },
  { icon: Heart, title: "Integrity First", desc: "Long-term relationships beat short-term wins. Transparency is non-negotiable." },
  { icon: Sparkles, title: "Innovation Always", desc: "We don't follow trends — we anticipate them. Our roadmap is shaped by where the industry is heading." },
  { icon: Users, title: "Client-Centered", desc: "Your success is our success. We measure performance by the outcomes we generate for clients." },
];

const leadership = [
  {
    name: "Pankaj Kumar",
    role: "Co-Founder",
    desc: "Pankaj drives Mascons' fintech vision, global growth strategy, and alliance partnerships. With deep expertise in identifying market opportunities, building strategic relationships, and scaling sales across geographies, he has been instrumental in expanding Mascons' footprint across three continents.",
  },
  {
    name: "Gaurav Gupta",
    role: "Co-Founder",
    desc: "Gaurav leads Mascons' product architecture, engineering strategy, and platform design. With a strong focus on building scalable, secure, and production-ready fintech platforms, he oversees the end-to-end product lifecycle — from concept to launch.",
  },
  {
    name: "Mandeep Kalasi",
    role: "Growth & International Business",
    desc: "Mandeep spearheads Mascons' global expansion strategy and international business development. With extensive experience in cross-border partnerships and market entry, he drives growth across new geographies and verticals.",
  },
  {
    name: "Abhay Desai",
    role: "Chief Product Officer",
    desc: "Abhay leads product strategy, roadmap, and user experience across all Mascons platforms. With a keen eye for market trends and deep customer empathy, he ensures every product delivers real business value and exceptional usability.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">About Mascons</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Innovative Solutions. <span className="text-gradient-brand">Tailored Fintech Platforms.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Two decades of fintech innovation. A new chapter in Agentic AI. Rooted in trust, driven by results.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-5xl px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            At MASCONS, we specialize in building white-labeled fintech solutions customized to your
            needs — so you can focus on growing, not building. Over the past decade and a half, we've
            built, scaled, and launched fintech platforms trusted by clients on three continents.
          </p>
          <p>
            Today we deliver compliance-aware solutions — backed by a global team of technologists,
            domain experts, and AI specialists. Our move into Agentic AI is a natural extension of
            that mission: helping organizations use intelligent automation to do more with less.
          </p>
          <p>
            Our product portfolio spans digital wallets, card management, remittance, branchless banking,
            corporate expense management, and Banking as a Service — all white-labeled, all launch-ready.
            Combined with our Agentic AI capabilities, we help businesses transform operations at every level.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Leadership</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Meet our <span className="text-gradient-brand">team</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((l) => (
              <div key={l.name} className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-surface-elevated border border-border mb-5">
                  <UserCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg">{l.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{l.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our Values</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">What we stand for</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-5">
                <v.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Globe2 className="h-10 w-10 text-accent mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Global Presence</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              With clients on three continents and a proven track record of delivering enterprise-grade
              fintech and AI solutions, Mascons serves businesses worldwide — from startups to large
              financial institutions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our headquarters in Bangalore powers a global delivery engine, ensuring clients
              get enterprise-grade infrastructure with hands-on support.
            </p>
          </div>
          <div className="glass-card rounded-xl p-8">
            <MapPin className="h-6 w-6 text-accent mb-3" />
            <div className="font-semibold text-lg">Headquarters</div>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              648/A, 4th Floor, Binnamangala 1st Stage,<br />
              Indiranagar, Bangalore - 560038
            </p>
            <p className="text-muted-foreground mt-2">support@mascons.in</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 md:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Let's build <span className="text-gradient-brand">something real</span>.
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="xl"><Link to="/book-a-demo">Book a Demo</Link></Button>
          <Button asChild variant="glow" size="xl"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>
    </div>
  );
}

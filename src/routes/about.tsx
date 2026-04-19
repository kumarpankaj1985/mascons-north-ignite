import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Target, Heart, Sparkles, Globe2, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mascons Canada" },
      { name: "description", content: "Built in India, built for the world, now serving North America. Two decades of fintech innovation and a new chapter in Agentic AI." },
      { property: "og:title", content: "About Mascons — Built for North America" },
      { property: "og:description", content: "Meet the founders and the mission behind Mascons Canada." },
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

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border/50">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">About Mascons</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Built in India. Built for the world. <span className="text-gradient-brand">Now serving North America.</span>
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
            Mascons was founded with one belief: that great financial technology should be accessible
            to every business — not just the biggest players. Our founders, <span className="text-foreground font-semibold">Gaurav Gupta</span> and{" "}
            <span className="text-foreground font-semibold">Pankaj Kumar</span>, spent over a decade building, scaling, and exiting fintech ventures
            before bringing that same operator's eye to Mascons.
          </p>
          <p>
            Today we deliver locally-relevant, compliance-aware solutions — backed by a global team of
            technologists, domain experts, and AI specialists. Our move into Agentic AI is a natural
            extension of that mission: helping organizations use intelligent automation to do more with less.
          </p>
          <p>
            Through our Canadian partnership, mascons.ca brings this proven product portfolio directly
            to businesses across Canada and the United States — with North American support, North American
            compliance, and the same battle-tested infrastructure trusted by clients on three continents.
          </p>
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

      {/* WHY NORTH AMERICA */}
      <section className="bg-surface/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Globe2 className="h-10 w-10 text-accent mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why North America?</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Canada and the United States represent two of the most sophisticated, regulated, and
              innovation-hungry markets on earth. North American businesses are demanding more from
              their fintech and AI partners — speed, compliance, transparency, and outcomes.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mascons brings 15+ years of global product depth and pairs it with on-the-ground
              partners in Canada — so you get enterprise-grade infrastructure with local accountability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { city: "Toronto", country: "Canada" },
              { city: "Vancouver", country: "Canada" },
              { city: "New York", country: "USA" },
              { city: "San Francisco", country: "USA" },
            ].map((l) => (
              <div key={l.city} className="glass-card rounded-xl p-5">
                <MapPin className="h-5 w-5 text-accent mb-2" />
                <div className="font-semibold">{l.city}</div>
                <div className="text-sm text-muted-foreground">{l.country}</div>
              </div>
            ))}
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

import { Link } from "@tanstack/react-router";
import { Sparkles, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-surface/40 mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
                <Sparkles className="h-5 w-5 text-brand-foreground" />
              </div>
              <span className="text-lg font-bold">MASCONS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Intelligent Fintech & Agentic AI solutions, purpose-built for Canada and the United States.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-md bg-surface hover:bg-surface-elevated transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Fintech Platforms</Link></li>
              <li><Link to="/agentic-ai" className="hover:text-foreground">Agentic AI</Link></li>
              <li><Link to="/agentic-ai" className="hover:text-foreground">AI Audit</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Banking as a Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/book-a-demo" className="hover:text-foreground">Book a Demo</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><a href="mailto:partners@mascons.ca" className="hover:text-foreground">Partner Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@mascons.ca</span>
              </li>
              <li>Mon–Fri · 9 AM – 6 PM EST/PST</li>
              <li>Toronto · Vancouver · New York</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mascons Canada. All rights reserved.</p>
          <p>Built in India · Built for the world · Now serving North America</p>
        </div>
      </div>
    </footer>
  );
}

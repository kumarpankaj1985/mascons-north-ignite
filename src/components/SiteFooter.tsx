import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-foreground text-primary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-1">
              <span className="text-xl font-extrabold tracking-tight text-primary-foreground">MASCONS</span>
              <span className="flex gap-[2px] ml-0.5">
                <span className="w-[3px] h-5 bg-accent rounded-sm" />
                <span className="w-[3px] h-5 bg-accent rounded-sm opacity-70" />
                <span className="w-[3px] h-5 bg-accent rounded-sm opacity-40" />
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/65 leading-relaxed">
              Enterprise fintech platforms and infrastructure for businesses worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li><Link to="/services" className="hover:text-primary-foreground">Fintech Platforms</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground">Banking as a Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/book-a-demo" className="hover:text-primary-foreground">Book a Demo</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/65">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@mascons.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground/90">India Office — HSR Layout</p>
                  <span>652, 22nd Cross, 23rd Main Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground/90">Canada Office</p>
                  <span>295 The West Mall, Etobicoke ON M9C 4Z4, Canada</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Mascons. All rights reserved.</p>
          <p>Fintech technology — Serving businesses globally</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal/40">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center bg-gold text-gold-foreground">
                <Shield className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="font-display text-lg tracking-wider">SENTINEL OPS</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Ontario's trusted security partner. Licensed under the Private Security and
              Investigative Services Act, 2005.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold">SERVICES</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Physical Guarding</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Mobile Patrols</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Concierge Security</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Event Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold">COMPANY</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-foreground">Industries</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Request a Proposal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gold">24/7 DISPATCH</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 1 (800) 555-1234</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> dispatch@sentinelops.ca</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Toronto · Ottawa · Kitchener-Waterloo</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs uppercase tracking-wider text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Sentinel Ops Security Inc. All rights reserved.</div>
          <div>Licence # PSB-12345 · WSIB Insured · ISO 9001</div>
        </div>
      </div>
    </footer>
  );
}

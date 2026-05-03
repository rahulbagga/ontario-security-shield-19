import { Link } from "@tanstack/react-router";
import { Shield, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:rotate-6">
            <Shield className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider text-foreground">SENTINEL OPS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Ontario Security</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold">
            <Phone className="h-4 w-4" /> 24/7 Dispatch
          </a>
          <Link
            to="/contact"
            className="bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition-all hover:shadow-[var(--shadow-gold)]"
          >
            Request a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-px mx-auto flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gold px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gold-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

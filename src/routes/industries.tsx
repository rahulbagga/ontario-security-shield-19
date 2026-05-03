import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, ShoppingBag, HardHat, Hospital, GraduationCap, Warehouse, Hotel, Home } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Protect | Sentinel Ops Ontario Security" },
      { name: "description", content: "Specialized security solutions for commercial, retail, healthcare, construction, education and residential clients across Ontario." },
      { property: "og:title", content: "Industries — Sentinel Ops" },
      { property: "og:description", content: "Sector-specific security across Ontario." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Building2, title: "Commercial & Office", desc: "Lobby concierge, after-hours patrol and access control for office towers and business parks." },
  { icon: ShoppingBag, title: "Retail & Loss Prevention", desc: "Uniformed and plain-clothes officers reducing shrinkage and managing incident response." },
  { icon: HardHat, title: "Construction Sites", desc: "Overnight guarding, equipment protection and site access control on active job sites." },
  { icon: Hospital, title: "Healthcare", desc: "Trained officers for hospitals, clinics and long-term care — de-escalation certified." },
  { icon: GraduationCap, title: "Education", desc: "Campus patrol, event coverage and visitor management for schools and post-secondary." },
  { icon: Warehouse, title: "Industrial & Logistics", desc: "Gatehouse, trailer yard checks and dock supervision for warehouses and distribution centres." },
  { icon: Hotel, title: "Hospitality & Events", desc: "Discreet front-of-house and back-of-house security for hotels, venues and major events." },
  { icon: Home, title: "Residential & Condos", desc: "24/7 concierge, parking enforcement and resident services for condo boards and HOAs." },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="flex items-center gap-3">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Sectors</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
            Industries We <span className="text-gold">Protect.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We build sector-specific deployment plans — from condo concierge to active construction sites — across Ontario.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-background p-8 transition-colors hover:bg-card">
              <Icon className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg tracking-wider">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-charcoal/40">
        <div className="container-px mx-auto max-w-7xl py-16 text-center">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Tailored to your sector.</h2>
          <Link to="/contact" className="mt-6 inline-block bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground hover:shadow-[var(--shadow-gold)]">
            Book a Site Assessment
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

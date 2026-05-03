import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Truck, UserCheck, Users, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import heroImg from "@/assets/hero-guard.jpg";
import patrolImg from "@/assets/patrol.jpg";
import conciergeImg from "@/assets/concierge.jpg";
import eventImg from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sentinel Ops — Ontario's Trusted Security Partner | Toronto, Ottawa, KW" },
      { name: "description", content: "Licensed security guard services across Ontario. Physical guarding, mobile patrols, concierge & event security. 24/7 dispatch. Request a free site assessment." },
      { property: "og:title", content: "Sentinel Ops — Ontario Security Services" },
      { property: "og:description", content: "Ontario's trusted security partner. Licensed, insured and on patrol 24/7." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Shield, title: "Physical Guarding", description: "Uniformed, licensed officers stationed on-site to protect personnel, property and assets around the clock.", image: heroImg },
  { icon: Truck, title: "Mobile Patrols", description: "GPS-tracked patrol units conducting randomized, verifiable rounds across your facilities and parking lots.", image: patrolImg },
  { icon: UserCheck, title: "Concierge Security", description: "Polished, customer-facing officers managing access control and front-of-house for residential and commercial properties.", image: conciergeImg },
  { icon: Users, title: "Event Security", description: "Crowd management, perimeter control and VIP protection for venues, festivals and corporate events.", image: eventImg },
];

const regions = ["Greater Toronto Area", "Ottawa", "Kitchener-Waterloo", "Hamilton", "Mississauga", "London"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Licensed Ontario security guard on duty" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        <div className="container-px relative mx-auto max-w-7xl py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="gold-rule" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Licensed · Insured · Vigilant
              </span>
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Ontario's <span className="text-gold">Trusted</span> Security Partner.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Discipline meets discretion. Sentinel Ops delivers licensed guarding,
              mobile patrols and 24/7 dispatch across the GTA, Ottawa and Kitchener-Waterloo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground transition-all hover:shadow-[var(--shadow-gold)]"
              >
                Free Site Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-gold hover:text-gold"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "24/7", v: "Dispatch Center" },
                { k: "500+", v: "Licensed Officers" },
                { k: "15yr", v: "On Patrol" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="gold-rule" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Do</span>
            </div>
            <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
              Specialized Security Services.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every assignment begins with a free site assessment and a deployment plan tailored to your risk profile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="border-y border-border bg-charcoal/40">
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="gold-rule" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Compliance & Trust</span>
            </div>
            <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
              Fully Licensed.<br />Provincially Compliant.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Every Sentinel Ops officer is licensed by the Ontario Ministry of the Solicitor
              General under the Private Security and Investigative Services Act, 2005.
              We are WSIB insured, fully bonded, and operate to ISO 9001 standards.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Ministry of the Solicitor General licensing on every officer",
                "WSIB insured and $5M general liability coverage",
                "Use-of-Force and First Aid certified personnel",
                "ISO 9001:2015 quality-managed operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { k: "Sol. Gen.", v: "Licence # PSB-12345" },
                { k: "WSIB", v: "Account Active" },
                { k: "ISO", v: "9001:2015" },
                { k: "Bond", v: "$5M Liability" },
              ].map((b) => (
                <div key={b.k} className="border border-border bg-card p-6 transition-colors hover:border-gold">
                  <div className="font-display text-2xl tracking-wider text-gold">{b.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Boots on the Ground</span>
            <div className="gold-rule" />
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
            Serving Ontario, City by City.
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r} className="flex items-center gap-3 border border-border bg-card/50 px-5 py-4 transition-colors hover:border-gold hover:bg-card">
              <MapPin className="h-5 w-5 text-gold" />
              <span className="font-display tracking-wider">{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 stripe-bg bg-charcoal/60" />
        <div className="container-px relative mx-auto max-w-7xl py-20 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
            Need security on site <span className="text-gold">tonight?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our 24/7 dispatch center can deploy licensed officers to any Ontario site, often within hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+18005551234" className="bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground hover:shadow-[var(--shadow-gold)]">
              Call Dispatch · 1 (800) 555-1234
            </a>
            <Link to="/contact" className="border border-border px-7 py-4 text-sm font-bold uppercase tracking-wider hover:border-gold hover:text-gold">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

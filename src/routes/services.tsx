import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Truck, UserCheck, Users, Eye, Lock, Siren, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import heroImg from "@/assets/hero-guard.jpg";
import patrolImg from "@/assets/patrol.jpg";
import conciergeImg from "@/assets/concierge.jpg";
import eventImg from "@/assets/event.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services — Guarding, Mobile Patrol & More | Sentinel Ops Ontario" },
      { name: "description", content: "Full-spectrum security: physical guarding, mobile patrol, alarm response, loss prevention, executive protection and event security across Ontario." },
      { property: "og:title", content: "Ontario Security Services — Sentinel Ops" },
      { property: "og:description", content: "Licensed guarding, mobile patrol, concierge & executive protection across Ontario." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Shield, title: "Physical Guarding", description: "Uniformed officers deployed to your site for visible deterrence, access control and incident response — 24/7.", image: heroImg },
  { icon: Truck, title: "Mobile Patrols", description: "Marked patrol vehicles conducting GPS-verified rounds across multiple sites with digital reporting.", image: patrolImg },
  { icon: UserCheck, title: "Concierge Security", description: "Front-desk officers blending hospitality with vigilance for residential and commercial properties.", image: conciergeImg },
  { icon: Users, title: "Event Security", description: "Crowd management, bag checks and VIP escort for festivals, conferences and private events.", image: eventImg },
  { icon: Siren, title: "Alarm Response", description: "Rapid response units dispatched on alarm activation for verification and intervention." },
  { icon: Eye, title: "Loss Prevention", description: "Plain-clothes retail officers and CCTV monitoring to reduce shrinkage and apprehend offenders." },
  { icon: Briefcase, title: "Executive Protection", description: "Discreet close-protection details for executives, dignitaries and high-net-worth clients." },
  { icon: Lock, title: "Construction Site Security", description: "Overnight guarding and patrol of active job sites to prevent theft, vandalism and trespass." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="flex items-center gap-3">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Capabilities</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
            Security Services<br /><span className="text-gold">Built for Ontario.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From a single concierge post to multi-site mobile patrol contracts, every deployment
            is staffed by licensed officers, supervised in real time and backed by our 24/7 dispatch.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-charcoal/40">
        <div className="container-px mx-auto max-w-7xl py-16 text-center">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Don't see what you need?
          </h2>
          <p className="mt-3 text-muted-foreground">We tailor every contract. Let's talk.</p>
          <Link to="/contact" className="mt-6 inline-block bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground hover:shadow-[var(--shadow-gold)]">
            Request a Proposal
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

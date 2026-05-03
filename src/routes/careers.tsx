import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Security Guard Careers in Ontario | Sentinel Ops" },
      { name: "description", content: "Join Sentinel Ops. Hiring licensed security guards across the GTA, Ottawa and Kitchener-Waterloo. Competitive pay, real supervision, room to grow." },
      { property: "og:title", content: "Careers at Sentinel Ops" },
      { property: "og:description", content: "Hiring licensed security professionals across Ontario." },
    ],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Concierge Security Officer", location: "Toronto, ON", type: "Full-Time" },
  { title: "Mobile Patrol Driver", location: "Mississauga, ON", type: "Full-Time" },
  { title: "Construction Site Guard", location: "Kitchener, ON", type: "Overnight" },
  { title: "Event Security Officer", location: "Ottawa, ON", type: "Casual" },
  { title: "Dispatch Operator", location: "Toronto, ON", type: "Rotating Shifts" },
  { title: "Site Supervisor", location: "Hamilton, ON", type: "Full-Time" },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="flex items-center gap-3">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Careers</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
            Earn The <span className="text-gold">Uniform.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We hire licensed, professional security officers who take pride in the work.
            Competitive pay. Real supervision. Pathways to supervisor and dispatch roles.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-3xl tracking-tight">Open Positions</h2>
        <div className="mt-8 divide-y divide-border border border-border">
          {openings.map((j) => (
            <div key={j.title} className="group flex flex-col gap-3 p-6 transition-colors hover:bg-card md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-lg tracking-wider">{j.title}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {j.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {j.type}</span>
                </div>
              </div>
              <a href="mailto:careers@sentinelops.ca" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-gold">
                Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-gold/40 bg-gold/5 p-8">
          <h3 className="font-display text-2xl tracking-wider">Requirements</h3>
          <ul className="mt-4 grid gap-2 text-muted-foreground sm:grid-cols-2">
            <li>• Valid Ontario Security Guard Licence (PSISA 2005)</li>
            <li>• First Aid / CPR-C certification</li>
            <li>• Canadian work authorization</li>
            <li>• Clean criminal background check</li>
            <li>• Strong written English for incident reports</li>
            <li>• Reliable transportation an asset</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustBar } from "@/components/TrustBar";
import heroImg from "@/assets/hero-guard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sentinel Ops — Ontario Security Company" },
      { name: "description", content: "Founded in Ontario, Sentinel Ops delivers disciplined, licensed security services to commercial, residential and industrial clients across the province." },
      { property: "og:title", content: "About Sentinel Ops" },
      { property: "og:description", content: "Disciplined. Licensed. Vigilant. Ontario's trusted security partner." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", desc: "Protect Ontario's people, property and reputation through disciplined, accountable security operations." },
  { icon: Eye, title: "Vigilance", desc: "Trained officers, real-time supervision and verifiable patrol logs — never a quiet shift unaccounted for." },
  { icon: Award, title: "Standards", desc: "Every guard licensed under PSISA 2005, screened, uniformed and continuously trained." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-2 lg:items-center md:py-28">
          <div>
            <div className="flex items-center gap-3">
              <div className="gold-rule" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About Us</span>
            </div>
            <h1 className="mt-5 font-display text-5xl tracking-tight md:text-6xl">
              Built in Ontario.<br /><span className="text-gold">On Patrol Since 2010.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sentinel Ops was founded by veteran security professionals who saw a gap between
              promised service and what showed up at the gate. We rebuilt the model: real
              supervision, real reporting, and officers who take pride in the uniform.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, more than 500 licensed officers report to our 24/7 dispatch center, protecting
              clients from condo lobbies in downtown Toronto to construction sites in
              Kitchener-Waterloo and federal facilities in Ottawa. Every officer is licensed
              under the Private Security and Investigative Services Act, 2005, and every shift
              is digitally logged and supervised.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl" />
            <img src={heroImg} alt="Licensed Sentinel Ops security officer" loading="lazy" className="relative w-full border border-border object-cover grayscale" width={1200} height={900} />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border bg-card p-8 transition-colors hover:border-gold">
              <Icon className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl tracking-wider">{title}</h3>
              <p className="mt-3 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-charcoal/40">
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-tight">Our Standards Are Non-Negotiable.</h2>
            <p className="mt-4 text-muted-foreground">
              Every Sentinel Ops officer earns the uniform. Below are the baseline standards we
              apply before an officer is ever assigned to your site.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Provincial licensing under PSISA 2005 verified before deployment",
              "Background check, reference check and Canadian work authorization",
              "Use-of-Force, First Aid/CPR-C and Mental Health First Aid training",
              "Site-specific orientation prior to first shift",
              "Live supervision via mobile patrol and dispatch check-ins",
              "Digital incident reports delivered to clients in real time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 text-center">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          Ready to raise your <span className="text-gold">security standard?</span>
        </h2>
        <Link to="/contact" className="mt-8 inline-block bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground hover:shadow-[var(--shadow-gold)]">
          Request a Proposal
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

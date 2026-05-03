import { ShieldCheck, Award, BadgeCheck, FileCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Ministry of the Solicitor General Licensed" },
  { icon: BadgeCheck, label: "WSIB Insured & Bonded" },
  { icon: Award, label: "ISO 9001:2015 Certified" },
  { icon: FileCheck, label: "PSISA 2005 Compliant" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-charcoal/60 stripe-bg">
      <div className="container-px mx-auto grid max-w-7xl gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-7 w-7 flex-shrink-0 text-gold" strokeWidth={1.75} />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

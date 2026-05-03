import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Free Site Assessment | Sentinel Ops Ontario" },
      { name: "description", content: "Contact Sentinel Ops for a free Ontario site assessment. 24/7 dispatch. Toronto, Ottawa, Kitchener-Waterloo and across the province." },
      { property: "og:title", content: "Contact Sentinel Ops" },
      { property: "og:description", content: "Request a free site assessment from Ontario's trusted security partner." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <div className="flex items-center gap-3">
            <div className="gold-rule" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl tracking-tight md:text-6xl">
            Request a <span className="text-gold">Free Site Assessment.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us about your facility. A senior account manager will respond within one business hour during dispatch hours.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <aside className="space-y-6 lg:col-span-1">
            <div className="border border-border bg-card p-6">
              <h3 className="font-display text-xl tracking-wider text-gold">24/7 Dispatch</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> 1 (800) 555-1234</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> dispatch@sentinelops.ca</li>
                <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5" /> Always on. 365 days a year.</li>
              </ul>
            </div>
            <div className="border border-border bg-card p-6">
              <h3 className="font-display text-xl tracking-wider text-gold">Service Areas</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Greater Toronto Area</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Ottawa Region</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Kitchener-Waterloo</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Hamilton & Niagara</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> London & Southwestern ON</li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center border border-gold bg-gold/5 p-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-gold" />
                <h2 className="mt-6 font-display text-3xl tracking-wider">Request Received.</h2>
                <p className="mt-3 text-muted-foreground">
                  An account manager will be in touch within one business hour.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company / Organization" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Service Type
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option>Physical Guarding</option>
                      <option>Mobile Patrol</option>
                      <option>Concierge Security</option>
                      <option>Event Security</option>
                      <option>Alarm Response</option>
                      <option>Loss Prevention</option>
                      <option>Executive Protection</option>
                      <option>Construction Site Security</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Facility Address" name="address" placeholder="123 Bay St, Toronto, ON" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Tell us about your site
                    </label>
                    <textarea
                      rows={5}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                      placeholder="Hours of coverage, current security setup, specific concerns…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground transition-all hover:shadow-[var(--shadow-gold)] sm:w-auto"
                >
                  Request a Proposal
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by Sentinel Ops regarding your security needs.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

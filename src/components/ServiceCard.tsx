import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-gold">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>
      )}
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-gold-foreground">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="mt-5 font-display text-xl tracking-wider text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

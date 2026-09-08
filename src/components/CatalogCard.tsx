import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/data/site";

export function CatalogCard({ item, to }: { item: CatalogItem; to: string }) {
  return (
    <Link to={to} className="catalog-card block">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold">{item.title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  );
}

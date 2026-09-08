import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import type { CatalogItem } from "@/data/site";
import { Container, CtaLink, SectionTag } from "@/components/ui/Primitives";

export function CatalogDetail({
  item,
  tag,
  backTo,
  backLabel,
}: {
  item: CatalogItem;
  tag: string;
  backTo: string;
  backLabel: string;
}) {
  return (
    <article className="pt-36 pb-28">
      <Container>
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTag>{tag}</SectionTag>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{item.title}</h1>
            <p className="mt-6 border-l-2 border-accent pl-5 text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-8 leading-relaxed text-muted-foreground">{item.detail}</p>
            <ul className="mt-8 space-y-3">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaLink to="/contact">Start a project</CtaLink>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-2xl">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </article>
  );
}

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/site";

export function ProjectCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous projects"
          onClick={() => scrollBy(-1)}
          className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next projects"
          onClick={() => scrollBy(1)}
          className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.slug}
            className="catalog-card w-[88%] shrink-0 snap-start sm:w-[420px]"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

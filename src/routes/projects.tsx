import { createFileRoute } from "@tanstack/react-router";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Reveal } from "@/components/Reveal";
import { CtaLink, PageHeader, Section } from "@/components/ui/Primitives";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & case studies | Tevexxo" },
      {
        name: "description",
        content:
          "Selected Tevexxo project work across logistics, health, retail, analytics and applied AI, with the results each engagement delivered.",
      },
      { property: "og:title", content: "Projects | Tevexxo" },
      { property: "og:description", content: "Selected work and the results it delivered." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        tag="Selected work"
        title={
          <>
            Work measured by <span className="text-gradient">what changed.</span>
          </>
        }
        intro="A sample of recent engagements. Each one is summarised by the operational result, not the feature list."
      />
      <Section className="pt-16">
        <ProjectCarousel />
      </Section>
      <Section className="border-t border-border pt-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <article className="depth-card h-full p-7">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <CtaLink to="/contact">Talk about your project</CtaLink>
        </div>
      </Section>
    </>
  );
}

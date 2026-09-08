import { createFileRoute } from "@tanstack/react-router";
import { CatalogCard } from "@/components/CatalogCard";
import { Reveal } from "@/components/Reveal";
import { Container, PageHeader, Section } from "@/components/ui/Primitives";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, Design, Cloud & AI | Tevexxo" },
      {
        name: "description",
        content:
          "Tevexxo services: web development, mobile applications, UI & UX design, and cloud, data and AI engineering.",
      },
      { property: "og:title", content: "Services | Tevexxo" },
      {
        property: "og:description",
        content: "Web, mobile, design and cloud/AI engineering from one senior delivery team.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHeader
        tag="Services"
        title={
          <>
            Engineering that moves <span className="text-gradient">business forward.</span>
          </>
        }
        intro="Four disciplines that combine into one delivery team, sized to the problem and accountable for the result."
      />
      <Section className="pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <CatalogCard item={s} to={`/services/${s.slug}`} />
            </Reveal>
          ))}
        </div>
      </Section>
      <Container className="pb-24" />
    </>
  );
}

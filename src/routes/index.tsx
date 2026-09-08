import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { CursorGrid } from "@/components/CursorGrid";
import { Reveal } from "@/components/Reveal";
import { CatalogCard } from "@/components/CatalogCard";
import { SocialConnect } from "@/components/SocialConnect";
import { Container, CtaLink, Section, SectionTag } from "@/components/ui/Primitives";
import { products, services, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tevexxo — We build the tech your business runs on" },
      {
        name: "description",
        content:
          "Tevexxo is a next-gen tech studio building web, mobile, cloud and AI software, plus in-house products like FlowDesk, Pulseboard and CartSuite.",
      },
      { property: "og:title", content: "Tevexxo — We build the tech your business runs on" },
      {
        property: "og:description",
        content: "A tech studio that builds software and ships digital products.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Abstract luminous amber technology wave"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        <CursorGrid />
        <Container className="relative py-40 lg:py-52">
          <SectionTag>Next-gen tech studio</SectionTag>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">
            We build the tech <span className="text-gradient">your business runs on.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-2 border-accent pl-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            From first architecture decision to post-launch support, we design and engineer the
            software that carries your operation — and ship products of our own along the way.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaLink to="/contact">Start a project</CtaLink>
            <CtaLink to="/products" variant="outline">
              See our products
            </CtaLink>
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section>
        <Reveal>
          <SectionTag>What we do</SectionTag>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
            Engineering that moves business forward.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Four disciplines, one delivery team. We take responsibility for the outcome, not just
            the ticket.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <CatalogCard item={s} to={`/services/${s.slug}`} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink to="/services" variant="outline">
            View all
          </CtaLink>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <SectionTag>Our products</SectionTag>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
            Tools shaped by real work.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Every product started as something we needed ourselves, then earned its place with
            client teams.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <CatalogCard item={p} to={`/products/${p.slug}`} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink to="/products" variant="outline">
            View all
          </CtaLink>
        </div>
      </Section>

      <SocialConnect />
    </>
  );
}

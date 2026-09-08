import { createFileRoute } from "@tanstack/react-router";
import { CatalogCard } from "@/components/CatalogCard";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/ui/Primitives";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — FlowDesk, Pulseboard & CartSuite | Tevexxo" },
      {
        name: "description",
        content:
          "In-house products from Tevexxo: FlowDesk project workspace, Pulseboard live dashboards, CartSuite headless commerce and custom platforms.",
      },
      { property: "og:title", content: "Products | Tevexxo" },
      { property: "og:description", content: "Tools shaped by real work." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHeader
        tag="Our products"
        title={
          <>
            Tools shaped by <span className="text-gradient">real work.</span>
          </>
        }
        intro="Each product began inside a delivery team solving its own problem, then hardened into something other teams could rely on."
      />
      <Section className="pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <CatalogCard item={p} to={`/products/${p.slug}`} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

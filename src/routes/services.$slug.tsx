import { createFileRoute, notFound } from "@tanstack/react-router";
import { CatalogDetail } from "@/components/CatalogDetail";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const item = services.find((s) => s.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable | Tevexxo" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.title} — Services | Tevexxo` },
        { name: "description", content: item.description },
        { property: "og:title", content: `${item.title} | Tevexxo` },
        { property: "og:description", content: item.description },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { item } = Route.useLoaderData();
  return <CatalogDetail item={item} tag="Service" backTo="/services" backLabel="All services" />;
}

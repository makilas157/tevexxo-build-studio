import { createFileRoute, notFound } from "@tanstack/react-router";
import { CatalogDetail } from "@/components/CatalogDetail";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const item = products.find((p) => p.slug === params.slug);
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
        { title: `${item.title} — Products | Tevexxo` },
        { name: "description", content: item.description },
        { property: "og:title", content: `${item.title} | Tevexxo` },
        { property: "og:description", content: item.description },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { item } = Route.useLoaderData();
  return <CatalogDetail item={item} tag="Product" backTo="/products" backLabel="All products" />;
}

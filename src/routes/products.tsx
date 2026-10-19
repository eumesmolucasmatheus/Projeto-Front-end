import { createFileRoute } from "@tanstack/react-router";
import { ProductListingPage } from "@/pages/ProductListingPage";

export const Route = createFileRoute("/products")({
  validateSearch: (s: Record<string, unknown>): { filter?: string } =>
    typeof s["filter"] === "string" && s["filter"] ? { filter: s["filter"] } : {},
  head: () => ({
    meta: [
      { title: "Produtos | Digital Store" },
      { name: "description", content: "Todos os produtos da Digital Store com filtros e ordenação por preço." },
      { property: "og:title", content: "Produtos | Digital Store" },
      { property: "og:description", content: "Todos os produtos da Digital Store com filtros e ordenação por preço." },
    ],
  }),
  component: ProductsRoute,
});

function ProductsRoute() {
  const { filter } = Route.useSearch();
  return <ProductListingPage key={filter ?? ""} search={filter} />;
}

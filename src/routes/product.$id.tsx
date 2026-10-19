import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductViewPage } from "@/pages/ProductViewPage";
import { SimplePage } from "@/pages/SimplePage";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} | Digital Store` },
          { name: "description", content: `Compre ${loaderData.product.name} na Digital Store.` },
          { property: "og:title", content: `${loaderData.product.name} | Digital Store` },
          { property: "og:description", content: `Compre ${loaderData.product.name} na Digital Store.` },
        ]
      : [{ title: "Produto não encontrado | Digital Store" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <SimplePage title="Produto não encontrado" text="Esse produto não existe ou foi removido." />,
  component: ProductRoute,
});

function ProductRoute() {
  const { product } = Route.useLoaderData();
  return <ProductViewPage key={product.id} product={product} />;
}

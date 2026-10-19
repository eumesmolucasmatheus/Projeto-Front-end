import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

type ProductListingProps = { products: Product[]; columns?: 3 | 4 };

export function ProductListing({ products, columns = 4 }: ProductListingProps) {
  if (!products.length) {
    return <p className="py-16 text-center text-dark-gray-3">Nenhum produto encontrado.</p>;
  }
  return (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-6", columns === 4 && "lg:grid-cols-4")}>
      {products.map((p) => (
        <ProductCard key={p.id} id={p.id} image={p.image} name={p.name} category={p.category} price={p.price} priceDiscount={p.priceDiscount} />
      ))}
    </div>
  );
}

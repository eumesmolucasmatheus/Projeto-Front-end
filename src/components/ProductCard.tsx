import { Link } from "@tanstack/react-router";
import { formatPrice } from "@/data/products";

export type ProductCardProps = {
  id: string;
  image: string;
  name: string;
  category?: string | undefined;
  price: number;
  priceDiscount?: number | undefined;
};

export function ProductCard({ id, image, name, category, price, priceDiscount }: ProductCardProps) {
  const off = priceDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0;
  return (
    <Link to="/product/$id" params={{ id }} className="group block min-w-0">
      <div className="relative flex aspect-[292/321] items-center justify-center overflow-hidden rounded-md bg-surface p-6 shadow-sm">
        {off > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-dark-gray-2">
            {off}% OFF
          </span>
        )}
        <img src={image} alt={name} loading="lazy" className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>
      {category && <p className="mt-4 text-xs font-bold text-light-gray">{category}</p>}
      <h3 className="mt-1 text-base text-dark-gray-2 group-hover:text-primary">{name}</h3>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {priceDiscount ? (
          <>
            <span className="whitespace-nowrap text-2xl text-light-gray line-through">{formatPrice(price)}</span>
            <span className="whitespace-nowrap text-2xl font-bold text-dark-gray">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="whitespace-nowrap text-2xl font-bold text-dark-gray">{formatPrice(price)}</span>
        )}
      </div>
    </Link>
  );
}

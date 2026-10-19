import type { ReactNode } from "react";
import starIcon from "@/assets/star-icon.svg";
import { formatPrice } from "@/data/products";

type BuyBoxProps = {
  name: string;
  reference: string;
  stars: number;
  rating: number;
  price: number;
  priceDiscount?: number | undefined;
  description: string;
  children?: ReactNode;
};

export function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }: BuyBoxProps) {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold leading-tight text-dark-gray lg:text-[32px]">{name}</h1>
      <p className="mt-2 text-xs text-dark-gray-3">{reference}</p>
      <div className="mt-3 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-md bg-warning px-2.5 py-1 text-sm font-bold text-surface">
          {stars} <img src={starIcon} alt="" className="size-3.5 brightness-0 invert" />
        </span>
        <span className="text-sm text-light-gray">({rating} avaliações)</span>
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        {priceDiscount ? (
          <>
            <span className="text-[32px] font-bold text-dark-gray-2">{formatPrice(priceDiscount)}</span>
            <span className="text-base text-light-gray-2 line-through">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-dark-gray-2">{formatPrice(price)}</span>
        )}
      </div>
      <h2 className="mt-5 text-sm font-bold text-light-gray">Descrição do produto</h2>
      <p className="mt-2 text-sm leading-relaxed text-dark-gray-2">{description}</p>
      {children}
      <button type="button" className="mt-8 h-12 w-full max-w-[220px] rounded-md bg-warning text-base font-bold text-surface transition-opacity hover:opacity-90">
        COMPRAR
      </button>
    </div>
  );
}

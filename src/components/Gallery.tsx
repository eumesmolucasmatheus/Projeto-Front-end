import { useState } from "react";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import { cn } from "@/lib/utils";

type GalleryProps = {
  images: { src: string }[];
  width?: string | number;
  height?: string | number;
  radius?: string;
  showThumbs?: boolean;
  className?: string;
};

const px = (v?: string | number) => (v === undefined ? undefined : parseInt(String(v), 10));

export function Gallery({ images, width, height, radius = "0px", showThumbs, className }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const w = px(width);
  const h = px(height);
  const last = images.length - 1;

  return (
    <div className={cn("w-full", className)} style={{ maxWidth: w }}>
      <div
        className="relative w-full overflow-hidden bg-promo"
        style={{ borderRadius: radius, aspectRatio: w && h ? `${w} / ${h}` : "16 / 9" }}
      >
        <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <img key={img.src + i} src={img.src} alt={`Imagem ${i + 1}`} className="h-full w-full shrink-0 object-cover" />
          ))}
        </div>
        <button
          type="button"
          aria-label="Imagem anterior"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 transition-opacity hover:bg-surface/40 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <img src={arrowLeft} alt="" className="size-8" />
        </button>
        <button
          type="button"
          aria-label="Próxima imagem"
          disabled={index === last}
          onClick={() => setIndex((i) => Math.min(last, i + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 transition-opacity hover:bg-surface/40 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <img src={arrowRight} alt="" className="size-8" />
        </button>
        {!showThumbs && (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para imagem ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn("size-3 rounded-full transition-colors", i === index ? "bg-primary" : "bg-light-gray-2")}
              />
            ))}
          </div>
        )}
      </div>
      {showThumbs && (
        <div className="mt-5 flex gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              aria-label={`Ver imagem ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn("h-[95px] w-[117px] shrink-0 overflow-hidden border-2 bg-promo", i === index ? "border-primary" : "border-transparent")}
              style={{ borderRadius: radius }}
            >
              <img src={img.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

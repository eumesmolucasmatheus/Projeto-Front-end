import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductOptionsProps = {
  options: string[];
  shape: "square" | "circle";
  type: "text" | "color";
  radius?: string;
  label?: string;
};

export function ProductOptions({ options, shape, type, radius = "4px", label }: ProductOptionsProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="mt-5">
      {label && <p className="mb-2 text-sm font-bold text-light-gray">{label}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            aria-label={opt}
            aria-pressed={selected === opt}
            onClick={() => setSelected(opt)}
            className={cn(
              "flex items-center justify-center bg-surface transition-colors",
              shape === "square" ? "h-[46px] min-w-[46px] px-2" : "size-[31px] rounded-full",
              type === "text" && "text-2xl text-dark-gray-2",
              selected === opt ? "border-2 border-primary" : "border border-light-gray-2",
            )}
            style={{
              borderRadius: shape === "square" ? radius : undefined,
              backgroundColor: type === "color" ? opt : undefined,
            }}
          >
            {type === "text" && opt}
          </button>
        ))}
      </div>
    </div>
  );
}

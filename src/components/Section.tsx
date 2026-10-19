import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  titleAlign?: "left" | "center";
  link?: { text: string; href: string };
  children: ReactNode;
  className?: string;
};

export function Section({ title, titleAlign = "left", link, children, className }: SectionProps) {
  return (
    <section className={cn("py-10", className)}>
      <div className={cn("mb-6 flex items-center gap-4", titleAlign === "center" ? "justify-center" : "justify-between")}>
        <h2 className="text-2xl font-bold text-dark-gray-2">{title}</h2>
        {link && titleAlign === "left" && (
          <a href={link.href} className="flex items-center gap-2 text-lg text-primary hover:underline">
            {link.text} <ArrowRight className="size-5" />
          </a>
        )}
      </div>
      {children}
    </section>
  );
}

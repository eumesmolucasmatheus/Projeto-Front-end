import { Link } from "@tanstack/react-router";
import logoHeader from "@/assets/logo-header.svg";
import logoFooter from "@/assets/logo-footer.svg";

type LogoProps = { variant?: "header" | "footer" };

export function Logo({ variant = "header" }: LogoProps) {
  return (
    <Link to="/" aria-label="Digital Store - página inicial" className="shrink-0">
      <img
        src={variant === "footer" ? logoFooter : logoHeader}
        alt="Digital Store"
        width={253}
        height={44}
        className="h-[34px] w-auto lg:h-[44px]"
      />
    </Link>
  );
}

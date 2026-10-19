import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Logo } from "./Logo";
import miniCart from "@/assets/mini-cart.svg";

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/products", label: "Produtos", exact: false },
  { to: "/categorias", label: "Categorias", exact: false },
  { to: "/pedidos", label: "Meus Pedidos", exact: false },
] as const;

export function Header() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/products", search: term.trim() ? { filter: term.trim() } : {} });
  };

  return (
    <header className="bg-surface">
      <div className="container-store flex flex-wrap items-center gap-x-10 gap-y-4 pt-6 lg:flex-nowrap lg:pt-8">
        <Logo />
        <form onSubmit={submit} role="search" className="order-last flex h-[60px] w-full items-center rounded-lg bg-light-gray-3 px-4 lg:order-none lg:flex-1">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
            className="flex-1 bg-transparent text-base text-dark-gray-2 outline-none placeholder:text-light-gray"
          />
          <button type="submit" aria-label="Buscar" className="text-light-gray transition-colors hover:text-primary">
            <Search className="size-6" />
          </button>
        </form>
        <div className="ml-auto flex items-center gap-6 lg:ml-0">
          <a href="#cadastro" className="hidden text-base text-dark-gray-2 underline sm:inline">
            Cadastre-se
          </a>
          <a
            href="#entrar"
            className="flex h-10 w-[114px] items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground transition-colors hover:bg-tertiary"
          >
            Entrar
          </a>
          <img src={miniCart} alt="Carrinho" className="size-6" />
        </div>
      </div>
      <nav className="container-store">
        <ul className="flex gap-8 overflow-x-auto py-6 lg:py-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="whitespace-nowrap border-b-2 border-transparent pb-1 text-base text-dark-gray-2 transition-colors hover:text-primary"
                activeProps={{ className: "!border-primary font-bold !text-primary" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

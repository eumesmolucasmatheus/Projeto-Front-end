import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Store — Tênis e moda com os melhores preços" },
      { name: "description", content: "Coleções em destaque e produtos em alta na Digital Store." },
      { property: "og:title", content: "Digital Store — Tênis e moda" },
      { property: "og:description", content: "Coleções em destaque e produtos em alta na Digital Store." },
    ],
  }),
  component: HomePage,
});

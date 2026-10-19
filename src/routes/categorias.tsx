import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/categorias")({
  head: () => ({
    meta: [
      { title: "Categorias | Digital Store" },
      { name: "description", content: "Navegue pelas categorias da Digital Store." },
      { property: "og:title", content: "Categorias | Digital Store" },
      { property: "og:description", content: "Navegue pelas categorias da Digital Store." },
    ],
  }),
  component: () => <SimplePage title="Categorias" text="Em breve: navegue por Tênis, Casual, Corrida e mais." />,
});

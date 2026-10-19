import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/pedidos")({
  head: () => ({
    meta: [
      { title: "Meus Pedidos | Digital Store" },
      { name: "description", content: "Acompanhe seus pedidos na Digital Store." },
      { property: "og:title", content: "Meus Pedidos | Digital Store" },
      { property: "og:description", content: "Acompanhe seus pedidos na Digital Store." },
    ],
  }),
  component: () => <SimplePage title="Meus Pedidos" text="Você ainda não fez nenhum pedido." />,
});

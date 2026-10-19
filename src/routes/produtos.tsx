import { createFileRoute, redirect } from "@tanstack/react-router";

// Alias em português exigido pela documentação: /produtos -> /products
export const Route = createFileRoute("/produtos")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
});

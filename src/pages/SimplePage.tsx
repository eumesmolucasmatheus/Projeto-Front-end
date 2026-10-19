import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";

export function SimplePage({ title, text }: { title: string; text: string }) {
  return (
    <Layout>
      <div className="container-store py-24 text-center">
        <h1 className="text-3xl font-bold text-dark-gray">{title}</h1>
        <p className="mt-3 text-dark-gray-3">{text}</p>
        <Link to="/products" className="mt-8 inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-tertiary">
          Ver produtos
        </Link>
      </div>
    </Layout>
  );
}

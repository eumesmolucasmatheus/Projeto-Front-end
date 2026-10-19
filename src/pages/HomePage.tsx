import { Layout } from "./Layout";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";
import { ProductListing } from "@/components/ProductListing";
import { products } from "@/data/products";

const slides = Array.from({ length: 8 }, (_, i) => ({ src: `/images/home-slide-${i + 1}.jpeg` }));
const collections = [1, 2, 3].map((n) => ({ src: `/images/collection-${n}.png`, alt: `Coleção ${n}` }));

export function HomePage() {
  return (
    <Layout>
      <Gallery images={slides} width="1440" height="681" className="mx-auto" />
      <div className="container-store">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="grid gap-5 md:grid-cols-3">
            {collections.map((c) => (
              <img key={c.src} src={c.src} alt={c.alt} className="w-full rounded-md transition-transform hover:-translate-y-1" />
            ))}
          </div>
        </Section>
        <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
}

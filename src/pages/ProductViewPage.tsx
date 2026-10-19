import { Layout } from "./Layout";
import { Gallery } from "@/components/Gallery";
import { BuyBox } from "@/components/BuyBox";
import { ProductOptions } from "@/components/ProductOptions";
import { Section } from "@/components/Section";
import { ProductListing } from "@/components/ProductListing";
import { products, type Product } from "@/data/products";

const productImages = [1, 2, 3, 4, 5].map((n) => ({ src: `/images/produc-image-${n}.jpeg` }));

export function ProductViewPage({ product }: { product: Product }) {
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  return (
    <Layout>
      <div className="container-store">
        <p className="pt-2 text-sm text-dark-gray-2">
          <strong>Home</strong> / Produtos / {product.category} / {product.brand} / <span className="text-dark-gray-3">{product.name}</span>
        </p>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row">
          <Gallery images={productImages} showThumbs width="700" height="570" radius="4px" />
          <BuyBox
            name={product.name}
            reference={`${product.category} | ${product.brand} | REF:38416${product.id}`}
            stars={4.7}
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          >
            <ProductOptions label="Tamanho" options={["39", "40", "41", "42", "43"]} shape="square" type="text" radius="4px" />
            <ProductOptions label="Cor" options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]} shape="circle" type="color" />
          </BuyBox>
        </div>
        <Section title="Produtos relacionados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }} className="mt-10">
          <ProductListing products={related} />
        </Section>
      </div>
    </Layout>
  );
}

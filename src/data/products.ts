export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  gender: "Masculino" | "Feminino" | "Unisex";
  state: "Novo" | "Usado";
  image: string;
  price: number;
  priceDiscount?: number;
};

const thumb = (n: number) => `/images/product-thumb-${n}.jpeg`;

export const products: Product[] = [
  { id: "1", name: "K-Swiss V8 - Masculino", category: "Tênis", brand: "K-Swiss", gender: "Masculino", state: "Novo", image: thumb(1), price: 200, priceDiscount: 100 },
  { id: "2", name: "Nike Air Max Excee", category: "Tênis", brand: "Nike", gender: "Masculino", state: "Novo", image: thumb(2), price: 499.9, priceDiscount: 379.9 },
  { id: "3", name: "Adidas Ultraboost Light", category: "Esporte e lazer", brand: "Adidas", gender: "Feminino", state: "Novo", image: thumb(3), price: 899.9 },
  { id: "4", name: "Calvin Klein Casual Runner", category: "Casual", brand: "Calvin Klein", gender: "Unisex", state: "Novo", image: thumb(4), price: 349.9, priceDiscount: 279.9 },
  { id: "5", name: "Puma Smash Leather", category: "Casual", brand: "Puma", gender: "Unisex", state: "Usado", image: thumb(5), price: 159.9 },
  { id: "6", name: "K-Swiss Court Classic", category: "Tênis", brand: "K-Swiss", gender: "Feminino", state: "Novo", image: thumb(1), price: 249.9, priceDiscount: 199.9 },
  { id: "7", name: "Nike Revolution 7", category: "Corrida", brand: "Nike", gender: "Feminino", state: "Novo", image: thumb(2), price: 399.9 },
  { id: "8", name: "Adidas Runfalcon 3.0", category: "Corrida", brand: "Adidas", gender: "Masculino", state: "Usado", image: thumb(3), price: 299.9, priceDiscount: 219.9 },
  { id: "9", name: "Calvin Klein Slip-On", category: "Utilitário", brand: "Calvin Klein", gender: "Feminino", state: "Novo", image: thumb(4), price: 279.9 },
  { id: "10", name: "Puma RS-X Efekt", category: "Esporte e lazer", brand: "Puma", gender: "Masculino", state: "Novo", image: thumb(5), price: 699.9, priceDiscount: 549.9 },
  { id: "11", name: "Nike Court Vision Low", category: "Casual", brand: "Nike", gender: "Unisex", state: "Novo", image: thumb(2), price: 549.9 },
  { id: "12", name: "Adidas Grand Court 2.0", category: "Tênis", brand: "Adidas", gender: "Unisex", state: "Usado", image: thumb(3), price: 189.9, priceDiscount: 149.9 },
];

export const finalPrice = (p: Product) => p.priceDiscount ?? p.price;

export type SortOrder = "menor" | "maior";

export type ProductFilters = {
  search?: string | undefined;
  brands?: string[];
  categories?: string[];
  genders?: string[];
  state?: string;
};

export function filterProducts(list: Product[], f: ProductFilters): Product[] {
  const q = f.search?.trim().toLowerCase();
  return list.filter(
    (p) =>
      (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) &&
      (!f.brands?.length || f.brands.includes(p.brand)) &&
      (!f.categories?.length || f.categories.includes(p.category)) &&
      (!f.genders?.length || f.genders.includes(p.gender)) &&
      (!f.state || p.state === f.state),
  );
}

export function sortProducts(list: Product[], order: SortOrder): Product[] {
  return [...list].sort((a, b) =>
    order === "menor" ? finalPrice(a) - finalPrice(b) : finalPrice(b) - finalPrice(a),
  );
}

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

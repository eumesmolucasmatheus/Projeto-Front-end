import { describe, expect, it } from "vitest";
import { filterProducts, products, sortProducts, finalPrice } from "./products";

describe("listagem de produtos", () => {
  it("Menor preço ordena do mais barato ao mais caro", () => {
    const prices = sortProducts(products, "menor").map(finalPrice);
    expect(prices[0]).toBe(100);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  it("Maior preço ordena do mais caro ao mais barato", () => {
    expect(finalPrice(sortProducts(products, "maior")[0]!)).toBe(899.9);
  });

  it("busca por texto filtra pelo nome", () => {
    const r = filterProducts(products, { search: "k-swiss" });
    expect(r.map((p) => p.id)).toEqual(["1", "6"]);
  });

  it("filtro de marca restringe os resultados", () => {
    expect(filterProducts(products, { brands: ["Puma"] })).toHaveLength(2);
  });
});

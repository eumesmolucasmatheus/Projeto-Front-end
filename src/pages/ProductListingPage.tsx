import { useMemo, useState } from "react";
import { Layout } from "./Layout";
import { Section } from "@/components/Section";
import { ProductListing } from "@/components/ProductListing";
import { FilterGroup } from "@/components/FilterGroup";
import { filterProducts, products, sortProducts, type SortOrder } from "@/data/products";

const unique = (key: "brand" | "category" | "gender") =>
  [...new Set(products.map((p) => p[key]))].map((text) => ({ text }));

const toggle = (list: string[], value: string, checked: boolean) =>
  checked ? [...list, value] : list.filter((v) => v !== value);

export function ProductListingPage({ search }: { search?: string | undefined }) {
  const [order, setOrder] = useState<SortOrder>("menor");
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [genders, setGenders] = useState<string[]>([]);
  const [state, setState] = useState<string>("");

  const result = useMemo(
    () => sortProducts(filterProducts(products, { search, brands, categories, genders, state }), order),
    [search, brands, categories, genders, state, order],
  );

  return (
    <Layout>
      <div className="container-store pb-10">
        {search && (
          <p className="pt-4 text-base text-dark-gray-2">
            Resultados para <strong>“{search}”</strong>
          </p>
        )}
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 pt-10 lg:w-[308px]">
            <label className="mb-6 flex h-[60px] items-center gap-2 rounded-md border border-dark-gray-2 px-4 text-base text-dark-gray-2">
              <strong className="whitespace-nowrap">Ordenar por:</strong>
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value as SortOrder)}
                className="flex-1 bg-transparent text-dark-gray-2 outline-none"
              >
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </label>
            <div className="rounded-md bg-surface p-6">
              <h2 className="text-base font-bold text-dark-gray-2">Filtrar por</h2>
              <hr className="mb-5 mt-4 border-light-gray-2" />
              <FilterGroup title="Marca" inputType="checkbox" options={unique("brand")} selected={brands} onChange={(v, c) => setBrands((l) => toggle(l, v, c))} />
              <FilterGroup title="Categoria" inputType="checkbox" options={unique("category")} selected={categories} onChange={(v, c) => setCategories((l) => toggle(l, v, c))} />
              <FilterGroup title="Gênero" inputType="checkbox" options={unique("gender")} selected={genders} onChange={(v, c) => setGenders((l) => toggle(l, v, c))} />
              <FilterGroup title="Estado" inputType="radio" options={[{ text: "Novo" }, { text: "Usado" }]} selected={[state]} onChange={(v) => setState(v)} />
              {(brands.length || categories.length || genders.length || state) ? (
                <button
                  type="button"
                  onClick={() => { setBrands([]); setCategories([]); setGenders([]); setState(""); }}
                  className="text-sm font-bold text-primary hover:underline"
                >
                  Limpar filtros
                </button>
              ) : null}
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <Section title={`${result.length} ${result.length === 1 ? "produto encontrado" : "produtos encontrados"}`} titleAlign="left">
              <ProductListing products={result} columns={3} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

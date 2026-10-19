# Digital Store (Drip Store)

Loja virtual construída como projeto final de Front-end da Digital College, seguindo a [documentação oficial do projeto](https://github.com/digitalcollegebr/projeto-digital-store) e o layout do Figma [DRIP STORE - DIGITAL COLLEGE](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f).

**Aluno:** Lucas Matheus Dantas Ribeiro
**Stack:** React 19 + TypeScript + Tailwind CSS v4 + Vitest

---

## Requisitos mínimos atendidos

| Requisito | Status | Onde ver |
| --- | --- | --- |
| React com TypeScript | OK | todo o `src/` em `.tsx` / `.ts` |
| Página Inicial (Home) | OK | `src/pages/HomePage.tsx` → rota `/` |
| Página Listagem de Produtos | OK | `src/pages/ProductListingPage.tsx` → rota `/products` |
| Página Visualização do Produto | OK | `src/pages/ProductViewPage.tsx` → rota `/product/$id` |
| Biblioteca de estilo | OK | Tailwind CSS v4 (tokens de cor do Figma em `src/styles.css`) |
| Botões Ordenar / Filtrar funcionais | OK (acima do mínimo visual) | `src/pages/ProductListingPage.tsx` + `src/data/products.ts` |
| Deploy | Vercel / Netlify (instruções abaixo) | — |

## Como rodar

```bash
npm install      # ou: bun install
npm run dev      # abre em http://localhost:8080
```

> O arquivo `.npmrc` já traz `legacy-peer-deps=true`, necessário para o `npm install`
> fechar sem erros de peer dependencies do vitest.

Outros comandos:

```bash
npm run test     # testes de filtro, ordenação e formatação de preço
npm run build    # build de produção
npm run preview  # serve o build
npm run lint     # ESLint
```

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Inicial: carrossel, coleções em destaque, produtos em alta |
| `/products` | Listagem com ordenação, filtros e busca (`/products?filter=nike`) |
| `/produtos` | Redireciona para `/products` (endereço em português) |
| `/product/$id` | Visualização do produto |
| `/categorias` | Páginas simples de apoio |
| `/pedidos` | Páginas simples de apoio |

## Estrutura de pastas

```
src/
├── components/   Header, Footer, Logo, Information, Section, ProductCard,
│                 ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox
├── pages/        Layout, HomePage, ProductListingPage, ProductViewPage, SimplePage
├── data/         products.ts — dados mock, busca, filtro, ordenação, formatPrice
├── routes/       arquivos de rota (só importam e renderizam as páginas)
├── assets/       ícones SVG do repositório
└── styles.css    design system (cores do Figma em oklch)

public/images/    fotos e miniaturas dos produtos
```

## Funcionalidades

- **Busca** no cabeçalho leva para `/products?filter=termo` (Enter ou botão de lupa).
- **Ordenar por**: menor preço / maior preço.
- **Filtrar por**: marca, categoria, gênero e estado — combináveis, com total de itens atualizado.
- **Galeria** do produto com setas (desabilitadas nas pontas), deslize e miniaturas selecionáveis.
- **BuyBox** com avaliação em estrelas, preço com desconto, escolha de tamanho e cor.
- **Produtos relacionados** na página do produto.
- **Navegação** com destaque da página atual e rodapé com redes sociais.

## Observações para a correção

1. **Rotas:** a documentação sugere `react-router-dom`, mas o projeto foi construído sobre **TanStack Router** (`@tanstack/react-router`), que cumpre o mesmo papel: rotas por arquivo em `src/routes`, `Link` para navegação e destaque do link ativo (equivalente ao `NavLink`). A pasta `pages` guarda as composições e `components` guarda as peças reutilizáveis, como pedido.
2. **Figma:** o link do Figma não pôde ser aberto automaticamente; o visual foi reconstruído a partir das imagens e das cores da documentação oficial (primary `#C92071`, secondary `#B5B6F2`, tertiary `#991956`, dark-gray `#1F1F1F`).
3. **Dados:** nomes, preços e fotos dos produtos vêm de `src/data/products.ts` (mock local). Não há consumo de API externa — a camada de dados está isolada justamente para facilitar a troca por uma API real.
4. **Testes:** `src/data/products.test.ts` cobre filtro, ordenação e formatação de preço.



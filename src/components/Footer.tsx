import { Logo } from "./Logo";
import { Information } from "./Information";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";

const socials = [
  { href: "https://facebook.com", icon: facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: twitter, label: "Twitter" },
];

const infoColumns = [
  {
    title: "Informação",
    informations: [
      { text: "Sobre Drip Store", link: "/about" },
      { text: "Segurança", link: "/seguranca" },
      { text: "Wishlist", link: "/wishlist" },
      { text: "Blog", link: "/blog" },
      { text: "Trabalhe conosco", link: "/vagas" },
      { text: "Meus Pedidos", link: "/pedidos" },
    ],
  },
  {
    title: "Categorias",
    informations: [
      { text: "Camisetas", link: "/products?filter=camisetas" },
      { text: "Calças", link: "/products?filter=calcas" },
      { text: "Bonés", link: "/products?filter=bones" },
      { text: "Headphones", link: "/products?filter=headphones" },
      { text: "Tênis", link: "/products?filter=tenis" },
    ],
  },
  {
    title: "Contato",
    informations: [
      { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "#" },
      { text: "(85) 3051-3411", link: "tel:+558530513411" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark-gray text-surface">
      <div className="container-store grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="footer" />
          <p className="mt-8 max-w-[300px] text-sm leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-8 flex gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <img src={s.icon} alt="" className="h-6 w-auto transition-opacity hover:opacity-70" />
              </a>
            ))}
          </div>
        </div>
        {infoColumns.map((col) => (
          <Information key={col.title} title={col.title} informations={col.informations} />
        ))}
      </div>
      <div className="container-store">
        <hr className="border-dark-gray-2" />
        <p className="py-6 text-center text-xs opacity-80">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0" aria-label="JR Escavações — Início">
          <span
            className="relative grid h-10 w-10 place-items-center rounded-lg overflow-hidden"
            style={{ background: "var(--gradient-cta)" }}
          >
            <span className="font-display text-base font-black text-white tracking-tight">JR</span>
            <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            JR <span className="text-primary">Escavações</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-neon btn-neon-hover"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-3 rounded-2xl glass p-4 animate-fade-up">
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm btn-neon"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

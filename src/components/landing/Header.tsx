import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logoJrCompleto from "@/assets/logo-jr-completo.png";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#localizacao", label: "Localização" },
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
        scrolled ? "glass-header py-2" : "py-3 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(24,35,51,0.92),rgba(17,25,35,0.86))] px-3 py-2.5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 justify-self-start min-w-0"
            aria-label="JR Escavações e Terraplanagem — Início"
          >
            <img
              src={logoJrCompleto}
              alt="JR Escavações e Terraplanagem"
              className="h-10 w-auto shrink-0 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:h-11"
            />
            <span className="hidden min-w-0 truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 sm:block lg:hidden">
              JR Escavações
            </span>
            <span className="hidden xl:block text-xs font-bold uppercase tracking-[0.14em] text-white/80">
              JR Escavações
            </span>
          </a>

          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7" aria-label="Menu principal">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-self-end gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-neon btn-neon-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-2xl border border-primary/20 bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_-16px_rgba(245,179,1,0.55)] transition hover:border-primary/40 hover:bg-white/[0.08] justify-self-end"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-3 mt-3 sm:mx-6">
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,35,51,0.96),rgba(17,25,35,0.94))] p-4 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.95)] backdrop-blur-2xl animate-fade-up">
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/15 bg-white/[0.03] p-2">
                <img
                  src={logoJrCompleto}
                  alt="JR Escavações e Terraplanagem"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-bold leading-none text-white">JR Escavações</p>
                <p className="mt-1 text-xs text-muted-foreground">Mini escavações e terraplanagem</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-1 gap-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm btn-neon btn-neon-hover"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

import { Phone, MapPin, Wrench, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";

const quickLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Orçamento" },
];

const cities = ["Capela do Alto", "Sorocaba", "Tatuí", "Iperó", "Araçoiaba da Serra"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] surface pt-16 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-10 w-10 place-items-center rounded-lg"
              style={{ background: "var(--gradient-cta)" }}
            >
              <span className="font-display text-base font-black text-white">JR</span>
            </span>
            <span className="font-display text-lg font-bold">
              JR <span className="text-primary">Escavações</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Mini escavadeira, escavações e terraplanagem com rapidez, precisão e qualidade.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm btn-neon btn-neon-hover"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" /> Serviços
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>Escavações e terraplanagem</li>
            <li>Abertura de valas e drenagem</li>
            <li>Limpeza e nivelamento de terrenos</li>
            <li>Preparação para fundações e piscinas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Links rápidos</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="font-display font-bold mt-6 mb-3">Atendimento</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contato</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+5515997675629" className="hover:text-primary transition">
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary shrink-0" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Capela do Alto — SP e região</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span className="text-muted-foreground">Atendimento comercial</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} JR Escavações. Todos os direitos reservados.</p>
        <p>Responsável: Renê</p>
      </div>
    </footer>
  );
}

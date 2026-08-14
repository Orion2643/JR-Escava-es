import { Phone, MapPin, Wrench, Mail, Star } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import { SITE } from "@/lib/site";
import logoJrCompleto from "@/assets/logo-jr-completo.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const quickLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Orçamento" },
];

const cities = ["Capela do Alto", "Sorocaba", "Tatuí", "Iperó", "Araçoiaba da Serra"];

export function Footer() {
  return (
    <footer className="mobile-footer relative border-t border-white/[0.06] surface pt-16 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.24), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <a href="#inicio" aria-label="Voltar ao início">
            <img
              src={logoJrCompleto}
              alt="JR Escavações e Terraplanagem"
              className="h-28 w-auto max-w-full object-contain object-left"
            />
          </a>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Mini escavadeira, escavações e terraplanagem com rapidez, precisão e qualidade.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm btn-neon btn-neon-hover"
          >
            <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
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
              <WhatsAppIcon className="h-4 w-4 text-primary shrink-0" />
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
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                {SITE.address.street}, {SITE.address.number} — {SITE.address.district}
                <br />
                {SITE.address.city} — {SITE.address.state}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Star className="h-4 w-4 text-primary shrink-0" />
              <a
                href={SITE.mapsReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                Avaliar no Google
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span className="text-muted-foreground">Atendimento comercial</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} JR Escavações e Terraplanagem. Todos os direitos reservados.
        </p>
        <p>
          Site desenvolvido por{" "}
          <a
            href="https://www.orion-sistemas.info"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:text-white transition-colors"
          >
            Orion Soluções em Tecnologia
          </a>
        </p>
      </div>
    </footer>
  );
}

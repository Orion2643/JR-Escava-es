import { motion } from "framer-motion";
import {
  Shovel,
  Trees,
  Hammer,
  Layers,
  Sprout,
  Waves,
  Mountain,
  Ruler,
  Building2,
  PipetteIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    icon: Shovel,
    title: "Abertura de valas",
    desc: "Valas precisas para água, esgoto, elétrica e telecom.",
  },
  {
    icon: Trees,
    title: "Limpeza de terrenos",
    desc: "Remoção de vegetação, entulhos e preparação da área.",
  },
  {
    icon: Hammer,
    title: "Demolição leve",
    desc: "Demolição de muros, pisos e pequenas estruturas.",
  },
  {
    icon: Layers,
    title: "Preparação de terrenos",
    desc: "Regularização do solo para construção e projetos.",
  },
  {
    icon: Sprout,
    title: "Paisagismo e drenagem",
    desc: "Modelagem do terreno e solução para escoamento.",
  },
  {
    icon: Waves,
    title: "Escavação para piscinas",
    desc: "Buracos no formato ideal, sem danos ao entorno.",
  },
  { icon: Mountain, title: "Terraplanagem", desc: "Cortes, aterros e nivelamento para obras." },
  {
    icon: Ruler,
    title: "Nivelamento de terrenos",
    desc: "Superfície pronta para pisos, calçamento e construção.",
  },
  {
    icon: Building2,
    title: "Preparação para fundações",
    desc: "Escavação e regularização para bases estáveis.",
  },
  {
    icon: PipetteIcon,
    title: "Drenagem e tubulações",
    desc: "Instalação de tubos, caixas e sistemas de drenagem.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mobile-section relative py-24 sm:py-32 surface">
      <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
            O que fazemos
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
            Serviços com Mini Escavadeira
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Soluções completas para obras residenciais, comerciais e rurais em toda a região.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6 }}
                className="mobile-card group relative rounded-2xl p-6 border border-white/[0.06] surface-2 hover:border-primary/50 transition-all duration-300"
                style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(251,191,36,0.22), 0 22px 44px -24px rgba(245,179,1,0.24)",
                  }}
                />
                <div
                  className="grid h-14 w-14 place-items-center rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "var(--gradient-gold-glow)",
                    border: "1px solid rgba(251,191,36,0.20)",
                  }}
                >
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

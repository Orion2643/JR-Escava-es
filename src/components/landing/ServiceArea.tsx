import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Capela do Alto", tag: "Sede", main: true },
  { name: "Sorocaba", tag: "Região" },
  { name: "Tatuí", tag: "Região" },
  { name: "Iperó", tag: "Região" },
  { name: "Araçoiaba da Serra", tag: "Região" },
  { name: "Cidades próximas", tag: "Consulte" },
];

const pins = [
  { top: "48%", left: "42%", label: "Capela do Alto", main: true },
  { top: "26%", left: "60%", label: "Sorocaba" },
  { top: "70%", left: "26%", label: "Tatuí" },
  { top: "38%", left: "28%", label: "Iperó" },
  { top: "56%", left: "64%", label: "Araçoiaba da Serra" },
];

export function ServiceArea() {
  return (
    <section id="atendimento" className="mobile-section relative py-24 sm:py-32 surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
            Área de atendimento
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
            Atendemos Capela do Alto e região
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Levamos soluções com mini escavadeira para obras residenciais, rurais, comerciais e
            preparação de terrenos em toda a região.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cities.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-xl border px-4 py-3.5 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 ${
                  c.main
                    ? "border-gold/30 bg-gold/[0.035]"
                    : "border-white/10 surface-2 hover:border-primary/40"
                }`}
              >
                <MapPin className={`h-5 w-5 shrink-0 ${c.main ? "text-gold" : "text-primary"}`} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{c.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.tag}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="service-map relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden neon-border"
        >
          <div className="absolute inset-0 blueprint opacity-70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgba(245,179,1,0.12), transparent 65%)",
            }}
          />
          <div className="absolute inset-0">
            {pins.map((p) => (
              <div key={p.label} className="absolute" style={{ top: p.top, left: p.left }}>
                <div className="relative">
                  <span className="absolute inset-0 -m-3 rounded-full animate-pulse-neon" />
                  <span
                    className={`relative block rounded-full ${p.main ? "h-4 w-4" : "h-3 w-3"}`}
                    style={{
                      background: p.main ? "#F5B301" : "#F5B301",
                      boxShadow: `0 0 0 6px ${p.main ? "rgba(245,179,1,0.10)" : "rgba(251,191,36,0.10)"}, 0 0 10px rgba(245,179,1,0.40)`,
                    }}
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-5 py-3.5 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Base</p>
              <p className="font-display font-bold">Capela do Alto — SP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

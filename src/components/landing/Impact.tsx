import { motion } from "framer-motion";
import { Zap, Target, Award, Handshake } from "lucide-react";

const stats = [
  { icon: Zap, label: "Agilidade", desc: "Mobilização rápida e execução no ritmo da sua obra." },
  { icon: Target, label: "Precisão", desc: "Cortes e nivelamentos dentro do projeto." },
  { icon: Award, label: "Qualidade", desc: "Padrão técnico e acabamento profissional." },
  { icon: Handshake, label: "Compromisso", desc: "Prazos cumpridos e atendimento direto." },
];

export function Impact() {
  return (
    <section className="mobile-section relative py-16 sm:py-24 surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="impact-panel relative overflow-hidden rounded-3xl border border-primary/20 shadow-[0_0_14px_rgba(245,179,1,0.06)] sm:neon-border">
          <div className="absolute inset-0 grid-lines opacity-24" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(11,18,32,0.9), rgba(17,24,39,0.9)), radial-gradient(ellipse at 30% 30%, rgba(245,179,1,0.11), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 p-6 sm:gap-8 sm:p-14">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className="text-center"
                >
                  <div
                    className="mx-auto grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl mb-4 sm:mb-5"
                    style={{
                      background: "var(--gradient-cta)",
                      boxShadow: "0 10px 28px -14px rgba(245,179,1,0.36)",
                    }}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <p className="font-display text-xl leading-tight sm:text-3xl font-extrabold text-gradient break-words">
                    {s.label}
                  </p>
                  <p className="mt-2 text-[0.78rem] sm:text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative py-20 sm:py-24 surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl neon-border">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(11,18,32,0.9), rgba(17,24,39,0.9)), radial-gradient(ellipse at 30% 30%, rgba(37,99,235,0.25), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-10 sm:p-14">
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
                    className="mx-auto grid h-16 w-16 place-items-center rounded-2xl mb-5"
                    style={{
                      background: "var(--gradient-cta)",
                      boxShadow: "0 12px 40px -10px rgba(37,99,235,0.7)",
                    }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">{s.label}</p>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Cog, Crosshair, Clock, Wallet, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  { icon: Cog, title: "Equipamentos modernos", desc: "Máquinas revisadas, com desempenho e segurança de alto padrão." },
  { icon: Crosshair, title: "Execução precisa", desc: "Cortes limpos, nivelamento correto e acabamento profissional." },
  { icon: Clock, title: "Atendimento rápido", desc: "Retorno ágil e mobilização eficiente para começar sem espera." },
  { icon: Wallet, title: "Excelente custo-benefício", desc: "Preço justo, produtividade alta e economia real na obra." },
  { icon: ShieldCheck, title: "Compromisso com qualidade", desc: "Padrão técnico rigoroso do primeiro contato à entrega final." },
  { icon: HeartHandshake, title: "Atendimento personalizado", desc: "Cada obra recebe atenção direta do responsável, o Renê." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">Diferenciais</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
            Por que escolher a JR Escavações?
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative rounded-2xl p-7 surface-2 border border-white/[0.06] hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="grid h-14 w-14 place-items-center rounded-xl mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,179,1,0.18), rgba(245,179,1,0.04))",
                    border: "1px solid rgba(245,179,1,0.35)",
                  }}
                >
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

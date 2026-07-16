import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import impactImg from "@/assets/impact-machine.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

const points = [
  "Acesso em espaços restritos com mínimo impacto no terreno",
  "Produtividade alta com custo operacional reduzido",
  "Execução técnica: cortes precisos e nivelamento correto",
  "Prazo respeitado do primeiro contato à entrega final",
];

export function Solution() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
            Solução completa
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
            A solução ideal para sua obra.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Da abertura de valas à preparação de fundações, a mini escavadeira entrega o que uma
            retroescavadeira não faz: precisão em espaço reduzido, agilidade e um acabamento que
            valoriza o seu projeto.
          </p>

          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/85 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-base btn-neon btn-neon-hover"
          >
            <MessageCircle className="h-5 w-5" />
            Entre em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div
            className="absolute -inset-6 rounded-[2rem] opacity-30 blur-3xl"
            style={{ background: "var(--gradient-cta)" }}
          />
          <div className="relative overflow-hidden rounded-3xl neon-border">
            <img
              src={impactImg}
              alt="Mini escavadeira em operação — solução ideal para obras residenciais e rurais"
              width={1408}
              height={1200}
              loading="lazy"
              decoding="async"
              className="site-machine-image w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/45 via-transparent to-background/15" />
            <div
              className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
              style={{ background: "linear-gradient(90deg, rgba(245,179,1,0.14), transparent)" }}
            />
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-primary/70" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-primary/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

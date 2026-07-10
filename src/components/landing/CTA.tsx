import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/contact";

export function CTA() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] neon-border p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.35), transparent 60%), linear-gradient(180deg, #05070B, #0B1220)",
            }}
          />
          <div
            className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.35), transparent 60%)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Orçamento sem compromisso
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
              Precisa de uma mini escavadeira?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fale agora conosco e receba
              seu orçamento no mesmo dia.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl px-10 py-6 text-lg btn-whatsapp btn-whatsapp-hover animate-pulse-neon"
            >
              <MessageCircle className="h-6 w-6" />
              Solicitar orçamento pelo WhatsApp
            </a>

            <p className="mt-6 text-sm text-muted-foreground">
              {WHATSAPP_NUMBER} • Atendimento rápido
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

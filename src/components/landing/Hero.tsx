import { motion } from "framer-motion";
import heroImg from "@/assets/hero-excavator.jpg";
import logoJrCompleto from "@/assets/logo-jr-completo.png";
import { MessageCircle, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Backgrounds */}
      <div className="absolute inset-0 blueprint opacity-[0.22] pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,179,1,0.16), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.10), transparent 60%)" }}
      />

      {/* Partículas douradas sutis */}
      <span className="gold-particle left-[8%] top-[28%] h-1.5 w-1.5" />
      <span className="gold-particle left-[42%] top-[18%] h-1 w-1 [animation-delay:1.4s]" />
      <span className="gold-particle left-[54%] top-[66%] h-1.5 w-1.5 [animation-delay:2.8s]" />
      <span className="gold-particle right-[8%] top-[35%] h-1 w-1 [animation-delay:0.8s]" />
      <span className="gold-particle right-[20%] bottom-[14%] h-1.5 w-1.5 [animation-delay:3.6s]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative -mx-2 sm:-mx-4 lg:-ml-8"
          >
            <div
              className="absolute inset-10 -z-10 rounded-full opacity-10 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)",
              }}
            />
            <img
              src={logoJrCompleto}
              alt="JR Escavações e Terraplanagem"
              width={1200}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[620px] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.55)]"
            />
          </motion.div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase sm:mt-3">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 7px rgba(245,179,1,0.65)" }}
            />
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Capela do Alto e Região
          </div>

          <div className="mt-6 space-y-1.5 text-xl sm:text-2xl font-semibold text-white/90">
            <p>Mini Escavações</p>
            <p>Terraplanagem</p>
            <p>Preparação de Terrenos</p>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Serviços profissionais com mini escavadeira: precisão de engenharia, agilidade de campo
            e o compromisso de uma equipe que entrega no prazo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-base btn-neon btn-neon-hover"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 text-base font-semibold hover:border-primary/40 transition"
            >
              Ver serviços <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Atendimento Regional
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Orçamento sem compromisso
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="relative lg:col-span-6"
        >
          <div
            className="absolute -inset-6 rounded-[2rem] opacity-28 blur-3xl"
            style={{ background: "var(--gradient-cta)" }}
          />
          <div className="relative overflow-hidden rounded-3xl neon-border">
            <motion.img
              src={heroImg}
              alt="Mini escavadeira Caterpillar em operação ao entardecer"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="site-machine-image w-full h-auto object-cover animate-excavator-drift"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/12 to-transparent" />
            <div
              className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
              style={{ background: "linear-gradient(90deg, rgba(245,179,1,0.14), transparent)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
              style={{ background: "linear-gradient(270deg, rgba(251,191,36,0.10), transparent)" }}
            />

            {/* HUD overlay */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between glass rounded-2xl px-5 py-3.5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Operação
                </p>
                <p className="font-display font-bold text-base">Mini Escavadeira</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Status
                </p>
                <p className="font-display font-bold text-primary flex items-center justify-end gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-neon" />
                  Disponível
                </p>
              </div>
            </div>

            {/* corner tech marks */}
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-primary/45" />
            <div className="absolute top-4 right-4 h-8 w-8 border-r-2 border-t-2 border-primary/45" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import logoJrCompleto from "@/assets/logo-jr-completo.png";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="hero-section relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 blueprint opacity-[0.19] pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,179,1,0.15), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.09), transparent 60%)" }}
      />

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
          className="min-w-0 lg:col-span-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative mx-0 sm:-mx-4 lg:-ml-8"
          >
            <div
              className="absolute inset-10 -z-10 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)" }}
            />
            <img
              src={logoJrCompleto}
              alt="JR Escavações e Terraplanagem"
              width={900}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[92vw] sm:max-w-[620px] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          <div className="mt-2 inline-flex max-w-full items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] uppercase sm:mt-3 sm:text-xs">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 7px rgba(245,179,1,0.65)" }}
            />
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">Capela do Alto e Região</span>
          </div>

          <div className="mt-6 space-y-1.5 text-xl font-semibold text-white/95 sm:text-2xl">
            <p>Mini Escavações</p>
            <p>Terraplanagem</p>
            <p>Preparação de Terrenos</p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Serviços profissionais com mini escavadeira: precisão, agilidade de campo e compromisso
            com uma execução bem feita do início ao fim.
          </p>

          <div className="hero-actions mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-base btn-neon btn-neon-hover"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 text-base font-semibold hover:border-primary/40 transition"
            >
              Ver serviços <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> Atendimento Regional
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> Orçamento sem compromisso
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="hero-media relative min-w-0 lg:col-span-6"
        >
          <div
            className="absolute -inset-6 rounded-[2rem] opacity-24 blur-3xl"
            style={{ background: "var(--gradient-cta)" }}
          />
          <div className="relative overflow-hidden rounded-3xl neon-border bg-background/50">
            <video
              src="/hero-jr.webm"
              poster="/hero-jr-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Mini escavadeira da JR Escavações em operação"
              className="site-machine-video aspect-[5/4] w-full object-cover"
            >
              Seu navegador não suporta reprodução de vídeo em HTML5.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/78 via-transparent to-black/5 pointer-events-none" />
            <div
              className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
              style={{ background: "linear-gradient(90deg, rgba(245,179,1,0.11), transparent)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
              style={{ background: "linear-gradient(270deg, rgba(251,191,36,0.08), transparent)" }}
            />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/75 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-2xl sm:px-5 sm:py-3.5">
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
                  Operação
                </p>
                <p className="truncate font-display text-sm font-bold sm:text-base">Mini Escavadeira</p>
              </div>
              <div className="shrink-0 border-l border-white/10 pl-3 text-right sm:pl-5">
                <p className="text-[8px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
                  Atendimento
                </p>
                <p className="flex items-center justify-end gap-1.5 font-display text-sm font-bold text-primary sm:text-base">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-neon" />
                  Regional
                </p>
              </div>
            </div>

            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-primary/45 pointer-events-none" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-primary/35 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

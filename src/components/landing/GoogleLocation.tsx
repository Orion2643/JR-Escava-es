import { motion } from "framer-motion";
import { Navigation, Star } from "lucide-react";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

export function GoogleLocation() {
  return (
    <section id="localizacao" className="mobile-section relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-lines opacity-[0.16] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] neon-border"
        >
          <div className="p-7 text-center sm:p-9">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">Google Maps</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[0.98] text-gradient sm:text-5xl">
              Localização e avaliações
            </h2>
          </div>

          <div className="service-map relative min-h-[320px] border-y border-white/10 bg-surface sm:min-h-[420px] lg:min-h-[520px]">
            <iframe
              src={SITE.mapsEmbed}
              title="Localização da JR Escavações e Terraplanagem no Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/35 to-transparent" />
          </div>

          <div className="p-7 text-center sm:p-9">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Abra a rota da JR Escavações no Google Maps ou deixe sua avaliação diretamente no
              perfil da empresa.
            </p>

            <div className="mt-8 grid gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-2">
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toast.info("Abrindo rota no Google Maps...")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl btn-neon btn-neon-hover px-5 py-3 text-sm"
              >
                <Navigation className="h-4 w-4" /> Como chegar
              </a>
              <a
                href={SITE.mapsReviews}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toast.success("Abrindo a página de avaliações da JR Escavações.")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:border-primary/50 hover:bg-primary/[0.1]"
              >
                <Star className="h-4 w-4 fill-primary text-primary" /> Avaliar no Google
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

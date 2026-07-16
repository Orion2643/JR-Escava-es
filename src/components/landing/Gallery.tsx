import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import obra1 from "@/assets/obras/obra-01-abertura-valas.jpeg";
import obra2 from "@/assets/obras/obra-02-piscina.jpeg";
import obra3 from "@/assets/obras/obra-03-destoca.jpeg";
import obra4 from "@/assets/obras/obra-04-limpeza-terreno.jpeg";
import obra5 from "@/assets/obras/obra-05-escavacao-piscina.jpeg";
import obra6 from "@/assets/obras/obra-06-fundacao.jpeg";
import obra7 from "@/assets/obras/obra-07-terraplanagem.jpeg";
import obra8 from "@/assets/obras/obra-08-nivelamento.jpeg";
import obra9 from "@/assets/obras/obra-09-obra-residencial.jpeg";
import obra10 from "@/assets/obras/obra-10-preparacao-terreno.jpeg";
import obra11 from "@/assets/obras/obra-11-transporte.jpeg";

const images = [
  {
    src: obra1,
    title: "Abertura de valas",
    description: "Execução precisa para drenagem, tubulações e preparação de terreno.",
    alt: "Mini escavadeira realizando abertura de valas em área rural",
  },
  {
    src: obra2,
    title: "Escavação para piscina",
    description: "Preparação completa do terreno para construção de piscinas.",
    alt: "Mini escavadeira trabalhando em escavação para piscina",
  },
  {
    src: obra3,
    title: "Destoca de árvores",
    description: "Remoção de raízes e limpeza pesada com segurança e agilidade.",
    alt: "Mini escavadeira removendo árvore e raízes do solo",
  },
  {
    src: obra4,
    title: "Limpeza de terrenos",
    description: "Serviço ideal para chácaras, sítios, obras e áreas residenciais.",
    alt: "Mini escavadeira realizando limpeza de terreno com raízes expostas",
  },
  {
    src: obra5,
    title: "Preparação para piscina",
    description: "Escavação e adequação do solo para instalação da piscina.",
    alt: "Terreno escavado para piscina próximo a residência rural",
  },
  {
    src: obra6,
    title: "Marcação para fundação",
    description: "Preparação do espaço para bases, fundações e início da obra.",
    alt: "Terreno demarcado para fundação com mini escavadeira ao fundo",
  },
  {
    src: obra7,
    title: "Terraplanagem",
    description: "Movimentação de solo para nivelar e preparar áreas de construção.",
    alt: "Mini escavadeira em serviço de terraplanagem em terreno amplo",
  },
  {
    src: obra8,
    title: "Escavação de tanques",
    description: "Escavação de tanques com precisão e acabamento profissional.",
    alt: "Escavação de tanque realizada com mini escavadeira CAT",
  },
  {
    src: obra9,
    title: "Obras residenciais",
    description: "Serviços em áreas compactas, fundos de terreno e construções urbanas.",
    alt: "Mini escavadeira trabalhando em terreno residencial fechado por muros",
  },
  {
    src: obra10,
    title: "Preparação de terrenos",
    description: "Área limpa e preparada para construção, reforma ou ampliação.",
    alt: "Mini escavadeira preparando solo em terreno residencial",
  },
  {
    src: obra11,
    title: "Transporte do equipamento",
    description: "Atendimento regional com transporte seguro da mini escavadeira.",
    alt: "Mini escavadeira sendo transportada em caminhão prancha",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalHistoryActive = useRef(false);
  const activeIndexRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const active = useMemo(() => (activeIndex === null ? null : images[activeIndex]), [activeIndex]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handlePopState = () => {
      if (modalHistoryActive.current || activeIndexRef.current !== null) {
        modalHistoryActive.current = false;
        setActiveIndex(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openImage = (index: number) => {
    if (!modalHistoryActive.current) {
      window.history.pushState({ jrGalleryModal: true }, "", window.location.href);
      modalHistoryActive.current = true;
    }
    setActiveIndex(index);
  };

  const closeImage = () => {
    if (modalHistoryActive.current) {
      window.history.back();
      return;
    }
    setActiveIndex(null);
  };

  const previousImage = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const nextImage = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    if (delta > 0) previousImage();
    else nextImage();
  };

  return (
    <section id="galeria" className="relative py-18 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
            Obras realizadas
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-extrabold text-gradient leading-[0.95]">
            Veja a JR Escavações em ação
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Serviços reais executados com mini escavadeira em terrenos, chácaras, residências e
            obras da região.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => openImage(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
              aria-label={`Ampliar imagem: ${img.title}`}
              className="gallery-card group relative aspect-[4/3] overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
              <div
                className="absolute inset-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300"
                style={{ boxShadow: "inset 0 0 0 1px rgba(251,191,36,0.12)" }}
              />
              <div className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition">
                <ZoomIn className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-4">
                <h3 className="font-display text-xl sm:text-base font-extrabold text-white drop-shadow">{img.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs sm:text-sm text-white/75 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  {img.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent className="max-w-6xl border-0 bg-transparent p-0 shadow-none">
          {active && (
            <div
              className="relative overflow-hidden rounded-2xl neon-border bg-background"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[78vh] w-full object-contain bg-black"
              />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 touch-manipulation place-items-center rounded-full glass hover:border-primary/60 transition active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 touch-manipulation place-items-center rounded-full glass hover:border-primary/60 transition active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background via-background/85 to-transparent p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Foto {(activeIndex ?? 0) + 1} de {images.length}
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {active.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm sm:text-base text-white/75">
                  {active.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

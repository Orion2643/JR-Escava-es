import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Solution } from "@/components/landing/Solution";
import { Impact } from "@/components/landing/Impact";
import { Gallery } from "@/components/landing/Gallery";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JR Escavações | Mini Escavadeira em Capela do Alto e Região" },
      {
        name: "description",
        content:
          "JR Escavações: mini escavadeira, terraplanagem e preparação de terrenos em Capela do Alto, Sorocaba, Tatuí, Iperó, Araçoiaba da Serra e região. Orçamento sem compromisso.",
      },
      {
        name: "keywords",
        content:
          "mini escavadeira Capela do Alto, escavações Capela do Alto, terraplanagem Sorocaba, abertura de valas, limpeza de terrenos, escavação para piscina, drenagem, fundações, mini escavadeira Sorocaba, Tatuí, Iperó, Araçoiaba da Serra",
      },
      { property: "og:title", content: "JR Escavações | Mini Escavadeira em Capela do Alto e Região" },
      {
        property: "og:description",
        content:
          "Mini escavadeira, terraplanagem e preparação de terrenos. Precisão, agilidade e qualidade em toda a região de Capela do Alto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "JR Escavações" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JR Escavações | Mini Escavadeira em Capela do Alto e Região" },
      {
        name: "twitter:description",
        content:
          "Mini escavadeira, terraplanagem e preparação de terrenos em Capela do Alto e região.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JR Escavações",
          image: "/src/assets/hero-excavator.jpg",
          description:
            "Serviços com mini escavadeira: escavações, terraplanagem, abertura de valas, drenagem e preparação de terrenos.",
          telephone: "+55-15-99767-5629",
          priceRange: "$$",
          areaServed: [
            { "@type": "City", name: "Capela do Alto" },
            { "@type": "City", name: "Sorocaba" },
            { "@type": "City", name: "Tatuí" },
            { "@type": "City", name: "Iperó" },
            { "@type": "City", name: "Araçoiaba da Serra" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Capela do Alto",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Serviços com mini escavadeira",
          provider: { "@type": "LocalBusiness", name: "JR Escavações" },
          areaServed: "Capela do Alto, Sorocaba, Tatuí, Iperó, Araçoiaba da Serra",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços JR Escavações",
            itemListElement: [
              "Abertura de valas",
              "Limpeza de terrenos",
              "Terraplanagem",
              "Nivelamento de terrenos",
              "Preparação para fundações",
              "Escavação para piscinas",
              "Drenagem e tubulações",
              "Demolição leve",
              "Paisagismo e drenagem",
              "Preparação de terrenos",
            ].map((n) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: n },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Solution />
        <Impact />
        <Gallery />
        <ServiceArea />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

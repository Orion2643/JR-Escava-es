import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Solution } from "@/components/landing/Solution";
import { Impact } from "@/components/landing/Impact";
import { Gallery } from "@/components/landing/Gallery";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { GoogleLocation } from "@/components/landing/GoogleLocation";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { SITE } from "@/lib/site";

const title = "JR Escavações em Capela do Alto | Mini Escavadeira e Terraplanagem";
const description =
  "JR Escavações e Terraplanagem em Capela do Alto: mini escavadeira, abertura de valas, limpeza, nivelamento e preparação de terrenos em Capela do Alto, Sorocaba, Tatuí, Iperó e região.";

const serviceNames = [
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
];

const serviceAreas = ["Capela do Alto", "Sorocaba", "Tatuí", "Iperó", "Araçoiaba da Serra"];
const ogImage = `${SITE.url}${SITE.ogImage}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "mini escavadeira Capela do Alto, escavações Capela do Alto, terraplanagem Capela do Alto, terraplanagem Sorocaba, abertura de valas, limpeza de terreno, escavação para piscina, drenagem, fundações, mini escavadeira Sorocaba, Tatuí, Iperó, Araçoiaba da Serra, JR Escavações",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Capela do Alto" },
      { name: "geo.position", content: `${SITE.geo.latitude};${SITE.geo.longitude}` },
      { name: "ICBM", content: `${SITE.geo.latitude}, ${SITE.geo.longitude}` },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "JR Escavações" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE.legalName },
      { property: "og:image", content: ogImage },
      { property: "og:image:secure_url", content: ogImage },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "JR Escavações e Terraplanagem em Capela do Alto" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "JR Escavações e Terraplanagem em operação" },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
          "@id": `${SITE.url}/#business`,
          name: SITE.legalName,
          legalName: SITE.legalName,
          url: SITE.url,
          logo: `${SITE.url}/icon-512.png`,
          image: ogImage,
          description,
          telephone: `+${SITE.phoneRaw}`,
          priceRange: "$$",
          currenciesAccepted: "BRL",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${SITE.address.street}, ${SITE.address.number} - ${SITE.address.district}`,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.state,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.latitude,
            longitude: SITE.geo.longitude,
          },
          areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
          hasMap: SITE.mapsPlace,
          sameAs: [SITE.mapsPlace],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${SITE.phoneRaw}`,
            contactType: "customer service",
            availableLanguage: "Portuguese",
            areaServed: "BR-SP",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços JR Escavações e Terraplanagem",
            itemListElement: serviceNames.map((service) => ({
              "@type": "Offer",
              areaServed: serviceAreas.join(", "),
              itemOffered: {
                "@type": "Service",
                name: service,
                provider: { "@id": `${SITE.url}/#business` },
              },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE.url}/#website`,
          url: SITE.url,
          name: SITE.legalName,
          description,
          inLanguage: "pt-BR",
          publisher: { "@id": `${SITE.url}/#business` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE.url}/#services`,
          serviceType: "Escavações, mini escavadeira e terraplanagem",
          provider: { "@id": `${SITE.url}/#business` },
          areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços com mini escavadeira",
            itemListElement: serviceNames.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service },
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
            { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
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
        <GoogleLocation />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

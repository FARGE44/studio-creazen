import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Diff from "@/components/Diff";
import Ateliers from "@/components/Ateliers";
import FAQ from "@/components/FAQ";
import PourQui from "@/components/PourQui";
import Temoignages from "@/components/Temoignages";
import Legitimite from "@/components/Legitimite";
import Partenaires from "@/components/Partenaires";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://studiocreazen.com/#business",
      name: "Studio Creazen",
      description:
        "Ateliers artistiques inspirés des traditions du monde entier animés par Ophélie Delon à Montréal. Format nomade, tous niveaux, matériel fourni.",
      url: "https://studiocreazen.com",
      telephone: "+15149701809",
      email: "info@studiocreazen.com",
      image: "https://studiocreazen.com/opengraph-image",
      logo: "https://studiocreazen.com/opengraph-image",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Verdun",
        addressLocality: "Montréal",
        addressRegion: "Québec",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.4614,
        longitude: -73.5700,
      },
      sameAs: [
        "https://www.instagram.com/studiocreazen/",
        "https://www.facebook.com/studiocreazen",
      ],
      founder: {
        "@type": "Person",
        name: "Ophélie Delon",
        jobTitle: "Artiste et facilitatrice créative",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ateliers créatifs du monde",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Encre Sumi-e", description: "Peinture à l'encre japonaise — bambous, vagues, paysages épurés." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Géométrie & Zellige", description: "Motifs islamiques inspirés des mosaïques marocaines." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Encres Tropicales", description: "Encres à l'alcool aux couleurs de la forêt brésilienne." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Mandala Méditatif", description: "Art du cercle sacré inspiré des traditions indiennes." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Art Folk & Couleurs", description: "Art folk mexicain coloré et festif." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Café & Curcuma", description: "Peinture avec des encres naturelles — café, curcuma, thé." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Art Innu", description: "Formes ancestrales des Premières Nations, connexion à la terre." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Le Voyage en Art", description: "Mix de techniques du monde personnalisé pour votre groupe." } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://studiocreazen.com/#website",
      url: "https://studiocreazen.com",
      name: "Studio Creazen",
      description: "Ateliers créatifs inspirés des traditions du monde entier · Montréal",
      publisher: { "@id": "https://studiocreazen.com/#business" },
      inLanguage: "fr-CA",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Diff />
        <Ateliers />
        <FAQ />
        <PourQui />
        <Temoignages />
        <Legitimite />
        <Partenaires />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

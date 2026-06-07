import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://studiocreazen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Studio Creazen — Ateliers créatifs du monde · Montréal",
    template: "%s | Studio Creazen",
  },
  description:
    "Ateliers artistiques inspirés des traditions du monde entier animés par Ophélie Delon à Montréal. Kintsugi, Sumi-e, Mandala, Zellige… Format nomade, tous niveaux, matériel fourni. Particuliers, EVJF, team building.",
  keywords: [
    "ateliers créatifs Montréal",
    "atelier artistique Montréal",
    "Studio Creazen",
    "Ophélie Delon",
    "atelier kintsugi Montréal",
    "atelier sumi-e Montréal",
    "atelier mandala Montréal",
    "atelier zellige Montréal",
    "team building créatif Montréal",
    "EVJF créatif Montréal",
    "atelier art du monde",
    "bien-être au travail Montréal",
    "atelier nomade Montréal",
    "créativité zen",
    "art thérapie Montréal",
  ],
  authors: [{ name: "Ophélie Delon", url: SITE_URL }],
  creator: "Ophélie Delon",
  publisher: "Studio Creazen",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: SITE_URL,
    siteName: "Studio Creazen",
    title: "Studio Creazen — Ateliers créatifs du monde · Montréal",
    description:
      "Ateliers artistiques inspirés des traditions du monde entier. Kintsugi, Sumi-e, Mandala, Zellige… Format nomade à Montréal. Tous niveaux, matériel fourni.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Studio Creazen — Ateliers créatifs du monde · Montréal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Creazen — Ateliers créatifs du monde · Montréal",
    description:
      "Ateliers artistiques inspirés des traditions du monde entier. Format nomade à Montréal. Tous niveaux, matériel fourni.",
    images: ["/opengraph-image"],
    creator: "@studiocreazen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Creazen — Ophélie Delon · Ateliers créatifs Montréal",
  description: "Des ateliers artistiques inspirés des traditions du monde entier — conçus pour allumer quelque chose en vous. Montréal & Grand Montréal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

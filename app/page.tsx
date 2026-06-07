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

export default function Home() {
  return (
    <>
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

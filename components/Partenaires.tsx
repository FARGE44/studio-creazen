const LOGOS = [
  { src: '/images/logo-biblio-montreal.svg', alt: 'Bibliothèques de Montréal', delay: '' },
  { src: '/images/logo-botabota.png', alt: 'Bota Bota Spa', delay: 'd1' },
  { src: '/images/logo-defricheuses.svg', alt: 'Les Défricheuses', delay: 'd2' },
  { src: '/images/logo-culture-verdun.svg', alt: 'Maison de la Culture Verdun', delay: 'd2' },
  { src: '/images/logo-verdunoises.svg', alt: 'Les Verdunoises', delay: 'd3' },
];

export default function Partenaires() {
  return (
    <section id="partenaires">
      <div className="w">
        <div className="part-header reveal">
          <div className="s-label">Ils font confiance à Studio Creazen</div>
          <h2 className="s-title">Mes partenaires</h2>
        </div>
        <div className="part-logos">
          {LOGOS.map((logo, i) => (
            <div key={i} className={`part-logo-card reveal ${logo.delay}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

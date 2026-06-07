export default function Hero() {
  return (
    <section id="hero">
      <div className="h-left">
        <div className="h-eyebrow reveal">Montréal · Studio créatif nomade</div>
        <h1 className="h-title reveal d1">
          Et si vous<br />
          étiez créatif·ve<br />
          depuis<br />
          <span>toujours&nbsp;?</span>
        </h1>
        <p className="h-lead reveal d2">
          Des ateliers artistiques inspirés des traditions du monde entier — conçus pour allumer quelque chose en vous : la curiosité, le jeu, la légèreté de créer sans pression.{' '}
          <strong>Pour retrouver un espace qui vous appartient.</strong>
        </p>
        <div className="h-btns reveal d3">
          <a href="#ateliers" className="btn-fill">Voir les ateliers</a>
          <a href="#contact" className="btn-naked">Réserver une expérience →</a>
        </div>
      </div>
      <div className="h-right">
        <img src="/ophelie.jpeg" alt="Ophélie Delon — Studio Creazen" />
        <div className="h-right-tint" />
      </div>
      <div className="h-scroll">
        <div className="h-scroll-line" />
        Découvrir
      </div>
    </section>
  );
}

export default function Intro() {
  return (
    <section id="intro">
      <div className="w">
        <div className="intro-header reveal">
          <div className="s-label">L&apos;expérience</div>
          <h2 className="s-title" style={{ margin: 0 }}>L&apos;atelier,<br />de l&apos;intérieur</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-pill reveal">
            <svg className="intro-pill-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4 C16 4 8 10 8 18 C8 23 11 27 16 28 C21 27 24 23 24 18 C24 10 16 4 16 4Z" />
              <path d="M16 14 L16 22" />
            </svg>
            <div className="intro-pill-title">Se déposer</div>
            <p className="intro-pill-desc">Un espace pour décrocher. Avant de toucher un pinceau, il y a une boisson chaude, une ambiance, la permission d&apos;arriver vraiment.</p>
          </div>
          <div className="intro-pill reveal d1">
            <svg className="intro-pill-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="16" cy="16" r="4" />
              <path d="M16 4 L16 8 M16 24 L16 28 M4 16 L8 16 M24 16 L28 16" />
              <path d="M7.5 7.5 L10.3 10.3 M21.7 21.7 L24.5 24.5 M24.5 7.5 L21.7 10.3 M10.3 21.7 L7.5 24.5" />
            </svg>
            <div className="intro-pill-title">Créer avec le monde</div>
            <p className="intro-pill-desc">Des techniques artistiques du Japon, du Maroc, des Premières Nations, du Brésil — autant de portes d&apos;entrée vers votre propre façon de créer.</p>
          </div>
          <div className="intro-pill reveal d2">
            <svg className="intro-pill-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 28 C11 28 6 24 6 18 C6 13 10 9 13 6 C13 10 15 12 16 13 C17 10 16 6 19 4 C19 9 22 12 23 15 C25 14 25 11 25 11 C27 14 26 20 26 21 C26 25 21 28 16 28Z" />
            </svg>
            <div className="intro-pill-title">Repartir différent·e</div>
            <p className="intro-pill-desc">Une création sous le bras, un déclic dans la tête — et surtout, le processus créatif en main. Un changement de mindset qui dure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

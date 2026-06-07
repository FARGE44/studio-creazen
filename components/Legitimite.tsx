export default function Legitimite() {
  return (
    <section id="legitimite">
      <div className="w">
        <div className="leg-inner">
          <div className="leg-photo reveal" style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '3/4', background: 'var(--blue-m)' }}>
            <img src="/ophelie.jpeg" alt="Ophélie Delon" style={{ objectPosition: 'center top' }} />
          </div>
          <div className="leg-left">
            <div className="s-label reveal" style={{ color: 'var(--gold)' }}>Ophélie Delon</div>
            <h2 className="s-title reveal d1">Une facilitatrice<br /><span style={{ color: 'var(--gold)' }}>engagée</span></h2>
            <p className="s-intro reveal d2">Artiste et animatrice créative basée à Verdun (Montréal), Ophélie anime des ateliers depuis des années avec une conviction profonde : tout le monde peut créer, et créer fait du bien. Pas pour produire une belle œuvre — pour se retrouver, s&apos;ouvrir, s&apos;allumer.</p>
            <a href="#contact" className="btn-fill reveal d3" style={{ marginTop: '2rem', display: 'inline-block' }}>Rencontrer Ophélie</a>
          </div>
          <div className="leg-right">
            <div className="leg-item reveal">
              <div>
                <div className="leg-item-title">Membre des Défricheuses</div>
                <div className="leg-item-desc">Ophélie fait partie de ce réseau d&apos;entrepreneures qui se soutiennent et se font confiance. Les Défricheuses accueillent régulièrement ses ateliers kintsugi et créatifs.</div>
              </div>
            </div>
            <div className="leg-item reveal d1">
              <div>
                <div className="leg-item-title">Membre des Verdunoises</div>
                <div className="leg-item-desc">Réseau des femmes entrepreneures de Verdun. Une ancre communautaire forte dans le quartier où Studio Creazen est né.</div>
              </div>
            </div>
            <div className="leg-item reveal d2">
              <div>
                <div className="leg-item-title">Approche inspirée de l&apos;art-thérapie</div>
                <div className="leg-item-desc">Sans être thérapeute, Ophélie s&apos;inspire des principes de l&apos;art-thérapie — bienveillance, non-jugement, processus plutôt que résultat — pour créer des espaces sûrs et libérateurs.</div>
              </div>
            </div>
            <div className="leg-item reveal d3">
              <div>
                <div className="leg-item-title">Ancrée à Verdun, active à Montréal</div>
                <div className="leg-item-desc">Studio Creazen intervient partout à Montréal et dans le Grand Montréal. En studio, en entreprise, en plein air — partout où la créativité peut s&apos;épanouir.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

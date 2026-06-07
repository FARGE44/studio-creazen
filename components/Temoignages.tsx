const TEMOS = [
  {
    initials: 'MC', name: 'Marie-Claude Tremblay', detail: 'Atelier Sumi-e · Montréal',
    text: "« L'atelier Sumi-e était une expérience de pure sérénité. Je n'avais jamais touché un pinceau — j'en suis ressortie avec une œuvre dont je suis tellement fière. L'ambiance était zen et tellement bienveillante. »",
    delay: '',
  },
  {
    initials: 'JP', name: 'Jean-Philippe Bélanger', detail: 'Team building · Entreprise · Québec',
    text: "« Notre team building mandala — 12 personnes, 3h de pur bonheur. Ophélie crée un espace tellement bienveillant. Elle est patiente, drôle, passionnée. On renouvelle dès l'automne ! »",
    delay: 'd1',
  },
  {
    initials: 'SL', name: 'Sophie Lavoie', detail: 'EVJF · Atelier Encres · Montréal',
    text: '« Mon EVJF avec les encres tropicales — WOW. Un après-midi magique, plein de rires et de couleurs. Chaque fille est repartie avec sa propre création unique. Je recommande à 1000 % ! »',
    delay: '',
  },
  {
    initials: 'AL', name: 'Amélie Leclerc', detail: 'Atelier Café & Curcuma · Longueuil',
    text: "« J'ai offert l'atelier café & curcuma à ma mère — elle était touchée. Peindre avec des épices, c'est si poétique. Ophélie a un don incroyable pour mettre tout le monde à l'aise dès la première minute. »",
    delay: 'd1',
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages">
      <div className="w">
        <div className="temo-header">
          <div>
            <div className="s-label reveal">Ils en parlent</div>
            <h2 className="s-title reveal d1" style={{ marginBottom: 0 }}>Ils ne s&apos;attendaient<br /><span>pas à ça</span></h2>
          </div>
          <p className="s-intro reveal d2">Des centaines de participantes et participants ont vécu une expérience Studio Creazen.</p>
        </div>
        <div className="temo-grid">
          {TEMOS.map((t, i) => (
            <div key={i} className={`temo reveal ${t.delay}`}>
              <div className="temo-stars">★ ★ ★ ★ ★</div>
              <p className="temo-quote">{t.text}</p>
              <div className="temo-author">
                <div className="t-av">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

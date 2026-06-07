export default function Diff() {
  return (
    <section id="diff">
      <div className="w">
        <div className="diff-inner">
          <div className="diff-photo reveal">
            <img src="/images/123.png" alt="Ateliers Studio Creazen" />
          </div>
          <div className="diff-text">
            <div className="s-label reveal">Ce qui nous distingue</div>
            <h2 className="s-title reveal d1">Plus qu&apos;un atelier,<br /><span>un changement de quotidien</span></h2>
            <p className="s-intro reveal d2">Il n&apos;y a pas besoin de talent. Ce qu&apos;on cherche ici, c&apos;est autre chose : un déclic. Le moment où quelqu&apos;un qui se croyait &ldquo;pas créatif·ve&rdquo; réalise que c&apos;était faux depuis le début.</p>
            <div className="diff-points reveal d2">
              <div className="dp">
                <div className="dp-icon" />
                <div>
                  <div className="dp-title">Aucune expérience requise</div>
                  <div className="dp-desc">Absolument tous les niveaux sont bienvenus. Surtout ceux qui pensent qu&apos;ils ne savent pas créer — ce sont souvent eux qui sont le plus surpris.</div>
                </div>
              </div>
              <div className="dp">
                <div className="dp-icon" />
                <div>
                  <div className="dp-title">Matériel entièrement fourni</div>
                  <div className="dp-desc">Vous n&apos;apportez rien, vous repartez avec votre création. Pinceaux, encres, papiers, tout est préparé avec soin.</div>
                </div>
              </div>
              <div className="dp">
                <div className="dp-icon" />
                <div>
                  <div className="dp-title">8 cultures, 8 univers</div>
                  <div className="dp-desc">Les traditions du monde entier sont la porte d&apos;entrée — chaque technique ouvre une façon différente de voir, de sentir, et de créer. C&apos;est la curiosité qui guide, pas la performance.</div>
                </div>
              </div>
              <div className="dp">
                <div className="dp-icon" />
                <div>
                  <div className="dp-title">Un moment pour soi (ou pour son équipe)</div>
                  <div className="dp-desc">La création ensemble, ça crée des liens. On se parle différemment quand on crée côte à côte — l&apos;atelier devient autant une rencontre qu&apos;une expérience artistique.</div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn-fill reveal d3">Je veux vivre cette expérience</a>
          </div>
        </div>
      </div>
    </section>
  );
}

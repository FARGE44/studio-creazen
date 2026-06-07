'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Est-ce que je dois savoir dessiner pour participer ?',
    a: "Absolument pas. Et c'est même souvent les personnes qui n'ont « jamais su dessiner » qui vivent la plus belle expérience. Les techniques proposées sont accessibles à tous — il n'y a pas de bon ou de mauvais résultat, juste votre façon unique de créer.",
  },
  {
    q: 'Pour qui sont faits ces ateliers ?',
    a: "Pour tout le monde dès 16 ans : les groupes d'amis qui cherchent une sortie originale, les EVJF qui veulent quelque chose de doux et créatif, les équipes en entreprise qui ont besoin de se retrouver autrement, et les particuliers qui souhaitent prendre soin d'eux.",
  },
  {
    q: 'Où se déroulent les ateliers ?',
    a: "Je suis un studio nomade — c'est moi qui viens chez vous. Chez vous, dans vos locaux d'entreprise, dans un café, un espace coworking ou en plein air. Je m'adapte à votre espace et apporte tout le matériel nécessaire.",
  },
  {
    q: 'Combien de personnes par atelier ?',
    a: "Les ateliers fonctionnent de 2 à 20 personnes selon la formule choisie. Pour les petits groupes (2-8 pers.), l'expérience est très intimiste. Pour les groupes plus larges d'entreprise (jusqu'à 25 pers.), je peux organiser une animation adaptée.",
  },
  {
    q: "Qu'est-ce qu'on va apprendre ?",
    a: "Chaque atelier vous initie à une technique artistique du monde — encre sumi-e, zellige, mandala, encres naturelles... Vous apprenez les gestes, les matières, l'histoire derrière la pratique. Mais au-delà de la technique, ce que la plupart des participants ramènent, c'est une façon différente d'aborder la création : sans jugement, sans pression de « bien faire ». Ça, ça reste longtemps après l'atelier.",
  },
  {
    q: 'Quels sont les tarifs ?',
    a: "Les tarifs varient selon le type d'atelier, le nombre de participants et le format. Écrivez-moi pour obtenir un devis personnalisé — je construis une proposition sur mesure pour chaque groupe.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq">
      <div className="w">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="s-label reveal">Vos questions</div>
            <h2 className="s-title reveal d1" style={{ marginBottom: '.5rem' }}>
              Et si vous étiez<br />fait pour <span>ça&nbsp;?</span>
            </h2>
            <p className="s-intro reveal d2">Avant de plonger dans la création, il y a souvent quelques hésitations. Je réponds ici aux questions les plus fréquentes.</p>
            <div className="faq-img reveal d3">
              <img
                src="/images/vous-etiez-fait.png"
                alt="Et si vous étiez fait pour ça ?"
                style={{ objectPosition: 'center top', borderRadius: 4, height: 280 }}
              />
            </div>
          </div>
          <div className="faqs reveal d1">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? ' open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

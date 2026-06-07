'use client';
import { useState } from 'react';

const TABS = [
  {
    id: 'particuliers',
    label: 'Particuliers',
    title: 'Particuliers',
    sub: 'Groupes privés & familles',
    items: [
      'Soirée créative entre amis (2 à 12 pers.)',
      'Anniversaire original et mémorable',
      'EVJF doux, créatif et lumineux',
      'Activité mère-fille, en couple ou en famille',
      'Cadeau expérience pour un proche',
      'Moment de ressourcement pour soi',
    ],
    cta: { label: 'Je veux réserver mon atelier →', href: '#contact' },
    image: null,
  },
  {
    id: 'soirees',
    label: 'Soirées à thème',
    title: 'Soirées à thème',
    sub: 'Créatif & sur mesure',
    items: [
      'Soirée à thème personnalisée',
      'Lunch créatif',
      'Apéro-création',
      "Fête d'anniversaire originale",
      'EVJF créatif et lumineux',
      'Cadeau expérience pour un proche',
    ],
    cta: { label: 'Organiser ma soirée →', href: '#contact' },
    image: null,
  },
  {
    id: 'entreprises',
    label: 'Entreprises',
    title: 'Entreprises',
    sub: 'Team building & bien-être',
    items: [
      'Team building créatif et fédérateur',
      'Atelier de décompression et bien-être',
      'Cohésion d\'équipe par la création partagée',
      "Animation de séminaire ou journée d'équipe",
      'Programme de bien-être au travail sur mesure',
      'Idéation créative et innovation par le jeu',
    ],
    cta: { label: 'Demander un devis entreprise →', href: '#contact' },
    image: '/images/entreprise-2.png',
  },
];

export default function PourQui() {
  const [actif, setActif] = useState('entreprises');
  const panel = TABS.find((t) => t.id === actif)!;

  return (
    <section id="pourqui">
      <div className="w">
        <div className="pq-header">
          <div className="s-label reveal">Pour qui ?</div>
          <h2 className="s-title reveal d1">Peu importe<br /><span>l&apos;occasion</span></h2>
        </div>
        <div className="pq-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`pq-tab${actif === tab.id ? ' actif' : ''}`}
              onClick={() => setActif(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pq-panel actif">
          <div>
            <div className="pq-panel-title">{panel.title}</div>
            <div className="pq-panel-sub">{panel.sub}</div>
            <ul className="pq-list">
              {panel.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href={panel.cta.href} className="pq-cta">{panel.cta.label}</a>
          </div>
          <div className="pq-visual" style={panel.image ? { padding: 0, overflow: 'hidden' } : {}}>
            {panel.image && (
              <img
                src={panel.image}
                alt={`Ateliers ${panel.title} Studio Creazen`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 8 }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

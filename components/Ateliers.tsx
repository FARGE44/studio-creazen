'use client';
import { useState } from 'react';

const PAYS = [
  { id: 'tous', label: 'Tous', color: '#2B6C8E' },
  { id: 'japon', label: 'Japon', color: '#2B6C8E' },
  { id: 'maroc', label: 'Maroc', color: '#C4622D' },
  { id: 'bresil', label: 'Brésil', color: '#2E8B4A' },
  { id: 'inde', label: 'Inde', color: '#7B4397' },
  { id: 'mexique', label: 'Mexique', color: '#D4500A' },
  { id: 'france', label: 'France', color: '#8B5E2A' },
  { id: 'premieres-nations', label: 'Premières Nations', color: '#5C4020' },
  { id: 'sur-mesure', label: 'Sur mesure', color: '#4A90B8' },
];

const ATELIERS = [
  { pays: 'japon', bg: 'linear-gradient(135deg,#1A2A3A,#2B6C8E)', region: 'Japon', culture: 'Encre Sumi-e', desc: 'Bambous, vagues, paysages épurés — la méditation par le pinceau.', dur: '2h30', delay: '' },
  { pays: 'maroc', bg: 'linear-gradient(135deg,#3A1A0A,#C4622D)', region: 'Maroc', culture: 'Géométrie & Zellige', desc: "Motifs islamiques, calligraphie graphique — l'âme des mosaïques.", dur: '2h', delay: 'd1' },
  { pays: 'bresil', bg: 'linear-gradient(135deg,#0A2A0A,#2E8B4A)', region: 'Brésil', culture: 'Encres Tropicales', desc: "Couleurs explosives, fleurs exotiques — l'énergie de la forêt.", dur: '2h', delay: 'd2' },
  { pays: 'inde', bg: 'linear-gradient(135deg,#2D0645,#7B4397)', region: 'Inde', culture: 'Mandala Méditatif', desc: "L'art du cercle sacré — concentration, symétrie et sérénité.", dur: '3h', delay: 'd3' },
  { pays: 'mexique', bg: 'linear-gradient(135deg,#5C1A00,#D4500A)', region: 'Mexique', culture: 'Art Folk & Couleurs', desc: "Fleurs, oiseaux, couleurs festives — l'esprit créatif en liberté.", dur: '2h30', delay: '' },
  { pays: 'france', bg: 'linear-gradient(135deg,#2A1400,#8B5E2A)', region: 'France', culture: 'Café & Curcuma', desc: 'Peindre avec les épices et le café — poétique, naturel, éco-créatif.', dur: '2h', delay: 'd1' },
  { pays: 'premieres-nations', bg: 'linear-gradient(135deg,#1A1200,#5C4020)', region: 'Premières Nations', culture: 'Art Innu', desc: 'Formes ancestrales, connexion à la terre — une création profondément enracinée.', dur: '2h30', delay: 'd2' },
  { pays: 'sur-mesure', bg: 'linear-gradient(135deg,#0A1525,#2B6C8E)', region: 'Sur Mesure', culture: 'Le Voyage en Art', desc: 'Un mix de techniques du monde personnalisé pour votre groupe.', dur: '3h', delay: 'd3' },
];

export default function Ateliers() {
  const [actif, setActif] = useState('tous');

  return (
    <section id="ateliers">
      <div className="w">
        <div className="ateliers-top">
          <div>
            <div className="s-label reveal">Catalogue</div>
            <h2 className="s-title reveal d1" style={{ marginBottom: 0 }}>Le voyage<br />commence ici</h2>
          </div>
          <div className="ateliers-top-r reveal d2">Matériel fourni · Tous niveaux<br />Format nomade · Petits groupes</div>
        </div>
        <div className="ateliers-inner">
          <div className="ateliers-lateral">
            {PAYS.map((p) => (
              <div
                key={p.id}
                className={`lat-item${actif === p.id ? ' actif' : ''}`}
                onClick={() => setActif(p.id)}
              >
                <div className="lat-bar" style={{ background: p.color }} />
                <span className="lat-name">{p.label}</span>
              </div>
            ))}
          </div>
          <div className="ateliers-grid">
            {ATELIERS.map((a, i) => {
              const visible = actif === 'tous' || actif === a.pays;
              return (
                <div
                  key={i}
                  className={`ac reveal ${a.delay}`}
                  style={!visible ? { opacity: 0, transform: 'scale(.96)', pointerEvents: 'none', display: 'none' } : {}}
                >
                  <div className="ac-header" style={{ background: a.bg }}>
                    <div className="ac-header-tint" />
                    <div className="ac-replace-badge">À remplacer</div>
                    <div className="ac-region-tag">{a.region}</div>
                    <div className="ac-culture">{a.culture}</div>
                  </div>
                  <div className="ac-body">
                    <p className="ac-desc">{a.desc}</p>
                    <div className="ac-footer">
                      <span className="ac-dur">{a.dur}</span>
                      <a href="#contact" className="ac-link">Réserver →</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

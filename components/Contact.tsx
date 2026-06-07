'use client';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact">
      <div className="w">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="s-label reveal">Réservation</div>
            <h2 className="s-title reveal d1">Prêt·e à<br />créer<br /><span>ensemble ?</span></h2>
            <p className="s-intro reveal d2">Partagez votre projet — je vous reviens rapidement avec une proposition sur mesure pour votre groupe.</p>
            <div className="contact-channels reveal d2">
              <div className="ch">
                <div>
                  <div className="ch-main"><a href="tel:5149701809">514 970-1809</a></div>
                  <div className="ch-sub">Lun–Sam · 9h–18h</div>
                </div>
              </div>
              <div className="ch">
                <div>
                  <div className="ch-main"><a href="mailto:info@studiocreazen.com">info@studiocreazen.com</a></div>
                  <div className="ch-sub">Réponse sous 24h</div>
                </div>
              </div>
              <div className="ch">
                <div>
                  <div className="ch-main">Montréal & Grand Montréal</div>
                  <div className="ch-sub">Studio nomade · Je me déplace</div>
                </div>
              </div>
            </div>
            <a href="https://www.instagram.com/studiocreazen/" target="_blank" rel="noopener noreferrer" className="ig-btn reveal d3">@studiocreazen</a>
          </div>
          <div className="contact-form reveal d1">
            <h3>Réserver un atelier</h3>
            <p>Je vous reviens rapidement pour organiser votre expérience créative.</p>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2.5rem', fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--blue-d)' }}>
                Message envoyé !<br />
                <span style={{ fontSize: '.9rem', fontFamily: 'var(--font-body)', color: 'var(--light)', fontWeight: 300 }}>Je vous reviens sous 24h.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="fr">
                  <div className="fg"><label>Prénom *</label><input type="text" placeholder="Marie" required /></div>
                  <div className="fg"><label>Nom *</label><input type="text" placeholder="Tremblay" required /></div>
                </div>
                <div className="fg"><label>Courriel *</label><input type="email" placeholder="marie@exemple.com" required /></div>
                <div className="fg">
                  <label>Atelier souhaité</label>
                  <select>
                    <option value="">Choisir…</option>
                    <option>Encre Sumi-e</option>
                    <option>Géométrie & Zellige</option>
                    <option>Encres Tropicales</option>
                    <option>Mandala Méditatif</option>
                    <option>Art Folk & Couleurs</option>
                    <option>Café & Curcuma</option>
                    <option>Art Innu</option>
                    <option>Le Voyage en Art</option>
                    <option>Entreprise — sur mesure</option>
                  </select>
                </div>
                <div className="fg">
                  <label>Occasion</label>
                  <select>
                    <option>Soirée privée / amis</option>
                    <option>Anniversaire</option>
                    <option>EVJF</option>
                    <option>Team building</option>
                    <option>Cadeau expérience</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="fg"><label>Votre message</label><textarea placeholder="Parlez-moi de votre projet, date souhaitée, nombre de participants…" /></div>
                <button type="submit" className="f-submit">Envoyer ma demande</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

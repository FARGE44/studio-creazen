'use client';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#intro', label: 'La démarche' },
  { href: '#ateliers', label: 'Les ateliers' },
  { href: '#pourqui', label: 'Pour qui ?' },
  { href: '#legitimite', label: 'Ophélie' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('s', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav id="nav">
        <a href="#hero" className="n-logo">Studio Creazen</a>
        <ul className="n-links">
          {LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className="n-cta">Réserver</a></li>
        </ul>

        {/* Burger button — mobile only */}
        <button
          className="n-burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span className={`n-burger-line${open ? ' open' : ''}`} />
          <span className={`n-burger-line${open ? ' open' : ''}`} />
          <span className={`n-burger-line${open ? ' open' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`n-mobile${open ? ' open' : ''}`} aria-hidden={!open}>
        <a href="#hero" className="n-mobile-logo" onClick={close}>Studio Creazen</a>
        <ul className="n-mobile-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-fill n-mobile-cta" onClick={close}>Réserver</a>
        <div className="n-mobile-foot">514 970-1809 · info@studiocreazen.com</div>
      </div>
    </>
  );
}

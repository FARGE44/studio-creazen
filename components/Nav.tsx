'use client';
import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('s', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav">
      <a href="#hero" className="n-logo">Studio Creazen</a>
      <ul className="n-links">
        <li><a href="#intro">La démarche</a></li>
        <li><a href="#ateliers">Les ateliers</a></li>
        <li><a href="#pourqui">Pour qui ?</a></li>
        <li><a href="#legitimite">Ophélie</a></li>
        <li><a href="#contact" className="n-cta">Réserver</a></li>
      </ul>
    </nav>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#nosotros', label: 'NOSOTROS' },
  { href: '#rituales', label: 'SABORES' },
  { href: '#rituales', label: 'CAFÉ & TÉ' },
  { href: '#locales', label: 'LOCALES' },
  { href: '#contacto', label: 'CONTACTO' },
];

function BagIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="nav"
      style={
        scrolled
          ? { background: 'rgba(75, 46, 32, 0.92)', backdropFilter: 'blur(8px)' }
          : { background: 'transparent', backdropFilter: 'none' }
      }
    >
      <a href="#inicio" className="nav__logo">
        <Logo priority />
      </a>

      <button
        className="nav__toggle"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav__menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contacto" className="btn btn--outline nav__cta">
        <BagIcon />
        PEDÍ TU FAVORITO
      </a>
    </nav>
  );
}

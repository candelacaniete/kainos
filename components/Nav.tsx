'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import TeapotIcon from '@/components/TeapotIcon';

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#nosotros', label: 'NOSOTROS' },
  { href: '#rituales', label: 'SABORES' },
  { href: '#rituales', label: 'CAFÉ & TÉ' },
  { href: '#locales', label: 'LOCALES' },
  { href: '#contacto', label: 'CONTACTO' },
];

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
        <Logo priority className="nav__logo-img" />
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

      <a href="#contacto" className="btn btn--outline btn--fit nav__cta">
        <TeapotIcon />
        PEDÍ TU FAVORITO
      </a>
    </nav>
  );
}

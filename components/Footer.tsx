import Logo from '@/components/Logo';

const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#rituales', label: 'Sabores' },
  { href: '#rituales', label: 'Café & Té' },
  { href: '#locales', label: 'Locales' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__inner">
        <Logo className="footer__logo-img" />

        <p className="footer__tagline">
          Helado artesanal, café y pequeños rituales desde hace más de 30 años.
        </p>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          {footerLinks.map((link, index) => (
            <span key={link.label}>
              {index > 0 && <span className="footer__sep" aria-hidden="true">·</span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </nav>

        <div className="footer__meta">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <span className="footer__sep" aria-hidden="true">·</span>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <span className="footer__sep" aria-hidden="true">·</span>
          <span>Av. Corrientes 1234, Buenos Aires</span>
          <span className="footer__sep" aria-hidden="true">·</span>
          <span>Lun — Dom · 10:00 a 22:00</span>
        </div>

        <hr className="footer__rule" />
        <p className="footer__copy">&copy; 2026 Kainos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

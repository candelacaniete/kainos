import Logo from '@/components/Logo';

const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#rituales', label: 'Sabores' },
  { href: '#rituales', label: 'Café & Té' },
  { href: '#locales', label: 'Locales' },
  { href: '#contacto', label: 'Contacto' },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2z" />
      <path d="M8.5 9.5c.3-.7 1-.7 1.3-.7.3 0 .7 0 .9.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.5.7-.7.9-.2.2-.4.3-.1.7.3.4 1.3 2 3.1 2.7 1.5.6 1.8.5 2.1.4.3-.1 1-.4 1.1-.8.1-.4.1-.7.1-.8 0-.1-.1-.1-.3-.2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__main">
        <div className="footer__col footer__col--brand">
          <Logo className="footer__logo-img" />
          <p className="footer__tagline">
            Helado artesanal, café y pequeños rituales desde hace más de 30 años.
          </p>
        </div>

        <nav className="footer__col footer__col--nav" aria-label="Navegación del pie de página">
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__col--contact">
          <ul className="footer__contact">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
            <li>
              <span>
                <MapPinIcon />
                Av. Corrientes 1234, Buenos Aires
              </span>
            </li>
            <li>
              <span>
                <ClockIcon />
                Lun — Dom · 10:00 a 22:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <hr className="footer__rule" />
        <p className="footer__copy">&copy; 2026 Kainos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="footer footer--dark" id="contacto">
      <div className="container footer__inner">
        <div className="footer__logo">
          <span className="nav__stars">★ ★ ★</span>
          <span className="footer__brand">KAINOS</span>
          <span className="footer__tagline">— HELADO ARTESANAL —</span>
        </div>
        <p className="footer__cta-title">Tu pausa te espera.</p>
        <a href="#" className="link-arrow footer__cta-link">
          PEDÍ TU FAVORITO →
        </a>
        <hr className="footer__rule" />
        <p className="footer__copy">&copy; 2026 Kainos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

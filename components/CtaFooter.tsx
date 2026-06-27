import BagIcon from '@/components/BagIcon';
import TeapotWatermark from '@/components/TeapotWatermark';

export default function CtaFooter() {
  return (
    <section className="section section--cta" id="contacto">
      <TeapotWatermark small />
      <div className="container cta__content">
        <h2 className="cta__title">Tu pausa te espera.</h2>
        <a href="#" className="btn btn--primary btn--large">
          <BagIcon />
          PEDÍ TU FAVORITO
        </a>
      </div>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__logo">
            <span className="nav__stars">★ ★ ★</span>
            <span className="nav__brand">KAINOS</span>
            <span className="nav__tagline">— HELADO ARTESANAL —</span>
          </div>
          <p className="footer__copy">&copy; 2026 Kainos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
}

import FadeUp from '@/components/FadeUp';
import Logo from '@/components/Logo';
import TeapotWatermark from '@/components/TeapotWatermark';

function BagIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export default function CtaFooter() {
  return (
    <section className="section section--cta" id="contacto">
      <TeapotWatermark small />
      <FadeUp className="container cta__content">
        <h2 className="cta__title">Tu pausa te espera.</h2>
        <a href="#" className="btn btn--primary btn--large">
          <BagIcon />
          PEDÍ TU FAVORITO
        </a>
      </FadeUp>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__logo">
            <Logo />
          </div>
          <p className="footer__copy">&copy; 2026 Kainos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
}

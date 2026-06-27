import Image from 'next/image';
import Nav from '@/components/Nav';

function TeapotIcon() {
  return (
    <svg className="btn__icon btn__icon--teapot" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 14h16c2 0 3-1 3-3V8H4v6z" />
      <path d="M4 14v4h16v-4" />
      <path d="M8 8V5c0-1 1-2 2-2h4c1 0 2 1 2 2v3" />
      <path d="M23 10c2 0 4 1 5 3" />
      <ellipse cx="12" cy="18" rx="10" ry="1.5" opacity="0.3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="hero__bg"
        sizes="100vw"
      />
      <div className="hero__overlay" />
      <Nav />
      <div className="hero__content fade-in">
        <h1 className="hero__title">Hay lugares que se sienten como en casa.</h1>
        <p className="hero__subtitle">
          Helado artesanal, café de calidad, tés seleccionados y tardes que invitan a quedarse un poco más.
        </p>
        <a href="#nosotros" className="btn btn--primary">
          CONOCÉ KAINOS
          <TeapotIcon />
        </a>
      </div>
    </header>
  );
}

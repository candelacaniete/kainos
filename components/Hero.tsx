import Image from 'next/image';
import Nav from '@/components/Nav';
import TeapotIcon from '@/components/TeapotIcon';

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
      <div className="hero__overlay" aria-hidden="true" />
      <Nav />
      <div className="hero__content fade-in">
        <h1 className="hero__title">Hay lugares que se sienten como en casa.</h1>
        <p className="hero__subtitle">
          Helado artesanal, café de calidad, tés seleccionados y tardes que invitan a quedarse un poco más.
        </p>
        <a href="#nosotros" className="btn btn--primary">
          CONOCÉ KAINOS
          <TeapotIcon className="btn__icon btn__icon--teapot" />
        </a>
      </div>
    </header>
  );
}

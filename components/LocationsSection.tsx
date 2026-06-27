import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import TeapotWatermark from '@/components/TeapotWatermark';

export default function LocationsSection() {
  return (
    <section className="section section--light" id="locales">
      <TeapotWatermark />
      <div className="container section__grid">
        <FadeUp className="section__text">
          <span className="label">NUESTROS LOCALES</span>
          <h2 className="section__title">Encontranos</h2>
          <span className="star-icon" aria-hidden="true">
            ★
          </span>
          <p>Vení a disfrutar de tu momento Kainos en cualquiera de nuestros locales.</p>
          <a href="#locales" className="link-arrow">
            VER LOCALES →
          </a>
        </FadeUp>
        <FadeUp className="section__images-duo">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80"
            alt="Detalle decorativo del local con ilustraciones de teteras"
            width={280}
            height={350}
            sizes="(max-width: 480px) 100vw, 25vw"
          />
          <Image
            src="https://images.unsplash.com/photo-1445118652557-621a83b0ef9e?w=500&q=80"
            alt="Salón del café Kainos con mesas de madera y luz cálida"
            width={280}
            height={350}
            sizes="(max-width: 480px) 100vw, 25vw"
          />
        </FadeUp>
      </div>
    </section>
  );
}

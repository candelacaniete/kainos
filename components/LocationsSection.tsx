import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function LocationsSection() {
  return (
    <section className="section section--light section--locations" id="locales">
      <div className="container locations">
        <FadeUp className="locations__intro">
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

        <div className="locations__gallery">
          <FadeUp className="locations__frame">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
              alt="Detalle decorativo del local con ilustraciones de teteras"
              width={580}
              height={720}
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </FadeUp>
          <FadeUp className="locations__frame">
            <Image
              src="https://images.unsplash.com/photo-1445118652557-621a83b0ef9e?w=900&q=80"
              alt="Salón del café Kainos con mesas de madera y luz cálida"
              width={580}
              height={720}
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

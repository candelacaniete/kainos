import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import TeapotWatermark from '@/components/TeapotWatermark';

export default function LocationsSection() {
  return (
    <section className="section section--light section--locations" id="locales">
      <TeapotWatermark variant="integrated" />
      <div className="container locations">
        <FadeUp className="locations__text">
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

        <div className="locations__photos">
          <FadeUp className="locations__photo locations__photo--primary">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80"
              alt="Detalle decorativo del local con ilustraciones de teteras"
              width={420}
              height={520}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </FadeUp>
          <FadeUp className="locations__photo locations__photo--secondary">
            <Image
              src="https://images.unsplash.com/photo-1445118652557-621a83b0ef9e?w=700&q=80"
              alt="Salón del café Kainos con mesas de madera y luz cálida"
              width={360}
              height={440}
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

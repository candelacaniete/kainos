import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import TeapotWatermark from '@/components/TeapotWatermark';

export default function AboutSection() {
  return (
    <section className="section section--light section--about" id="nosotros">
      <TeapotWatermark variant="integrated" />
      <div className="container about">
        <FadeUp className="about__text">
          <span className="label">DESDE 1980</span>
          <h2 className="section__title">Tradición que se disfruta</h2>
          <span className="star-icon" aria-hidden="true">
            ★
          </span>
          <div className="about__body">
            <p>
              Más de 30 años elaborando helado artesanal con los mejores ingredientes, recetas de familia y el
              cuidado de quienes saben que cada cucharada cuenta una historia.
            </p>
            <p>
              En Kainos creemos en los sabores auténticos, en las tardes sin apuro y en ese momento en que el
              tiempo parece detenerse frente a una taza caliente o un helado recién servido.
            </p>
          </div>
          <a href="#nosotros" className="link-arrow">
            CONOCÉ NUESTRA HISTORIA →
          </a>
        </FadeUp>

        <FadeUp className="about__photo">
          <Image
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80"
            alt="Interior de la heladería Kainos con vitrina de helados artesanales"
            width={520}
            height={640}
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </FadeUp>
      </div>
    </section>
  );
}

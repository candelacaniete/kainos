import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

const rituals = [
  {
    title: 'Helado artesanal',
    text: 'Hecho cada día con ingredientes seleccionados y mucho amor.',
    link: 'VER SABORES',
    image: '/images/ritual-helado.png',
  },
  {
    title: 'Selección de tés',
    text: 'Tés e infusiones para cada momento del día.',
    link: 'VER CARTA',
    image: '/images/ritual-te.png',
  },
  {
    title: 'Café de especialidad',
    text: 'Aromas y sabores que acompañan tu pausa.',
    link: 'VER CARTA',
    image: '/images/ritual-cafe.png',
  },
  {
    title: 'Pastelería',
    text: 'Recetas caseras que te hacen quedarte.',
    link: 'VER CARTA',
    image: '/images/ritual-pasteleria.png',
  },
];

export default function RitualsSection() {
  return (
    <section className="section section--dark" id="rituales">
      <div className="container">
        <FadeUp className="section__header">
          <h2 className="section__title section__title--light">Pequeños rituales</h2>
          <span className="label label--gold">ELEGÍ TU MOMENTO FAVORITO</span>
        </FadeUp>
        <div className="rituals-grid">
          {rituals.map((ritual) => (
            <div key={ritual.title} className="rituals-grid__item">
              <div className="rituals-grid__icon">
                <Image
                  src={ritual.image}
                  alt=""
                  width={312}
                  height={312}
                  quality={100}
                  className="rituals-grid__img"
                />
              </div>
              <h3 className="rituals-grid__title">{ritual.title}</h3>
              <p className="rituals-grid__text">{ritual.text}</p>
              <a href="#" className="rituals-grid__link">
                {ritual.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

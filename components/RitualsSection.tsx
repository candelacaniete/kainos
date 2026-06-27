import FadeUp from '@/components/FadeUp';

const rituals = [
  {
    title: 'Helado artesanal',
    text: 'Hecho cada día con ingredientes seleccionados y mucho amor.',
    link: 'VER SABORES',
    icon: (
      <svg viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="32" cy="55" rx="22" ry="8" />
        <path d="M14 55V35c0-8 8-15 18-15s18 7 18 15v20" />
        <path d="M50 40c6 2 10 7 10 13" />
        <path d="M28 20c0-6 4-10 10-10" />
        <circle cx="38" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Selección de tés',
    text: 'Tés e infusiones para cada momento del día.',
    link: 'VER CARTA',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 28h32c4 0 7-3 7-7V14H12v14z" />
        <path d="M12 28v16h32V28" />
        <path d="M20 14V8c0-3 3-6 6-6h8c3 0 6 3 6 6v6" />
        <path d="M51 20c4 0 8 2 10 5" />
        <path d="M8 48c0 0 12 4 24 4s24-4 24-4" />
      </svg>
    ),
  },
  {
    title: 'Café de especialidad',
    text: 'Aromas y sabores que acompañan tu pausa.',
    link: 'VER CARTA',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 24h30c3 0 5-2 5-5V12H10v12z" />
        <path d="M10 24v14h30V24" />
        <path d="M45 18c5 0 9 3 11 7" />
        <path d="M6 42c0 0 10 3 20 3s20-3 20-3" />
        <path d="M22 8c0-2 2-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Pastelería',
    text: 'Recetas caseras que te hacen quedarte.',
    link: 'VER CARTA',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 48h32l-4-28H20l-4 28z" />
        <path d="M12 48h40" />
        <path d="M24 20c0-6 4-10 8-10s8 4 8 10" />
        <line x1="32" y1="10" x2="32" y2="6" />
        <circle cx="32" cy="5" r="2" />
      </svg>
    ),
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
            <FadeUp key={ritual.title}>
              <article className="ritual-card">
                <div className="ritual-card__icon">{ritual.icon}</div>
                <h3 className="ritual-card__title">{ritual.title}</h3>
                <p className="ritual-card__text">{ritual.text}</p>
                <a href="#" className="ritual-card__link">
                  {ritual.link}
                </a>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

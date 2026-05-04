import { useLanguage } from '../context/LanguageContext';
import partnersImg from '../../public/images/partners.jpg';
import partner2 from '../../public/images/partner_2.jpg';
import './PartnersSection.css';

const partnerTranslations = {
  EN: [
    {
      name: 'MANOLO RACING',
      role: 'KARTING TEAM',
      description:
        'Manolo Racing is my karting team. They lead race-day strategy, setup refinement, and full trackside support.',
      logo: '/images/manolo.jpeg',
      alt: 'Manolo Racing logo',
    },
    {
      name: 'AIMOTOR',
      role: 'TECHNICAL PARTNER',
      description:
        'AiMotor is my technical partner, providing performance engineering, data analysis, and technical development support.',
      logo: '/images/aimotor.jpeg',
      alt: 'AiMotor logo',
    },
  ],
  ES: [
    {
      name: 'MANOLO RACING',
      role: 'EQUIPO DE KARTING',
      description:
        'Manolo Racing es mi equipo de karting. Dirigen la estrategia del día de carrera, refinamiento de configuración y apoyo completo en la pista.',
      logo: '/images/manolo.jpeg',
      alt: 'Logo de Manolo Racing',
    },
    {
      name: 'AIMOTOR',
      role: 'SOCIO TÉCNICO',
      description:
        'AiMotor es mi socio técnico, proporcionando ingeniería de rendimiento, análisis de datos y apoyo técnico de desarrollo.',
      logo: '/images/aimotor.jpeg',
      alt: 'Logo de AiMotor',
    },
  ],
};

export default function PartnersSection() {
  const { language } = useLanguage();
  const partners = partnerTranslations[language];

  return (
    <section id="partners" className="partners-section" aria-labelledby="partners-title">
      <div className="partners-inner">
        <header className="partners-header">
          <p className="partners-kicker">{language === 'EN' ? 'COLLABORATION' : 'COLABORACIÓN'}</p>
          <h2 id="partners-title" className="partners-title">{language === 'EN' ? 'PARTNERS' : 'ASOCIADOS'}</h2>
        </header>

        <div className="partners-layout">
          <article className="partners-visual-card" aria-label={language === 'EN' ? 'Partners in action' : 'Asociados en acción'}>
            <img
              src={partnersImg}
              alt={language === 'EN' ? 'Victor with partner branding' : 'Víctor con marca de asociado'}
              className="partners-visual"
            />
          </article>

          <div className="partners-list" aria-label={language === 'EN' ? 'Partner organizations' : 'Organizaciones asociadas'}>
            {partners.map((partner) => (
              <article className="partner-card" key={partner.name}>
                <div className="partner-logo-wrap">
                  <img src={partner.logo} alt={partner.alt} className="partner-logo" />
                </div>

                <div className="partner-copy">
                  <h3>{partner.name}</h3>
                  <p className="partner-role">{partner.role}</p>
                  <p>{partner.description}</p>
                </div>
              </article>
            ))}

            <div className="partners-fill-image-wrap" aria-label="Technical partner in action">
              <img
                src={partner2}
                alt="AiMotor technical collaboration"
                className="partners-fill-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

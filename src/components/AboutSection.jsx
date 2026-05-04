import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import aboutMe from '../../public/images/about_me.jpg';
import './AboutSection.css';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-copy">
          <h2 className="about-title">
            <span>{language === 'EN' ? 'ABOUT' : 'ACERCA'}</span>
            <span>{language === 'EN' ? 'ME' : 'DE MÍ'}</span>
          </h2>

          <p>
            {language === 'EN' ? (
              <>
                My name is Victor Montanez, a dedicated racing driver committed to
                building a professional career in motorsport. I began my journey in
                October 2024, when I first drove a kart and immediately recognized
                both my passion for racing and my potential to pursue it at a high
                level.
              </>
            ) : (
              <>
                Mi nombre es Víctor Montañez, un piloto de carreras dedicado comprometido con
                construir una carrera profesional en el automovilismo. Comencé mi viaje en
                octubre de 2024, cuando conducí un kart por primera vez y reconocí inmediatamente
                tanto mi pasión por las carreras como mi potencial para seguirla a un nivel alto.
              </>
            )}
          </p>

          <p>
            {language === 'EN' ? (
              <>
                By January 2025, I transitioned into owner karting, where I quickly
                demonstrated strong performance and rapid progression. Fully committed
                to development, I dedicated the majority of my time to training and
                competition.
              </>
            ) : (
              <>
                En enero de 2025, hice la transición al karting como propietario, donde rápidamente
                demostré un fuerte desempeño y una progresión rápida. Completamente comprometido
                con el desarrollo, dediqué la mayoría de mi tiempo al entrenamiento y la competencia.
              </>
            )}
          </p>

          {isExpanded && (
            <>
              <p>
                {language === 'EN' ? (
                  <>
                    Within just a few months, I secured my first race win and achieved
                    three podium finishes in a local rookie championship, earning a
                    promotion into professional-level competition.
                  </>
                ) : (
                  <>
                    En solo unos pocos meses, aseguré mi primera victoria en carrera y logré
                    tres pódiums en un campeonato rookie local, ganando una
                    promoción a la competencia de nivel profesional.
                  </>
                )}
              </p>

              <p>
                {language === 'EN' ? (
                  <>
                    In my first year of karting, I competed in over 10 races,
                    achieving multiple victories and podium finishes, as well as
                    securing second place in a national karting championship.
                  </>
                ) : (
                  <>
                    En mi primer año de karting, compití en más de 10 carreras,
                    logrando múltiples victorias y pódiums, así como
                    asegurar el segundo lugar en un campeonato nacional de karting.
                  </>
                )}
              </p>

              <p>
                {language === 'EN' ? (
                  <>
                    I further expanded my experience by competing in the SKUSA IAME
                    Series Mexico, continuing to develop racecraft against
                    higher-level competition.
                  </>
                ) : (
                  <>
                    Amplifiqué aún más mi experiencia compitiendo en la Serie SKUSA IAME
                    México, continuando desarrollar técnica de carrera contra
                    competencia de nivel superior.
                  </>
                )}
              </p>

              <p>
                {language === 'EN' ? (
                  <>
                    Building on this momentum, I have successfully made the
                    transition into single-seater racing, stepping up to Formula 4 in
                    under a year from my first time in a kart.
                  </>
                ) : (
                  <>
                    Aprovechando este impulso, he hecho exitosamente la
                    transición a las carreras de un solo asiento, saltando a Fórmula 4 en
                    menos de un año desde mi primer tiempo en un kart.
                  </>
                )}
              </p>

              <p>
                {language === 'EN' ? (
                  <>
                    This rapid progression reflects not only my adaptability and work
                    ethic, but also my ability to learn quickly and perform under
                    pressure. I am now fully focused on continuing my development in
                    formula racing, with the long-term objective of competing at the
                    highest levels of international motorsport.
                  </>
                ) : (
                  <>
                    Esta progresión rápida refleja no solo mi adaptabilidad y ética de trabajo,
                    sino también mi capacidad de aprender rápidamente y desempeñarme bajo
                    presión. Ahora estoy completamente enfocado en continuar mi desarrollo en
                    carreras de fórmula, con el objetivo a largo plazo de competir en los
                    niveles más altos del automovilismo internacional.
                  </>
                )}
              </p>
            </>
          )}

          <button className="about-read-more" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (language === 'EN' ? 'SHOW LESS' : 'MOSTRAR MENOS') : (language === 'EN' ? 'READ MORE' : 'LEER MÁS')}
          </button>
        </div>

        <aside className="about-card" aria-label="Driver quick profile">
          <div className="about-card-image-wrap">
            <img
              src={aboutMe}
              alt="Victor Montanez karting"
              className="about-card-image"
            />
          </div>

          <div className="about-card-body">
            <h3 className="about-card-name">
              <span className="name-dark">VICTOR</span>
              <span className="name-red">MONTAÑEZ</span>
            </h3>
            <p className="about-card-meta">
              {language === 'EN' ? 'MEXICO • KARTING DRIVER' : 'MÉXICO • PILOTO DE KARTING'}
            </p>

            <div className="about-stats-grid">
              <div className="about-stat">
                <span className="stat-value">2</span>
                <span className="stat-label">{language === 'EN' ? 'YEARS RACING' : 'AÑOS DE CARRERAS'}</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">P6</span>
                <span className="stat-label">{language === 'EN' ? 'BEST FINISH' : 'MEJOR RESULTADO'}</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">14</span>
                <span className="stat-label">{language === 'EN' ? 'RACE WEEKENDS' : 'FIN DE SEMANAS DE CARRERA'}</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">4</span>
                <span className="stat-label">{language === 'EN' ? 'INTL. EVENTS' : 'EVENTOS INT.'}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

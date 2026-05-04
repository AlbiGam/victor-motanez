import { useLanguage } from '../context/LanguageContext';
import resultsImage from '../../public/images/results.jpg';
import './ResultsSection.css';

const resultsContent = {
  EN: {
    kicker: 'RACING CAREER',
    title: 'RESULTS',
    summary:
      'Key championship finishes from the 2025 season in X30 Senior.',
    groups: [
      {
        championship: 'KBR Rookie Championship 2025',
        category: 'X30 Senior',
        rounds: [
          'Round 2: P3',
          'Round 3: P4',
          'Round 4: P1',
        ],
      },
      {
        championship: 'Reto Telmex Championship 2025',
        category: 'X30 Senior',
        rounds: [
          'Round 1: Heat 1 P2, Heat 2 P3, Final DNF',
          'Round 2: Heat 1 P1, Heat 2 P1, Final P1',
          'Round 3: Heat 1 P3, Heat 2 P2, Final P5',
          'Round 4: Heat 1 P6, Heat 2 P3, Final P4',
          'Round 5: Heat 1 P6, Heat 2 P9, Final P6',
        ],
      },
      {
        championship: 'IAME Series Mexico 2025',
        category: 'X30 Senior',
        rounds: [
          'Heat 1: P8',
          'Heat 2: P9',
          'Heat 3: P19',
        ],
      },
    ],
  },
  ES: {
    kicker: 'TRAYECTORIA',
    title: 'RESULTADOS',
    summary:
      'Resultados clave de la temporada 2025 en la categoría X30 Senior.',
    groups: [
      {
        championship: 'KBR Rookie Championship 2025',
        category: 'X30 Senior',
        rounds: [
          'Round 2: P3',
          'Round 3: P4',
          'Round 4: P1',
        ],
      },
      {
        championship: 'Reto Telmex Championship 2025',
        category: 'X30 Senior',
        rounds: [
          'Round 1: Heat 1 P2, Heat 2 P3, Final DNF',
          'Round 2: Heat 1 P1, Heat 2 P1, Final P1',
          'Round 3: Heat 1 P3, Heat 2 P2, Final P5',
          'Round 4: Heat 1 P6, Heat 2 P3, Final P4',
          'Round 5: Heat 1 P6, Heat 2 P9, Final P6',
        ],
      },
      {
        championship: 'IAME Series Mexico 2025',
        category: 'X30 Senior',
        rounds: [
          'Heat 1: P8',
          'Heat 2: P9',
          'Heat 3: P19',
        ],
      },
    ],
  },
};

export default function ResultsSection() {
  const { language } = useLanguage();
  const content = resultsContent[language];

  return (
    <section id="results" className="results-section" aria-labelledby="results-title">
      <div className="results-inner">
        <header className="results-header">
          <p className="results-kicker">{content.kicker}</p>
          <h2 id="results-title" className="results-title">{content.title}</h2>
          <p className="results-summary">{content.summary}</p>
        </header>

        <div className="results-layout">
          <article className="results-image-card" aria-label={language === 'EN' ? 'Victor racing results visual' : 'Imagen de resultados de Victor'}>
            <img
              src={resultsImage}
              alt={language === 'EN' ? 'Victor racing in competition' : 'Victor compitiendo en pista'}
              className="results-image"
            />
          </article>

          <div className="results-groups">
            {content.groups.map((group) => (
              <article className="results-card" key={group.championship}>
                <div className="results-card-header">
                  <h3>{group.championship}</h3>
                  <p>{group.category}</p>
                </div>

                <ul className="results-list">
                  {group.rounds.map((round) => (
                    <li key={round}>{round}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
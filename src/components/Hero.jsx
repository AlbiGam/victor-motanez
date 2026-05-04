import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Hero.css';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      {/* Left: Photo */}
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src="/images/main_picture.jpg"
          alt="Victor Alvarez racing"
        />
        <div className="hero-image-fade" />
      </div>

      {/* Right: Content */}
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="hero-name-dark">VICTOR</span>
          <span className="hero-name-red">MONTAÑEZ</span>
        </h1>

        <p className="hero-tagline">{t.hero.tagline}</p>

        <a href="#about" className="hero-btn">{t.hero.learnMore}</a>
      </div>

      {/* Scroll dots */}
      <div className="hero-dots">
        <span className="dot dot-active" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
}

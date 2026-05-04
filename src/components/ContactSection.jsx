import { useLanguage } from '../context/LanguageContext';
import './ContactSection.css';

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="contact-kicker">
            {language === 'EN' ? 'GET IN TOUCH' : 'PONTE EN CONTACTO'}
          </p>
          <h2 id="contact-title" className="contact-title">
            {language === 'EN' ? 'CONTACT' : 'CONTACTO'}
          </h2>
          <p className="contact-intro">
            {language === 'EN' ? (
              'For collaborations, sponsorship opportunities, and media requests, feel free to reach out directly.'
            ) : (
              'Para colaboraciones, oportunidades de patrocinio y solicitudes de medios, siéntete libre de comunicarte directamente.'
            )}
          </p>

          <div className="contact-cards" aria-label={language === 'EN' ? 'Contact details' : 'Detalles de contacto'}>
            <article className="contact-card">
              <p className="contact-label">{language === 'EN' ? 'EMAIL' : 'CORREO'}</p>
              <a href="mailto:vicmontanez@hotmail.com" className="contact-value">
                vicmontanez@hotmail.com
              </a>
            </article>

            <article className="contact-card">
              <p className="contact-label">{language === 'EN' ? 'PHONE' : 'TELÉFONO'}</p>
              <a href="tel:+525543376880" className="contact-value">
                +52 55 4337 6880
              </a>
            </article>
          </div>
        </div>

        <article className="contact-image-card" aria-label={language === 'EN' ? 'Victor contact visual' : 'Visual de contacto de Víctor'}>
          <img
            src="/images/contact.jpg"
            alt={language === 'EN' ? 'Victor in racing gear' : 'Víctor en equipo de carreras'}
            className="contact-image"
          />
        </article>
      </div>
    </section>
  );
}

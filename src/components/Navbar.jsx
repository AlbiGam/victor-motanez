import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <img className="brand-logo" src="/images/logo.png" alt="Victor Montañez logo" />
            <div className="brand-socials">
              <a href="https://www.instagram.com/vic.mntnz27?igsh=aWVoanV3OXRleGYz&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <ul className="navbar-links">
            <li><a href="#about" className="nav-link active">{t.navbar.about}</a></li>
            <li><a href="#partners" className="nav-link">{t.navbar.partners}</a></li>
            <li><a href="#calendar" className="nav-link">{t.navbar.calendar}</a></li>
            <li><a href="#contact" className="nav-link">{t.navbar.contact}</a></li>
          </ul>

          <div className="navbar-lang">
            <button className="lang-btn" onClick={toggleLanguage}>
              {language}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
      
      <aside className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="#about" className="sidebar-link" onClick={closeMenu}>{t.navbar.about}</a></li>
          <li><a href="#partners" className="sidebar-link" onClick={closeMenu}>{t.navbar.partners}</a></li>
          <li><a href="#calendar" className="sidebar-link" onClick={closeMenu}>{t.navbar.calendar}</a></li>
          <li><a href="#contact" className="sidebar-link" onClick={closeMenu}>{t.navbar.contact}</a></li>
        </ul>
      </aside>
    </>
  );
}

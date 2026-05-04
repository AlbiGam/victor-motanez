import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import ResultsSection from './components/ResultsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PartnersSection />
        <ResultsSection />
        <ContactSection />
      </main>
    </LanguageProvider>
  );
}

export default App

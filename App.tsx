
import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import References from './components/References.tsx';
import Services from './components/Services.tsx';
import Studio from './components/Studio.tsx';
import Packages from './components/Packages.tsx';
import Portfolio from './components/Portfolio.tsx';
import Engineering from './components/Engineering.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function AppContent() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative antialiased selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <References />
        <Services />
        <Studio />
        <Packages />
        <Portfolio />
        <Engineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;


import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import References from './components/References';
import Services from './components/Services';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Engineering from './components/Engineering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
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
        <Packages />
        <Portfolio />
        <Engineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

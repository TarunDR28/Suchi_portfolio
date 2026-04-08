import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px', textAlign: 'center', color: 'var(--text-muted)',
        borderTop: '1px solid var(--glass-border)', background: 'rgba(20, 20, 20, 0.7)'
      }}>
        <p style={{ margin: 0, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          Made with ❤️ using React
        </p>
        <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>
          Senior Analyst | BCA Student
        </p>
      </footer>



      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed', bottom: '32px', left: '32px', zIndex: 9990,
              width: '50px', height: '50px', borderRadius: '50%',
              background: 'white', border: '1px solid rgba(79, 70, 229, 0.2)',
              color: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)', cursor: 'pointer'
            }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

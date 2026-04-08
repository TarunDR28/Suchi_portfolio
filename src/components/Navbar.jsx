import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Progress bar representing scroll depth
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ['home', ...navLinks.map(link => link.href.substring(1))];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top viewport
          if (rect.top <= 200) {
            current = section;
          }
        }
      }

      if (window.scrollY < 100) {
        current = 'home';
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '16px 24px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled ? 'rgba(9, 9, 11, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        boxShadow: isScrolled ? 'var(--glass-shadow)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            Suchithra<span className="text-gradient">.</span>
          </a>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '32px' }} className="nav-desktop">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a key={link.name} href={link.href} style={{
                  position: 'relative', textDecoration: 'none',
                  color: isActive ? 'var(--primary)' : 'var(--text-main)',
                  fontWeight: 600, transition: 'color 0.2s ease', padding: '4px 0'
                }}>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      style={{
                        position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px',
                        background: 'var(--primary)', borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div style={{ display: 'none', cursor: 'pointer', color: 'var(--text-main)' }} className="nav-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Scroll Progress Bar entirely inside Navbar bottom edge */}
        <motion.div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
            transformOrigin: '0%', scaleX
          }}
        />

        <style>{`
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-toggle { display: block !important; }
          }
        `}</style>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed', top: '70px', left: '24px', right: '24px',
            padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 999,
          }}
          className="glass-panel"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} style={{
                textDecoration: 'none', color: isActive ? 'var(--primary)' : 'var(--text-main)',
                fontWeight: 600, fontSize: '1.2rem', padding: '8px 0', borderBottom: '1px solid var(--glass-border)'
              }}>
                {link.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;

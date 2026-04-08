import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '120px 24px 60px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            Hi, I'm <span className="text-gradient">Suchithra SH</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: 500 }}>
            Senior Analyst at HCL Tech | BCA Student
          </h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
            "Driven professional blending technical skills with analytical expertise"
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ 
            display: 'flex', 
            gap: '24px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 500 }}>
            <div style={{ padding: '8px', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
              <MapPin size={20} />
            </div>
            Bangalore, Karnataka
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 500 }}>
            <div style={{ padding: '8px', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '50%', color: 'var(--secondary)' }}>
              <Phone size={20} />
            </div>
            +91 7899884860
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 500 }}>
            <div style={{ padding: '8px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
              <Mail size={20} />
            </div>
            suchisuchithrash@gmail.com
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
        >
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">
              Contact Me <ArrowRight size={18} />
            </button>
          </a>
          <button className="btn-secondary">
            View Resume <FileText size={18} />
          </button>
        </motion.div>
      </div>

      {/* Decorative background blur elements */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%', width: '30vw', height: '30vw',
        background: 'rgba(79, 70, 229, 0.15)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%', width: '25vw', height: '25vw',
        background: 'rgba(147, 51, 234, 0.15)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }} />
    </section>
  );
};

export default Hero;

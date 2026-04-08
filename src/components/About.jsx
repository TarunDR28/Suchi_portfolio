import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              width: '180px', height: '180px', margin: '0 auto 24px',
              borderRadius: '50%', overflow: 'hidden',
              border: '3px solid var(--primary)',
              boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)'
            }}>
              <img
                src="/profile.jpeg"
                alt="Suchithra SH"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 65%',
                  transform: 'scale(1.2)'
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Suchithra SH</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '24px' }}>Senior Analyst at HCL Tech</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <Briefcase size={24} style={{ color: 'var(--primary)', margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>2+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Years Exp.</div>
              </div>
              <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <GraduationCap size={24} style={{ color: 'var(--secondary)', margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>BCA</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pursuing</div>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              Career Objective
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
              "Dedicated and results-driven professional currently pursuing a Bachelor of Computer Applications (BCA), with a strong academic record and over two years of progressive professional experience. Currently serving as a Senior Analyst following an internal promotion to the L2 team, demonstrating proven capabilities in technical support and problem-solving. Seeking to further enhance technical and analytical expertise while contributing effectively to organizational success and innovation."
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

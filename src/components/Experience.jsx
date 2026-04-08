import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, TrendingUp, CheckCircle2, Calendar } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Handling technical issues and providing enterprise solutions",
    "Supporting enterprise tools strictly adhering to SLAs",
    "Managing IT systems and resolving access management tickets",
    "Streamlining operational workflow within the L2 team"
  ];

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">
        Work <span className="text-gradient">Experience</span>
      </h2>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(0,0,0,0) 60%)',
          filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none'
        }} />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '0', display: 'flex', flexDirection: 'column', zIndex: 1, border: '1px solid var(--glass-border)' }}
        >
          {/* Header Area */}
          <div style={{ 
            padding: '40px 40px 32px', 
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-start',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
          }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)', flexShrink: 0
              }}>
                <BriefcaseBusiness size={32} />
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '2px', color: '#fff' }}>Senior Analyst</h3>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '12px', fontWeight: 500 }}>HCL Tech</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ 
                    display: 'flex', alignItems: 'center', gap: '6px', 
                    color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem'
                  }}>
                    <TrendingUp size={16} /> L2 Team
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <span style={{ 
                    display: 'flex', alignItems: 'center', gap: '6px', 
                    color: 'var(--text-muted)', fontSize: '0.95rem'
                  }}>
                    <Calendar size={16} /> 2+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div style={{ padding: '32px 40px 40px' }}>
            
            {/* L2 Promotion Highlight Box */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              style={{ 
                background: 'rgba(245, 158, 11, 0.04)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '12px', padding: '20px 24px',
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                marginBottom: '40px', position: 'relative', overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--primary)' }} />
              <TrendingUp size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '6px' }}>Internal Promotion Checkpoint</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Successfully promoted internally to the <strong style={{ color: 'var(--primary)', fontWeight: 600 }}>L2 Support Team</strong> due to consistent excellence in handling complex analytical tasks and exceeding operational goals.
                </p>
              </div>
            </motion.div>
            
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#fff' }}>Key Responsibilities</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {responsibilities.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  whileHover={{ y: -4, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(245, 158, 11, 0.3)' }}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '24px', borderRadius: '12px',
                    display: 'flex', alignItems: 'flex-start', gap: '16px',
                    transition: 'all 0.3s ease', cursor: 'default'
                  }}
                >
                  <CheckCircle2 size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

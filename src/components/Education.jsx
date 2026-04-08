import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Clock, Award } from 'lucide-react';

const Education = () => {
  const eduData = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Sastra University",
      year: "2024 – Present",
      details: "Current Semester: 4th | Last Semester CGPA: 9.0",
      icon: <BookOpen size={32} />
    },
    {
      title: "12th Standard (Science)",
      institution: "Govt PU College Nyamthi, Davangare",
      year: "2022",
      details: "Percentage: 79.66%",
      icon: <School size={24} />
    },
    {
      title: "10th Standard",
      institution: "Govt Girls High School Nyamthi, Davangare",
      year: "2020",
      details: "Percentage: 80.64%",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">
        Educational <span className="text-gradient">Journey</span>
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* Full Width Hero Card: Current Degree */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{
            padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px',
            borderTop: '2px solid var(--primary)', position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Subtle background glow icon */}
          <GraduationCap size={200} style={{
            position: 'absolute', right: '-40px', bottom: '-40px',
            color: 'var(--primary)', opacity: 0.05, transform: 'rotate(-15deg)', pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)'
            }}>
              {eduData[0].icon}
            </div>

            <div style={{ zIndex: 1, flex: 1 }}>
              <div style={{
                display: 'inline-block', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--primary)',
                padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}>
                Current Pursuing
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '8px', color: '#fff', lineHeight: 1.2 }}>
                {eduData[0].title}
              </h3>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '16px', fontWeight: 500 }}>
                {eduData[0].institution}
              </h4>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <Clock size={16} /> {eduData[0].year}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 500 }}>
                  <Award size={16} /> {eduData[0].details}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Grid for Earlier Education */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

          {eduData.slice(1).map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
              className="glass-panel"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {edu.icon}
                </div>
                <span style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {edu.year}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '6px', color: '#fff' }}>{edu.title}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>{edu.details}</p>
                <p style={{ color: 'var(--text-main)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <School size={16} className="text-muted" /> {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;

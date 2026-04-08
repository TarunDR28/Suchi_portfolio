import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Calendar } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: "ITIL® 4 Foundation: Service Management Practices (Part 2)",
      issuer: "HCLTech",
      duration: "55 m",
      date: "January 30, 2026",
      image: "/cert1.jpeg"
    },
    {
      title: "Generative AI on AWS: Getting Started",
      issuer: "AWS / HCLTech",
      duration: "1 hr 10 m",
      date: "February 24, 2026",
      image: "/cert2.jpeg"
    },
    {
      title: "Azure AI Fundamentals: Azure Machine Learning Fundamentals",
      issuer: "Microsoft Azure / HCLTech",
      duration: "1 hr 6 m",
      date: "February 24, 2026",
      image: "/cert3.jpeg"
    },
    {
      title: "Generative AI on GCP: An Introduction",
      issuer: "Google Cloud / HCLTech",
      duration: "1 hr 56 m",
      date: "February 24, 2026",
      image: "/cert4.jpeg"
    }
  ];

  return (
    <section id="certificates" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">
        Professional <span className="text-gradient">Certifications</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="glass-panel"
            style={{ padding: 0, display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
          >
            {/* Image display with fallback */}
            <div style={{ height: '220px', width: '100%', background: 'rgba(255,255,255,0.02)', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
               <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
                 onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
               />
               <div style={{ display: 'none', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexDirection: 'column', gap: '12px', textAlign: 'center', padding: '20px' }}>
                  <Award size={48} opacity={0.3} />
                  <span style={{ fontSize: '0.85rem' }}>Image missing! Please add <strong>{cert.image}</strong> into the public folder.</span>
               </div>
            </div>
            
            {/* Certificate Meta Details */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>{cert.title}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>{cert.issuer}</p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Calendar size={14} /> {cert.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

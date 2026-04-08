import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    { title: "Enterprise Tools Integration", category: "IT Management", status: "Coming Soon" },
    { title: "ServiceNow Automation", category: "Workflow", status: "Coming Soon" },
    { title: "Active Directory Dashboard", category: "System Administration", status: "Coming Soon" },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        Selected <span className="text-gradient">Projects</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel"
            style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ 
              background: 'rgba(79, 70, 229, 0.05)', height: '160px', borderRadius: '12px', 
              marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px dashed var(--glass-border)'
            }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.875rem' }}>Image Placeholder</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{project.title}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem', marginBottom: '16px' }}>{project.category}</p>
            
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ 
                background: 'var(--background)', padding: '4px 12px', 
                borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' 
              }}>
                {project.status}
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ color: 'var(--text-main)' }}><Code size={20} /></a>
                <a href="#" style={{ color: 'var(--text-main)' }}><ExternalLink size={20} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

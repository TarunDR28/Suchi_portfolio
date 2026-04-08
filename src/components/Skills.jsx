import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Cpu, Zap, Cloud, Mail, Server, Network, Layers, Key, Box, Wind } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Active Directory", icon: <Network size={18} /> },
    { name: "Basic Azure", icon: <Cloud size={18} /> },
    { name: "Microsoft Exchange", icon: <Mail size={18} /> },
    { name: "ServiceNow", icon: <Layers size={18} /> },
    { name: "Mainframe Admin", icon: <Server size={18} /> },
    { name: "SailPoint", icon: <Key size={18} /> },
    { name: "Asset Insight", icon: <Box size={18} /> },
    { name: "Vayu", icon: <Wind size={18} /> }
  ];

  const coreSkills = [
    { name: "Communication", icon: <Star size={18} /> },
    { name: "Teamwork", icon: <Shield size={18} /> },
    { name: "MS Office", icon: <Cpu size={18} /> },
    { name: "Computer Knowledge", icon: <Zap size={18} /> }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      
      <h2 className="section-title">
        Professional <span className="text-gradient">Skills</span>
      </h2>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Technical Skills Ribbon */}
        <div>
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '32px', color: '#fff', fontWeight: 600 }}>Technical Skills</h3>
          <div style={{ 
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' 
          }}>
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.02) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  padding: '12px 24px', borderRadius: '9999px',
                  display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)',
                  boxShadow: '0 4px 20px rgba(245, 158, 11, 0.05)', fontWeight: 600, cursor: 'default'
                }}
              >
                <div style={{ color: 'var(--primary)', display: 'flex' }}>{skill.icon}</div>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Competencies Ribbon */}
        <div>
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '32px', color: '#fff', fontWeight: 600 }}>Core Competencies</h3>
          <div style={{ 
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' 
          }}>
            {coreSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.02) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  padding: '12px 24px', borderRadius: '9999px',
                  display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)',
                  boxShadow: '0 4px 20px rgba(245, 158, 11, 0.05)', fontWeight: 600, cursor: 'default'
                }}
              >
                <div style={{ color: 'var(--primary)', display: 'flex' }}>{skill.icon}</div>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

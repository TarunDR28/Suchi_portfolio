import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Let's Connect</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.6 }}>
            I am always open to connecting with fellow professionals and discussing tech. Feel free to reach out!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>Phone</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>+91 7899884860</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '50%', color: 'var(--secondary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>Email</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>suchisuchithrash@gmail.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>Location</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>Bangalore, Karnataka</p>
              </div>
            </div>
          </div>
          
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Download size={18} /> Download Resume
          </button>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel" 
          style={{ padding: '40px' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.875rem' }}>Your Name</label>
              <input type="text" placeholder="John Doe" style={{
                width: '100%', padding: '14px', borderRadius: '8px', 
                border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s'
              }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.875rem' }}>Your Email</label>
              <input type="email" placeholder="john@example.com" style={{
                width: '100%', padding: '14px', borderRadius: '8px', 
                border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s'
              }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.875rem' }}>Message</label>
              <textarea placeholder="Write your message here..." rows="4" style={{
                width: '100%', padding: '14px', borderRadius: '8px', 
                border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'inherit', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s'
              }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
            </div>
            
            <button className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am An AI assistant. Feel free to ask me questions about Suchithra.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedQA = [
    { q: "Who is Suchithra?", a: "A Senior Analyst with 2 years experience and BCA student." },
    { q: "What skills does she have?", a: "Active Directory, Azure, ServiceNow, Exchange, and more." },
    { q: "What is her experience?", a: "2 years experience with L2 team promotion." },
    { q: "How to contact?", a: "Phone: +91 7899884860 or Email: suchisuchithrash@gmail.com" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = (qa) => {
    setMessages(prev => [...prev, { sender: 'user', text: qa.q }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: qa.a }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{
              width: '320px', height: '450px', marginBottom: '16px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)', overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                <MessageSquare size={20} /> AI Assistant
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? 'var(--primary)' : 'rgba(40, 40, 40, 0.8)',
                  color: msg.sender === 'user' ? '#000000' : 'var(--text-main)',
                  padding: '10px 14px', borderRadius: '12px',
                  borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '12px',
                  maxWidth: '85%', fontSize: '0.9rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  border: msg.sender === 'bot' ? '1px solid var(--glass-border)' : 'none'
                }}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div style={{
                  alignSelf: 'flex-start', backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  padding: '10px 14px', borderRadius: '12px', borderBottomLeftRadius: '2px',
                  fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '4px', alignItems: 'center',
                  border: '1px solid var(--glass-border)'
                }}>
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></motion.div>
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></motion.div>
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions Options */}
            <div style={{ padding: '12px', borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.4)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>Ask a question:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', maxHeight: '100px' }}>
                {predefinedQA.map((qa, i) => (
                  <button key={i} onClick={() => handleAsk(qa)} style={{
                    textAlign: 'left', padding: '8px 12px', background: 'white', border: '1px solid var(--primary)',
                    borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-main)', cursor: 'pointer',
                    transition: 'all 0.2s'
                  }} onMouseOver={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white'; }}
                    onMouseOut={(e) => { e.target.style.background = 'white'; e.target.style.color = 'var(--text-main)'; }}>
                    {qa.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 14px rgba(147, 51, 234, 0.4)', cursor: 'pointer', zIndex: 10000,
          position: 'relative'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span style={{
            position: 'absolute', top: 0, right: 0, width: '14px', height: '14px',
            background: '#ef4444', border: '2px solid white', borderRadius: '50%'
          }}></span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;

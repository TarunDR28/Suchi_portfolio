import React from 'react';

const BackgroundEffects = () => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      pointerEvents: 'none', zIndex: -2, overflow: 'hidden'
    }}>
      {/* Light Beams */}
      <div className="light-beam beam-1" />
      <div className="light-beam beam-2" />
      <div className="light-beam beam-3" />
    </div>
  );
};

export default BackgroundEffects;

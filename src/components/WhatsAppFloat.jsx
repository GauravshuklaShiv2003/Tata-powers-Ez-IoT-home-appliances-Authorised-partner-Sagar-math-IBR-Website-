import React from 'react';
import './WhatsAppFloat.css'; // Apni CSS file import karein

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/919999999999" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="wa-float"
    >
      💬
      <span className="wa-tooltip">Chat with us!</span>
    </a>
  );
};

export default WhatsAppFloat;
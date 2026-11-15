import React, { useState, useEffect } from 'react';
import './LogoLoader.css';
import logoMark from '../assets/logo-mark.png';

export default function LogoLoader({ onFinished }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        if (onFinished) onFinished();
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`logo-loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo-wrap">
          <img src={logoMark} alt="SagarMatha IBR" className="loader-logo-img" />
          <div className="loader-ring"></div>
        </div>
        <h2 className="loader-title">SagarMatha IBR</h2>
        <p className="loader-subtitle">Tata Power EZ Home Partner</p>
      </div>
    </div>
  );
}

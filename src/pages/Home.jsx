import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import './Home.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (productName = 'General Smart Home Assessment') => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span> SEAMLESS CONTROL
          </div>
          <h1 className="hero-title">
            <span className="text-white">One App.</span><br />
            <span className="text-blue">Total Control.</span><br />
            <span className="text-green">Anywhere.</span>
          </h1>
          <p className="hero-subtitle">
            Control every appliance, monitor energy, schedule automations — all from your smartphone.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => openModal('Free Home Assessment')}>
              Book Free Assessment
            </button>
            <a href="/solutions" className="btn-secondary">Explore Solutions</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-card" onClick={() => openModal('Smart Lights')}>
              <div className="card-icon">💡</div>
              <div className="card-info">
                <h4>Smart Lights</h4>
                <p>Living Room • Active</p>
              </div>
              <span className="status-dot green"></span>
            </div>
            <div className="hero-card" onClick={() => openModal('AC Automation')}>
              <div className="card-icon">❄️</div>
              <div className="card-info">
                <h4>AC Automation</h4>
                <p>Bedroom • 24°C</p>
              </div>
              <span className="status-dot green"></span>
            </div>
            <div className="hero-card" onClick={() => openModal('Energy Monitor')}>
              <div className="card-icon">⚡</div>
              <div className="card-info">
                <h4>Energy Monitor</h4>
                <p>2.35 kWh saved today</p>
              </div>
              <span className="status-dot green"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Products CTA Section */}
      <section className="home-cta-section">
        <div className="cta-box">
          <h2>Ready to upgrade your home?</h2>
          <p>Get a customized smart automation plan tailored to your lifestyle and budget.</p>
          <button className="btn-primary" onClick={() => openModal('Custom Smart Home Package')}>
            Book Free Assessment
          </button>
        </div>
      </section>

      <EnquiryModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
}

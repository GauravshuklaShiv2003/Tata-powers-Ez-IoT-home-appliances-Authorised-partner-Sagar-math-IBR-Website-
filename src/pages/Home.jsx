import React, { useEffect, useRef, useState } from 'react';
import EnquiryModal from './EnquiryModal';
import { Link } from 'react-router-dom';
import './Home.css';
import heroVideo from '../assets/hero-video.mp4';

const trustItems = [
  { icon: '🏆', title: 'Authorized Partner', sub: 'Tata Power EZ Home' },
  { icon: '🛡️', title: '1-Year Warranty', sub: 'Official Tata warranty' },
  { icon: '🔧', title: 'Certified Installation', sub: 'Trained technicians' },
  { icon: '📍', title: 'Local NCR Support', sub: 'Greater Noida & NCR' },
];

const ezProducts = [
  { icon: '🔌', name: 'Smart Converter', desc: 'Make any appliance smart' },
  { icon: '🔋', name: 'Smart Plug 16A', desc: 'High-load smart switching' },
  { icon: '📡', name: 'IR Blaster', desc: 'Control any IR device remotely' },
  { icon: '⚡', name: 'Energy Manager', desc: 'Real-time consumption tracking' },
  { icon: '🔘', name: 'Smart Switch', desc: 'Replace existing switches easily' },
];

const howSteps = [
  { icon: '📞', title: 'Book a Free Assessment', desc: 'Share your address and a convenient time slot.' },
  { icon: '🔍', title: 'Site Visit & Plan', desc: 'Our expert recommends the right products for your home.' },
  { icon: '🔧', title: 'Professional Installation', desc: 'Certified technicians install and configure everything.' },
  { icon: '🎧', title: 'After-Sales Support', desc: 'App setup and troubleshooting, whenever you need us.' },
];

const areas = ['Greater Noida', 'Noida', 'Noida Extension', 'Gaur City', 'Ghaziabad', 'NCR Region'];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  // Respect users who prefer reduced motion: don't autoplay the hero video
  useEffect(() => {
    const v = videoRef.current;
    if (v && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
    }
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

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
            <Link to="/solutions" className="btn-secondary">Explore Solutions</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-video-wrap">
            <video
              ref={videoRef}
              className="hero-video"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <button
              type="button"
              className="hero-video-sound"
              onClick={toggleSound}
              aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
            >
              {muted ? '🔇 Sound on' : '🔊 Sound off'}
            </button>
          </div>
          <div className="hero-card-stack">
            <div className="hero-card" onClick={() => openModal('Smart Lights')}>
              <div className="card-icon">💡</div>
              <div className="card-info">
                <h4>Smart Lights</h4>
                <p>Living Room • Active</p>
              </div>
              <span className="status-dot green"></span>
            </div>
            <div className="hero-card" onClick={() => openModal('Geyser Automation')}>
              <div className="card-icon">🚿</div>
              <div className="card-info">
                <h4>Geyser Automation</h4>
                <p>Bathroom • 45°C Ready</p>
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

      {/* Client Benefits Section */}
      <section className="client-benefits-section">
        <div className="benefits-header">
          <h2>Why Greater Noida Homeowners Choose Us</h2>
          <p>Certified smart automation and energy-efficient lighting solutions tailored for modern living.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card" onClick={() => openModal('Tata Power EZ Home Consultation')}>
            <div className="benefit-icon">🛡️</div>
            <h3>Authorized Partner</h3>
            <p>Official channel partner for Tata Power EZ Home automation systems with genuine warranty.</p>
          </div>
          <div className="benefit-card" onClick={() => openModal('Energy Audit Assessment')}>
            <div className="benefit-icon">📉</div>
            <h3>Up to 30% Energy Savings</h3>
            <p>Smart scheduling and real-time power monitoring to drastically reduce your monthly electricity bills.</p>
          </div>
          <div className="benefit-card" onClick={() => openModal('Professional Installation Support')}>
            <div className="benefit-icon">🔧</div>
            <h3>Expert Installation & Support</h3>
            <p>Seamless retrofitting with zero messy rewiring, backed by dedicated local NCR technical support.</p>
          </div>
        </div>
      </section>

      {/* NEW: Featured Smart Solutions Showcase */}
      <section className="featured-solutions-section">
        <div className="section-header">
          <h2>Explore Popular Smart Solutions</h2>
          <p>Transform every corner of your home with integrated IoT automation and energy management.</p>
        </div>
        <div className="solutions-grid">
          <div className="solution-item" onClick={() => openModal('Smart Lighting & LED')}>
            <div className="sol-icon">💡</div>
            <h3>Smart Lighting & LEDs</h3>
            <p>Custom ambient lighting, dimming schedules, and voice-controlled LED panels.</p>
            <span className="sol-link">Enquire Now →</span>
          </div>
          <div className="solution-item" onClick={() => openModal('Home Appliance Automation')}>
            <div className="sol-icon">🌡️</div>
            <h3>Appliance Automation</h3>
            <p>Smart geysers, AC controllers, and heavy appliance scheduling from anywhere.</p>
            <span className="sol-link">Enquire Now →</span>
          </div>
          <div className="solution-item" onClick={() => openModal('Smart Security & Locks')}>
            <div className="sol-icon">🔒</div>
            <h3>Security & Smart Locks</h3>
            <p>Biometric door locks, video door phones, and real-time intrusion alerts.</p>
            <span className="sol-link">Enquire Now →</span>
          </div>
          <div className="solution-item" onClick={() => openModal('Energy Monitoring System')}>
            <div className="sol-icon">⚡</div>
            <h3>Energy Monitoring</h3>
            <p>Real-time kWh tracking and automated power optimization for lower electricity bills.</p>
            <span className="sol-link">Enquire Now →</span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="hm-trust">
        {trustItems.map((t, i) => (
          <div key={i} className="hm-trust-item">
            <span className="hm-trust-icon">{t.icon}</span>
            <div>
              <div className="hm-trust-title">{t.title}</div>
              <div className="hm-trust-sub">{t.sub}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Tata Power EZ Home devices */}
      <section className="hm-section">
        <div className="hm-head">
          <span className="hm-label">Our Smart Products</span>
          <h2>The <span>Tata Power EZ Home</span> Ecosystem</h2>
          <p>Certified, plug-and-play IoT devices. Fully compatible. Made in India.</p>
        </div>
        <div className="hm-products">
          {ezProducts.map((p, i) => (
            <button key={i} type="button" className="hm-product" onClick={() => openModal(p.name)}>
              <span className="hm-product-icon">{p.icon}</span>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
              <span className="hm-product-link">Enquire Now →</span>
            </button>
          ))}
        </div>
        <div className="hm-center">
          <Link to="/products" className="btn-secondary">View All Products</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="hm-section hm-alt">
        <div className="hm-head">
          <span className="hm-label">How It Works</span>
          <h2>From Enquiry to <span>Installation</span></h2>
          <p>Four simple steps to a smarter home.</p>
        </div>
        <div className="hm-steps">
          {howSteps.map((s, i) => (
            <div key={i} className="hm-step">
              <span className="hm-step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="hm-step-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section className="hm-section">
        <div className="hm-head">
          <span className="hm-label">Service Area</span>
          <h2>We Serve <span>Greater Noida & NCR</span></h2>
        </div>
        <div className="hm-areas">
          {areas.map((a, i) => <span key={i} className="hm-area">📍 {a}</span>)}
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

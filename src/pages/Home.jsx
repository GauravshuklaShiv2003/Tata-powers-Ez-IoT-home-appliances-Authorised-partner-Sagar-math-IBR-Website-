import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const WA_NUMBER = "919999999999";
const WA_MSG = encodeURIComponent("Hello SagarMatha IBR, I'm interested in your Smart Home & Lighting solutions.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const slides = [
  { tag: "Smart Home Automation", title: "Smarter Homes.", title2: "Lower Bills.", title3: "Complete Control.", desc: "SagarMatha IBR — Authorized Channel Partner of Tata Power EZ Home. Intelligent IoT solutions across Greater Noida & NCR.", bg: "linear-gradient(135deg, #060d1a 0%, #0d2a4a 60%, #060d1a 100%)" },
  { tag: "Industrial Lighting", title: "Powerful Light.", title2: "Maximum Efficiency.", title3: "Every Space.", desc: "Premium LED lighting solutions for homes, offices, warehouses and industrial setups.", bg: "linear-gradient(135deg, #060d1a 0%, #0d2a1a 60%, #060d1a 100%)" },
  { tag: "Seamless Control", title: "One App.", title2: "Total Control.", title3: "Anywhere.", desc: "Control every appliance, monitor energy, schedule automations — all from your smartphone.", bg: "linear-gradient(135deg, #060d1a 0%, #1a0d2a 60%, #060d1a 100%)" },
  { tag: "Tata Trusted", title: "Trusted Brand.", title2: "Local Expertise.", title3: "Real Results.", desc: "Backed by Tata Power's quality and warranty — installed by local certified experts in NCR.", bg: "linear-gradient(135deg, #060d1a 0%, #1a1a0d 60%, #060d1a 100%)" },
];

const solutions = [
  { icon: "💡", title: "Smart Lighting", desc: "Control lights from anywhere using your phone or voice commands." },
  { icon: "❄️", title: "AC Automation", desc: "Schedule and remotely control your AC. Save energy automatically." },
  { icon: "🚿", title: "Smart Geyser", desc: "Auto-schedule hot water exactly when needed. Zero wastage." },
  { icon: "📊", title: "Energy Management", desc: "Real-time monitoring of consumption. Identify and cut costs." },
  { icon: "🛡️", title: "Security Automation", desc: "Smart sensors and safety alerts — stay informed always." },
  { icon: "🎙️", title: "Voice Control", desc: "Works with Amazon Alexa and Google Assistant seamlessly." },
];

const products = [
  { icon: "🔌", name: "Smart Converter", desc: "Convert any appliance to smart" },
  { icon: "🔋", name: "Smart Plug 16A", desc: "High-load smart switching" },
  { icon: "📡", name: "IR Blaster", desc: "Control any IR device remotely" },
  { icon: "⚡", name: "Energy Manager", desc: "Real-time consumption tracking" },
  { icon: "🔘", name: "Smart Switch", desc: "Replace existing switches easily" },
];

const reviews = [
  { name: "Rahul Sharma", loc: "Sector 50, Greater Noida", rating: 5, text: "Brilliant service! SagarMatha IBR installed the complete Tata EZ Home setup. Energy bills down by 28% in the first month itself." },
  { name: "Priya Gupta", loc: "Knowledge Park, Noida", rating: 5, text: "Got industrial LED lighting for our warehouse. Excellent products and very professional installation. Will order more." },
  { name: "Amit Kumar", loc: "Gaur City, Greater Noida West", rating: 5, text: "Tata brand ke saath SagarMatha ka local support — best combination. Smart switches, AC automation, geyser control — all perfect!" },
  { name: "Sunita Mehta", loc: "Noida Extension", rating: 4, text: "Very smooth experience from consultation to installation. The free assessment visit was very helpful." },
  { name: "Vijay Jaiswal", loc: "Industrial Area, Greater Noida", rating: 5, text: "Needed flood lights for my factory. Got bulk LED at great prices. After-sales support is also very responsive." },
  { name: "Neha Kapoor", loc: "Pari Chowk, Greater Noida", rating: 5, text: "Being an authorized Tata Power EZ Home partner gives so much confidence. Always just a WhatsApp away!" },
];

function StarRating({ count }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('reviews');
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const addRef = (id) => (el) => { sectionRefs.current[id] = el; };

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero-section">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bg }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-badge">{slide.tag}</div>
              <h1 className="hero-title">
                {slide.title}<br />
                <span className="blue">{slide.title2}</span><br />
                <span className="green">{slide.title3}</span>
              </h1>
              <p className="hero-desc">{slide.desc}</p>
              <div className="hero-ctas">
                <a href={WA_LINK} className="btn-primary" target="_blank" rel="noreferrer">
                  📋 Book Free Assessment
                </a>
                <Link to="/solutions" className="btn-outline">Explore Solutions</Link>
              </div>
            </div>

            {/* Floating device cards */}
            <div className="hero-cards">
              <div className="device-card">
                <span className="device-icon">💡</span>
                <div><div className="device-name">Smart Lights</div><div className="device-status">Living Room • Active</div></div>
                <div className="device-dot" />
              </div>
              <div className="device-card">
                <span className="device-icon">❄️</span>
                <div><div className="device-name">AC Automation</div><div className="device-status">Bedroom • 24°C</div></div>
                <div className="device-dot" />
              </div>
              <div className="device-card">
                <span className="device-icon">⚡</span>
                <div><div className="device-name">Energy Monitor</div><div className="device-status">2.35 kWh saved today</div></div>
                <div className="device-dot" />
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        {[
          { icon: "🏆", title: "Authorized Partner", sub: "Official Tata Power EZ Home Channel Partner" },
          { icon: "🔧", title: "Expert Installation", sub: "Professional setup & configuration" },
          { icon: "🎧", title: "After-Sales Support", sub: "Dedicated support team, always available" },
          { icon: "🏠", title: "End-to-End Solutions", sub: "Automation & lighting specialists" },
        ].map((item, i) => (
          <div key={i} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div>
              <div className="trust-title">{item.title}</div>
              <div className="trust-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── VERTICALS ── */}
      <section
        id="verticals"
        ref={addRef('verticals')}
        className={`verticals-section reveal ${visibleSections.verticals ? 'visible' : ''}`}
      >
        <div className="section-label">Our Core Domains</div>
        <h2 className="section-title">Two Verticals. <span>One Trusted Partner.</span></h2>
        <p className="section-desc">From intelligent home automation to premium lighting — we cover every aspect of smart, efficient living.</p>
        <div className="verticals-grid">
          <div className="vertical-card automation">
            <span className="vertical-icon">🏠</span>
            <span className="vertical-tag auto-tag">Smart Home Automation</span>
            <h3>Intelligent IoT Solutions</h3>
            <p>Transform your home with Tata Power EZ Home's cutting-edge IoT ecosystem. Control every appliance, automate your routine, slash energy bills.</p>
            <ul className="vertical-features">
              {["Smart Lighting — control from anywhere", "AC Automation — remote scheduling", "Smart Geyser — auto schedule", "Energy Monitoring — real-time data", "Voice Control — Alexa & Google", "Security Sensors — alerts"].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <a href={WA_LINK} className="btn-auto" target="_blank" rel="noreferrer">Automate My Home →</a>
          </div>
          <div className="vertical-card lighting">
            <span className="vertical-icon">💡</span>
            <span className="vertical-tag light-tag">Industrial & Residential Lighting</span>
            <h3>Premium Lighting Solutions</h3>
            <p>High-quality LED lighting for every space — from cozy homes to large-scale industrial setups. Energy-efficient and durable.</p>
            <ul className="vertical-features">
              {["LED Panels & Bulbs — residential", "Industrial High-Bay & Flood Lights", "Commercial & Office Lighting", "Street & Outdoor Lighting", "Energy-efficient, long-lasting", "B2B & B2C — bulk orders welcome"].map((f,i) => <li key={i}>{f}</li>)}
            </ul>
            <a href={WA_LINK} className="btn-light" target="_blank" rel="noreferrer">Get Lighting Quote →</a>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section
        id="solutions"
        ref={addRef('solutions')}
        className={`solutions-section reveal ${visibleSections.solutions ? 'visible' : ''}`}
      >
        <div className="section-label">Smart Solutions</div>
        <h2 className="section-title">Solutions <span className="green">for Every Home</span></h2>
        <p className="section-desc">Plug-and-play smart devices that work with your existing appliances. No rewiring. No hassle.</p>
        <div className="solutions-grid">
          {solutions.map((sol, i) => (
            <div key={i} className="solution-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="sol-icon">{sol.icon}</div>
              <h4>{sol.title}</h4>
              <p>{sol.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        id="products"
        ref={addRef('products')}
        className={`products-section reveal ${visibleSections.products ? 'visible' : ''}`}
      >
        <div className="section-label">Our Smart Products</div>
        <h2 className="section-title">The <span>Tata Power EZ Home</span> Ecosystem</h2>
        <p className="section-desc">Certified, plug-and-play IoT devices. Fully compatible. Made in India.</p>
        <div className="products-grid">
          {products.map((p, i) => (
            <a key={i} href={`${WA_LINK}&text=${encodeURIComponent(`Hi, I'm interested in ${p.name}`)}`} target="_blank" rel="noreferrer" className="product-card">
              <div className="product-icon">{p.icon}</div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
              <span className="enquire-btn">Enquire Now →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <div
        id="stats"
        ref={addRef('stats')}
        className={`stats-bar reveal ${visibleSections.stats ? 'visible' : ''}`}
      >
        <div className="stats-grid">
          {[
            { num: "500+", label: "Homes Automated" },
            { num: "30%", label: "Average Energy Savings" },
            { num: "24/7", label: "Customer Support" },
            { num: "1 Yr", label: "Tata Warranty" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-cta">
          <h3>Upgrade Your Home Today!</h3>
          <p>Book a free smart home assessment — completely free site visit.</p>
          <a href={WA_LINK} className="btn-white" target="_blank" rel="noreferrer">Book Free Smart Visit →</a>
        </div>
      </div>

      {/* ── GALLERY + REVIEWS ── */}
      <section
        id="gallery"
        ref={addRef('gallery')}
        className={`gallery-section reveal ${visibleSections.gallery ? 'visible' : ''}`}
      >
        <div className="section-label">Gallery & Reviews</div>
        <h2 className="section-title">Real Homes. <span>Real Results.</span></h2>
        <div className="gallery-tabs">
          <button className={activeTab === 'photos' ? 'tab active-tab' : 'tab'} onClick={() => setActiveTab('photos')}>📸 Project Photos</button>
          <button className={activeTab === 'reviews' ? 'tab active-tab' : 'tab'} onClick={() => setActiveTab('reviews')}>⭐ Customer Reviews</button>
        </div>

        {activeTab === 'photos' && (
          <div className="photo-grid">
            {["Smart Home Setup", "LED Panel Install", "AC Automation", "Switch Panel", "Industrial Lighting", "Energy Monitor"].map((label, i) => (
              <div key={i} className={`photo-card ${i === 0 ? 'tall' : ''}`}>
                <div className="photo-placeholder">
                  <span>{["🏠","💡","❄️","🔘","🏭","⚡"][i]}</span>
                  <p>{label}</p>
                </div>
                <div className="photo-overlay"><span>{label} — Greater Noida</span></div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <StarRating count={r.rating} />
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name.split(' ').map(n=>n[0]).join('')}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-loc">📍 {r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── WHY US ── */}
      <section
        id="whyus"
        ref={addRef('whyus')}
        className={`why-section reveal ${visibleSections.whyus ? 'visible' : ''}`}
      >
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">Why Homes Trust <span>SagarMatha IBR</span></h2>
        <div className="why-grid">
          {[
            { num: "01", title: "Tata Power EZ Home — Authorized Partner", desc: "Only authorized partners sell and install genuine Tata Power EZ Home products. Full warranty, official support." },
            { num: "02", title: "Local Presence, Faster Service", desc: "Based in Greater Noida — same-day site visits, quick installation. No waiting weeks for a technician." },
            { num: "03", title: "End-to-End — Assessment to After-Sales", desc: "We assess, recommend, install, and stay available for support. One team, zero hassle." },
            { num: "04", title: "Dual Expertise — Automation + Lighting", desc: "Smart home IoT + industrial/residential LED — one trusted partner for everything." },
          ].map((w, i) => (
            <div key={i} className="why-card">
              <div className="why-num">{w.num}</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <h2>Ready to Make Your Home Smarter?</h2>
        <p>Book a free smart home assessment. Expert visits your home, understands your needs, gives a customized plan — completely free.</p>
        <div className="cta-btns">
          <a href={WA_LINK} className="btn-whatsapp" target="_blank" rel="noreferrer">💬 WhatsApp Us Now</a>
          <Link to="/contact" className="btn-primary">📋 Book Free Assessment →</Link>
        </div>
      </div>

      {/* ── TATA STRIP ── */}
      <div className="brand-strip">
        <span className="strip-label">Authorized Channel Partner of</span>
        <div className="strip-items">
          {["Trusted Tata Power Brand", "Plug & Play Solutions", "Advanced IoT Technology", "Made in India Products", "Secure & Reliable Systems", "Official Warranty Support"].map((item, i) => (
            <span key={i} className="strip-item">{item}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
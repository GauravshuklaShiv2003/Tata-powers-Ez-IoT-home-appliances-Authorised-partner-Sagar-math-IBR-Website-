import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const WA_NUMBER = "919999999999"
const waLink = (product) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi SagarMatha IBR, I'm interested in ${product}. Please share details and pricing.`)}`

const tataProducts = [
  {
    icon: "🔌",
    name: "Smart Converter",
    category: "Tata Power EZ Home",
    desc: "Convert any existing appliance into a smart device instantly. Works with geysers, fans, and other high-load appliances.",
    specs: ["Load capacity: 16A", "Wi-Fi enabled", "App + voice control", "Energy monitoring"],
    compatible: ["Geyser", "Fan", "Water pump", "Any 16A appliance"],
    badge: "Most Popular"
  },
  {
    icon: "🔋",
    name: "Smart Plug 16A",
    category: "Tata Power EZ Home",
    desc: "High-load smart plug for ACs, geysers, and heavy appliances. Real-time energy monitoring built-in.",
    specs: ["16A rated", "Real-time energy tracking", "Schedule & timer", "Surge protection"],
    compatible: ["AC units", "Geyser", "Refrigerator", "High-load devices"],
    badge: "Best Seller"
  },
  {
    icon: "📡",
    name: "IR Blaster",
    category: "Tata Power EZ Home",
    desc: "Control any IR-based device remotely — AC, TV, set-top box. No new appliance needed.",
    specs: ["Universal IR support", "Works with all AC brands", "360° IR coverage", "App controlled"],
    compatible: ["All AC brands", "TV", "Set-top box", "Any IR device"],
    badge: null
  },
  {
    icon: "⚡",
    name: "Energy Manager",
    category: "Tata Power EZ Home",
    desc: "Real-time energy monitoring for your entire home. Identify wastage and reduce bills intelligently.",
    specs: ["Real-time kWh tracking", "Monthly reports", "Anomaly detection", "Multi-device support"],
    compatible: ["Whole home", "Individual appliances", "Solar setups"],
    badge: "Smart Choice"
  },
  {
    icon: "🔘",
    name: "Smart Switch",
    category: "Tata Power EZ Home",
    desc: "Replace your existing wall switches with smart switches. No extra wiring required.",
    specs: ["Fits existing switch box", "Touch + app control", "Scene support", "Voice compatible"],
    compatible: ["Lights", "Fans", "Any wall switch load"],
    badge: null
  },
  {
    icon: "🚪",
    name: "Door / Window Sensor",
    category: "Tata Power EZ Home",
    desc: "Instant alerts on your phone when door or window opens. Simple, reliable home security.",
    specs: ["Instant push notifications", "Battery powered", "Easy DIY install", "Works with automations"],
    compatible: ["All doors", "Windows", "Cabinets"],
    badge: null
  },
]

const lightingProducts = [
  { icon: "🔆", name: "LED Flat Panels", desc: "Slim, energy-efficient LED panels for offices and homes. Available in multiple wattages.", tag: "Residential / Commercial" },
  { icon: "🏭", name: "Industrial High-Bay LED", desc: "High-lumen fixtures for warehouses and factories. IP65 rated, long lifespan.", tag: "Industrial" },
  { icon: "💧", name: "LED Flood Lights", desc: "Powerful outdoor flood lights for parking, facades, and security lighting.", tag: "Outdoor" },
  { icon: "🌿", name: "LED Strip Lights", desc: "Flexible LED strips for cove lighting, signage, and decorative applications.", tag: "Decorative" },
  { icon: "🛣️", name: "LED Street Lights", desc: "Energy-efficient street lights for roads, colonies, and societies.", tag: "Outdoor" },
  { icon: "💡", name: "LED Bulbs & Downlights", desc: "Standard LED bulbs and recessed downlights for everyday residential use.", tag: "Residential" },
]

function Products() {
  const [activeTab, setActiveTab] = useState('tata')

  return (
    <div className="products-page">

      {/* Hero */}
      <div className="products-hero">
        <div className="section-label">Our Products</div>
        <h1 className="section-title">Genuine Products. <span>Guaranteed Quality.</span></h1>
        <p className="section-desc">Every product we supply is 100% genuine — backed by official Tata Power EZ Home warranty and certified installation by our trained team.</p>
        <div className="products-tabs">
          <button className={`prod-tab ${activeTab === 'tata' ? 'active' : ''}`} onClick={() => setActiveTab('tata')}>
            🏠 Tata Power EZ Home
          </button>
          <button className={`prod-tab ${activeTab === 'lighting' ? 'active' : ''}`} onClick={() => setActiveTab('lighting')}>
            💡 Lighting Products
          </button>
        </div>
      </div>

      {/* Tata Products */}
      {activeTab === 'tata' && (
        <section className="tata-products-section">
          <div className="tata-trust-bar">
            <div className="tata-badge-inline">
              <span className="ftb-label">Authorized Channel Partner of</span>
              <span className="ftb-brand">TATA POWER</span>
              <span className="ftb-sub">EZ HOME</span>
            </div>
            <p>All products are 100% genuine with official 1-year warranty. Installed by certified technicians.</p>
          </div>
          <div className="tata-grid">
            {tataProducts.map((p, i) => (
              <div key={i} className="tata-card">
                {p.badge && <div className="product-badge">{p.badge}</div>}
                <div className="product-icon-large">{p.icon}</div>
                <div className="product-category">{p.category}</div>
                <h3>{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <div className="product-specs">
                  <div className="specs-label">Specifications</div>
                  <ul>
                    {p.specs.map((s, j) => <li key={j}>{s}</li>)}
                  </ul>
                </div>
                <div className="product-compatible">
                  <div className="compat-label">Works with</div>
                  <div className="compat-tags">
                    {p.compatible.map((c, j) => <span key={j} className="compat-tag">{c}</span>)}
                  </div>
                </div>
                <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer" className="enquire-btn-full">
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lighting Products */}
      {activeTab === 'lighting' && (
        <section className="lighting-products-section">
          <div className="section-label">Industrial & Residential</div>
          <h2 className="section-title">Premium <span className="green">LED Lighting</span></h2>
          <p className="section-desc">High-quality LED solutions for every space. Bulk orders welcome — B2B and B2C supply across NCR.</p>
          <div className="lighting-prod-grid">
            {lightingProducts.map((p, i) => (
              <div key={i} className="lighting-prod-card">
                <div className="lighting-prod-icon">{p.icon}</div>
                <span className="lighting-prod-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer" className="enquire-btn-green">
                  Get Quote →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Genuine */}
      <section className="genuine-section">
        <div className="section-label">Why Buy From Us</div>
        <h2 className="section-title">100% Genuine. <span>Zero Compromise.</span></h2>
        <div className="genuine-grid">
          {[
            { icon: "🏆", title: "Authorized Partner", desc: "Only authorized partners can supply genuine Tata Power EZ Home products. No counterfeits, ever." },
            { icon: "🛡️", title: "1 Year Warranty", desc: "Every Tata EZ Home product comes with official 1-year warranty — honored directly by Tata Power." },
            { icon: "🔧", title: "Certified Installation", desc: "Our trained technicians install and configure every product. No DIY guesswork." },
            { icon: "📞", title: "After-Sales Support", desc: "We stay available after installation — app setup, troubleshooting, or product queries." },
          ].map((item, i) => (
            <div key={i} className="genuine-card">
              <div className="genuine-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="products-cta">
        <h2>Interested in Any Product?</h2>
        <p>WhatsApp us for pricing, availability, and bulk order quotes. We respond within minutes.</p>
        <div className="cta-btns">
          <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I want to know about your products and pricing.")}`} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp for Pricing</a>
          <Link to="/contact" className="btn-primary">📋 Book Free Assessment →</Link>
        </div>
      </div>

    </div>
  )
}

export default Products
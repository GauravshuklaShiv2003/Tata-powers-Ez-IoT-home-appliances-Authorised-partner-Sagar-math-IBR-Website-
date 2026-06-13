import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Solutions.css'
import React from 'react'
import { tataProducts, waLink, lightingProducts, WA_NUMBER } from './Products'

const WA_NUMBER = "919999999999"
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const automationSolutions = [
  { icon: "💡", title: "Smart Lighting Control", how: "Replace existing switches with Tata EZ Home smart switches. Control via app or voice.", benefits: ["Control from anywhere", "Schedule on/off timings", "Voice control — Alexa & Google", "Energy savings up to 20%"], cta: "Get Smart Lighting" },
  { icon: "❄️", title: "AC Automation", how: "Plug IR Blaster into your existing AC. No new AC needed — works with any brand.", benefits: ["Remote on/off from phone", "Auto schedule before you reach home", "Temperature control", "Reduce electricity bills"], cta: "Automate My AC" },
  { icon: "🚿", title: "Smart Geyser Control", how: "Smart Converter plugs between geyser and switch — instant smart upgrade.", benefits: ["Schedule heating time", "Auto off after use", "Never forget to turn off", "30% energy savings"], cta: "Upgrade My Geyser" },
  { icon: "📊", title: "Energy Management", how: "Energy Manager monitors real-time consumption of all appliances on one dashboard.", benefits: ["Live kWh tracking", "Identify high-consumption appliances", "Monthly reports", "Reduce bills intelligently"], cta: "Monitor My Energy" },
  { icon: "🛡️", title: "Security Automation", how: "Door/Window sensors alert you instantly on your phone when triggered.", benefits: ["Instant mobile alerts", "Works 24/7", "No monthly subscription", "Easy DIY installation"], cta: "Secure My Home" },
  { icon: "🎙️", title: "Voice Control Integration", how: "All Tata EZ Home devices integrate natively with Alexa and Google Assistant.", benefits: ["Hands-free control", "Works with existing smart speakers", "Scene automation", "One command — multiple actions"], cta: "Enable Voice Control" },
]

const lightingSolutions = [
  { icon: "🏠", title: "Residential LED Lighting", desc: "Premium LED panels, bulbs, and strip lights for homes. Energy-efficient, long-lasting, available in warm and cool white.", tag: "Residential" },
  { icon: "🏭", title: "Industrial High-Bay Lighting", desc: "High-lumen LED high-bay fixtures for warehouses, factories, and large spaces. Durable, IP-rated, significant energy savings.", tag: "Industrial" },
  { icon: "🏢", title: "Commercial & Office Lighting", desc: "Flat panels, troffer lights, and downlights for offices, retail, and commercial spaces. Professional look, low maintenance.", tag: "Commercial" },
  { icon: "🌆", title: "Street & Outdoor Lighting", desc: "LED street lights, flood lights, and garden lights for outdoor areas. Weather-resistant, low power consumption.", tag: "Outdoor" },
]

const steps = [
  { num: "01", title: "Free Assessment", desc: "Our expert visits your home or site — completely free. We understand your needs and existing setup." },
  { num: "02", title: "Custom Recommendation", desc: "We recommend the exact products and plan suited to your space, budget, and goals." },
  { num: "03", title: "Professional Installation", desc: "Certified technicians install and configure everything. Zero disruption to your routine." },
  { num: "04", title: "After-Sales Support", desc: "We stay available post-installation for any queries, app setup, or technical support." },
]

function Solutions() {
  const [activeTab, setActiveTab] = useState('automation')

  return (
    <div className="solutions-page">

      <div className="solutions-hero">
        <div className="section-label">Our Solutions</div>
        <h1 className="section-title">Smart Solutions <span>for Every Space</span></h1>
        <p className="section-desc">From intelligent home automation to premium lighting — SagarMatha IBR delivers end-to-end solutions backed by Tata Power EZ Home's trusted ecosystem.</p>
        <div className="solutions-hero-tabs">
          <button className={`sol-tab ${activeTab === 'automation' ? 'active' : ''}`} onClick={() => setActiveTab('automation')}>
            🏠 Smart Home Automation
          </button>
          <button className={`sol-tab ${activeTab === 'lighting' ? 'active' : ''}`} onClick={() => setActiveTab('lighting')}>
            💡 Lighting Solutions
          </button>
        </div>
      </div>

      {activeTab === 'automation' && (
        <section className="auto-section">
          <div className="section-label">Tata Power EZ Home</div>
          <h2 className="section-title">Smart Home <span>Automation</span></h2>
          <p className="section-desc">Plug-and-play IoT devices that work with your existing appliances. No rewiring. No electrician. Just plug, connect, and control.</p>
          <div className="auto-grid">
            {automationSolutions.map((sol, i) => (
              <div key={i} className="auto-card">
                <div className="auto-icon">{sol.icon}</div>
                <h3>{sol.title}</h3>
                <div className="how-it-works">
                  <span className="how-label">How it works</span>
                  <p>{sol.how}</p>
                </div>
                <ul className="benefits-list">
                  {sol.benefits.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <a href={waLink(`Hi, I'm interested in ${sol.title} from Tata Power EZ Home.`)} target="_blank" rel="noopener noreferrer" className="sol-cta-btn">
                  {sol.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'lighting' && (
        <section className="lighting-section">
          <div className="section-label">Industrial & Residential</div>
          <h2 className="section-title">Premium <span className="green">Lighting Solutions</span></h2>
          <p className="section-desc">High-quality LED lighting for every space — homes, offices, warehouses, and streets. Energy-efficient, durable, and competitively priced.</p>
          <div className="lighting-grid">
            {lightingSolutions.map((sol, i) => (
              <div key={i} className="lighting-card">
                <div className="lighting-icon">{sol.icon}</div>
                <span className="lighting-tag">{sol.tag}</span>
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <a href={waLink(`Hi, I need ${sol.title} for my space. Please share details.`)} target="_blank" rel="noopener noreferrer" className="sol-cta-btn green-btn">
                  Get Quote →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="process-section">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Our <span>4-Step Process</span></h2>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-card">
              <div className="process-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {i < steps.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="solutions-cta">
        <h2>Ready to Transform Your Space?</h2>
        <p>Book a free assessment — our expert visits your home or site and gives a customized plan, completely free.</p>
        <div className="cta-btns">
          <a href={waLink("Hi, I want to book a free smart home assessment.")} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us Now</a>
          <Link to="/contact" className="btn-primary">📋 Book Free Assessment →</Link>
        </div>
      </div>

    </div>
  )
}

export default Solutions
export function Products() {
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

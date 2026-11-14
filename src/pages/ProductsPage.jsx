import React, { useState } from 'react'
import './Products.css'
import EnquiryModal from './EnquiryModal'
import { tataProducts, lightingProducts } from './Products'

export function Products() {
  const [activeTab, setActiveTab] = useState('tata')
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const openEnquiry = (name = '') => {
    setSelected(name)
    setEnquiryOpen(true)
  }

  return (
    <div className="products-page">

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
                <button type="button" className="enquire-btn-full" onClick={() => openEnquiry(p.name)}>
                  Enquire Now →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

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
                <button type="button" className="enquire-btn-green" onClick={() => openEnquiry(p.name)}>
                  Get Quote →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

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

      <div className="products-cta">
        <h2>Interested in Any Product?</h2>
        <p>Send us an enquiry for pricing, availability, and bulk order quotes. We respond within minutes.</p>
        <div className="cta-btns">
          <button type="button" className="btn-primary" onClick={() => openEnquiry('Pricing enquiry')}>
            📋 Book Free Assessment →
          </button>
        </div>
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} product={selected} />
    </div>
  )
}

export default Products
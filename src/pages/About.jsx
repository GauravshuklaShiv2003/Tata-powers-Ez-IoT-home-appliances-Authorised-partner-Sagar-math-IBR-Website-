import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const WA_NUMBER = "919999999999"
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I want to know more about SagarMatha IBR services.")}`

const stats = [
  { num: "500+", label: "Homes Automated" },
  { num: "30%", label: "Avg Energy Savings" },
  { num: "24/7", label: "Customer Support" },
  { num: "1 Yr", label: "Tata Warranty" },
]

const team = [
  { name: "Gaurav Shukla", role: "Founder & Director", initials: "GS" },
]

const coverage = ["Greater Noida", "Noida", "Noida Extension", "Gaur City", "Ghaziabad", "NCR Region"]

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div className="section-label">About Us</div>
        <h1 className="section-title">Local Expertise. <span>Tata Trust.</span></h1>
        <p className="section-desc">SagarMatha IBR is an Authorized Channel Partner of Tata Power EZ Home — bringing intelligent smart home automation and premium lighting solutions to Greater Noida & NCR.</p>
        <div className="about-hero-btns">
          <a href={WA_LINK} className="btn-primary" target="_blank" rel="noopener noreferrer">Get in Touch →</a>
          <Link to="/contact" className="btn-outline">Book Free Assessment</Link>
        </div>
      </div>

      {/* Tata Badge Section */}
      <div className="tata-section">
        <div className="tata-content">
          <div className="tata-badge-large">
            <div className="ftb-label">Authorized Channel Partner of</div>
            <div className="ftb-brand">TATA POWER</div>
            <div className="ftb-sub">EZ HOME</div>
          </div>
          <div className="tata-text">
            <h2>Why Tata Power EZ Home?</h2>
            <p>Tata Power EZ Home is India's most trusted smart home brand. As an authorized channel partner, SagarMatha IBR ensures every product you receive is 100% genuine, fully warranted, and professionally installed.</p>
            <ul className="tata-points">
              <li>✅ Genuine Tata Power EZ Home products only</li>
              <li>✅ Official 1-year product warranty</li>
              <li>✅ Certified installation team</li>
              <li>✅ Direct after-sales support</li>
              <li>✅ Made in India — IoT ecosystem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="about-stat">
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <section className="story-section">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">Built for <span>Greater Noida</span></h2>
        <div className="story-grid">
          <div className="story-text">
            <p>SagarMatha IBR was founded with a simple mission — make smart home technology accessible and affordable for every home in Greater Noida and NCR.</p>
            <p>As an authorized channel partner of Tata Power EZ Home, we combine the trust of India's biggest brand with deep local knowledge and personalized service.</p>
            <p>From single-room automation to complete home setups, from residential LED panels to industrial high-bay lighting — we handle it all under one roof.</p>
          </div>
          <div className="story-cards">
            <div className="story-card automation">
              <span>🏠</span>
              <h4>Smart Home Automation</h4>
              <p>Complete Tata Power EZ Home IoT ecosystem — lights, AC, geyser, energy, security.</p>
            </div>
            <div className="story-card lighting">
              <span>💡</span>
              <h4>Industrial & Residential Lighting</h4>
              <p>Premium LED solutions for homes, offices, warehouses, and streets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">What Makes Us <span>Different</span></h2>
        <div className="why-grid">
          {[
            { num: "01", title: "Authorized Tata Partner", desc: "Only authorized partners can sell and install genuine Tata Power EZ Home products. Full warranty, official support — guaranteed." },
            { num: "02", title: "Same-Day Site Visits", desc: "Based in Greater Noida — we offer same-day assessment visits and quick installation turnarounds. Local team, faster service." },
            { num: "03", title: "End-to-End Service", desc: "We assess your home, recommend the right solution, install professionally, and provide after-sales support. One team, zero hassle." },
            { num: "04", title: "Automation + Lighting", desc: "Smart home IoT devices + industrial/residential LED lighting — one trusted partner handles everything. Fewer vendors, better coordination." },
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

      {/* Coverage */}
      <section className="coverage-section">
        <div className="section-label">Service Area</div>
        <h2 className="section-title">We Serve <span>Greater Noida & NCR</span></h2>
        <div className="coverage-grid">
          {coverage.map((area, i) => (
            <div key={i} className="coverage-item">
              <span>📍</span> {area}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>Book a free smart home assessment — our expert visits your home and gives a customized plan, completely free.</p>
        <div className="cta-btns">
          <a href={WA_LINK} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          <Link to="/contact" className="btn-primary">📋 Book Free Assessment →</Link>
        </div>
      </div>

    </div>
  )
}

export default About
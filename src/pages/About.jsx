import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import EnquiryModal from './EnquiryModal'

const stats = [
  { value: 500, suffix: '+', label: 'Homes Automated' },
  { value: 30, suffix: '%', label: 'Avg Energy Savings' },
  { text: '24/7', label: 'Customer Support' },
  { value: 1, suffix: ' Yr', label: 'Tata Warranty' },
]

const team = [
  { name: 'Zishan Ibraheem', role: 'Founder & Director', initials: 'ZI' },
]

const coverage = ['Greater Noida', 'Noida', 'Noida Extension', 'Gaur City', 'Ghaziabad', 'NCR Region']

const steps = [
  { icon: '📞', title: 'Book a Free Assessment', desc: 'Share your address and a convenient time slot through our enquiry form.' },
  { icon: '🔍', title: 'Site Visit & Plan', desc: 'Our expert visits, understands your needs and recommends the right products.' },
  { icon: '🔧', title: 'Professional Installation', desc: 'Certified technicians install and configure everything with zero disruption.' },
  { icon: '🎧', title: 'After-Sales Support', desc: 'App setup, troubleshooting and product queries — we stay available.' },
]

const faqs = [
  { q: 'Do I need rewiring or an electrician?', a: 'No. Tata Power EZ Home devices are plug-and-play and work with your existing appliances.' },
  { q: 'Are the products genuine?', a: 'Yes. We are an authorized channel partner, so every product is 100% genuine and comes with the official 1-year Tata warranty.' },
  { q: 'Is the assessment really free?', a: 'Yes. Our expert visits your home or site, understands your needs and gives a customized plan, completely free.' },
  { q: 'Does it work with Alexa and Google Assistant?', a: 'Yes. Tata Power EZ Home devices integrate with Amazon Alexa and Google Assistant.' },
  { q: 'Do you supply LED lighting in bulk?', a: 'Yes. We supply premium LED lighting for homes, offices, warehouses and streets — B2B and B2C, bulk orders welcome.' },
  { q: 'Which areas do you serve?', a: 'Greater Noida, Noida, Noida Extension, Gaur City, Ghaziabad and the wider NCR region.' },
]

// Fires once when the element scrolls into view
function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function Reveal({ children, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`ab-reveal ${inView ? 'ab-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

function Counter({ value, suffix = '' }) {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])
  return <span ref={ref}>{n}{suffix}</span>
}

function About() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const open = () => setEnquiryOpen(true)

  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div className="section-label">About Us</div>
        <h1 className="section-title">Local Expertise. <span>Tata Trust.</span></h1>
        <p className="section-desc">SagarMatha IBR is an Authorized Channel Partner of Tata Power EZ Home — bringing intelligent smart home automation and premium lighting solutions to Greater Noida & NCR.</p>
        <div className="about-hero-btns">
          <button type="button" className="btn-primary" onClick={open}>Book Free Assessment →</button>
          <a href="#our-story" className="btn-outline">Our Story</a>
        </div>
        <div className="about-chips">
          <span>🏆 Authorized Partner</span>
          <span>🛡️ 1-Year Warranty</span>
          <span>🔧 Certified Installation</span>
          <span>📍 Greater Noida & NCR</span>
        </div>
      </div>

      {/* Tata Badge Section */}
      <div className="tata-section">
        <Reveal className="tata-content">
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
        </Reveal>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="about-stat">
            <div className="stat-number">
              {s.text ? s.text : <Counter value={s.value} suffix={s.suffix} />}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <section className="story-section" id="our-story">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">Built for <span>Greater Noida</span></h2>
        <Reveal className="story-grid">
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
        </Reveal>
      </section>

      {/* How we work */}
      <section className="how-section">
        <div className="section-label">How We Work</div>
        <h2 className="section-title">From Enquiry to <span>Installation</span></h2>
        <Reveal className="how-grid">
          {steps.map((st, i) => (
            <div key={i} className="how-card">
              <div className="how-step">{String(i + 1).padStart(2, '0')}</div>
              <div className="how-icon">{st.icon}</div>
              <h4>{st.title}</h4>
              <p>{st.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">What Makes Us <span>Different</span></h2>
        <Reveal className="why-grid">
          {[
            { num: '01', title: 'Authorized Tata Partner', desc: 'Only authorized partners can sell and install genuine Tata Power EZ Home products. Full warranty, official support — guaranteed.' },
            { num: '02', title: 'Same-Day Site Visits', desc: 'Based in Greater Noida — we offer same-day assessment visits and quick installation turnarounds. Local team, faster service.' },
            { num: '03', title: 'End-to-End Service', desc: 'We assess your home, recommend the right solution, install professionally, and provide after-sales support. One team, zero hassle.' },
            { num: '04', title: 'Automation + Lighting', desc: 'Smart home IoT devices + industrial/residential LED lighting — one trusted partner handles everything. Fewer vendors, better coordination.' },
          ].map((w, i) => (
            <div key={i} className="why-card">
              <div className="why-num">{w.num}</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Founder */}
      <section className="team-section">
        <div className="section-label">Meet the Founder</div>
        <h2 className="section-title">The Team <span>Behind SagarMatha IBR</span></h2>
        <Reveal className="team-grid">
          {team.map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">{m.initials}</div>
              <h4>{m.name}</h4>
              <div className="team-role">{m.role}</div>
              <p>Committed to making smart, energy-efficient living simple for every home and business in Greater Noida & NCR.</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Coverage */}
      <section className="coverage-section">
        <div className="section-label">Service Area</div>
        <h2 className="section-title">We Serve <span>Greater Noida & NCR</span></h2>
        <Reveal className="coverage-grid">
          {coverage.map((area, i) => (
            <div key={i} className="coverage-item">
              <span>📍</span> {area}
            </div>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Questions? <span>We've Got Answers</span></h2>
        <Reveal className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>Book a free smart home assessment — our expert visits your home and gives a customized plan, completely free.</p>
        <div className="cta-btns">
          <button type="button" className="btn-primary" onClick={open}>📋 Book Free Assessment →</button>
        </div>
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} product="Free Assessment" />
    </div>
  )
}

export default About

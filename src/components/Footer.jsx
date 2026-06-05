import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">Sagarmatha<span>IBR</span></div>
          <p>Authorized Channel Partner of Tata Power EZ Home. Smart home automation and premium lighting solutions across Greater Noida & NCR.</p>
          <div className="footer-tata-badge">
            <div className="ftb-label">Authorized Channel Partner of</div>
            <div className="ftb-brand">TATA POWER</div>
            <div className="ftb-sub">EZ HOME</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h5>Our Services</h5>
          <ul>
            <li><Link to="/solutions">Smart Home Automation</Link></li>
            <li><Link to="/solutions">Industrial Lighting</Link></li>
            <li><Link to="/solutions">Residential LED</Link></li>
            <li><Link to="/solutions">Energy Management</Link></li>
            <li><Link to="/solutions">Security Automation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Contact Us</h5>
          <div className="footer-contact-item"><span>📞</span><a href="tel:+919999999999">+91-9999999999</a></div>
          <div className="footer-contact-item"><span>💬</span><a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></div>
          <div className="footer-contact-item"><span>📧</span><a href="mailto:info@sagarmathaezhome.in">info@sagarmathaezhome.in</a></div>
          <div className="footer-contact-item"><span>📍</span><span>Greater Noida, UP, India</span></div>
          <div className="footer-contact-item"><span>📸</span><a href="https://instagram.com/sagarmatha_ibr" target="_blank" rel="noopener noreferrer">@sagarmatha_ibr</a></div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SagarMatha IBR. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://instagram.com/sagarmatha_ibr" target="_blank" rel="noopener noreferrer" className="social-btn">📸</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="social-btn">💬</a>
          <a href="mailto:info@sagarmathaezhome.in" className="social-btn">📧</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Sagarmatha<span>IBR</span>
      </Link>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <div className="tata-badge">
          <span className="badge-label">Partner of</span>
          <span className="badge-brand">TATA POWER</span>
          <span className="badge-sub">EZ HOME</span>
        </div>
        <Link to="/contact" className="btn-nav">Get a Quote</Link>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
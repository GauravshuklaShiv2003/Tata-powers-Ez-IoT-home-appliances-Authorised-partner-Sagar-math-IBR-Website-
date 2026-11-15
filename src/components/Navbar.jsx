import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EnquiryModal from '../pages/EnquiryModal'
import './Navbar.css'
import logoMark from '../assets/logo-mark.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbar-logo">
          <img src={logoMark} alt="" className="navbar-logo-img" />
          Sagarmatha<span>IBR</span>
        </Link>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        <div className="navbar-right">
          <div className="tata-badge">
            <span className="badge-label">Authorized Channel Partner of</span>
            <span className="badge-brand">TATA POWER</span>
            <span className="badge-sub">EZ HOME</span>
          </div>
          <button className="btn-nav" onClick={() => setEnquiryOpen(true)}>
            Book Free Assessment
          </button>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} product="Free Assessment" />
    </>
  )
}

export default Navbar
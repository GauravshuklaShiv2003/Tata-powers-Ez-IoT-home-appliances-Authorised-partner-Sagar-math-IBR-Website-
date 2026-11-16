import LogoLoader from './components/LogoLoader';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/ProductsPage';
import About from './pages/About';
import Contact from './pages/Contact';

// Must stay last so it overrides the other CSS files on mobile
import './styles/responsive.css';

const TITLES = {
  '/': 'SagarMatha IBR | Tata Power EZ Home Partner - Smart Home & LED Lighting',
  '/solutions': 'Smart Home & Lighting Solutions | SagarMatha IBR',
  '/products': 'Tata Power EZ Home Products | SagarMatha IBR',
  '/about': 'About Us | SagarMatha IBR - Authorized Tata Power EZ Home Partner',
  '/contact': 'Contact & Book Free Assessment | SagarMatha IBR',
};

function TitleManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = TITLES[pathname] || TITLES['/'];
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    try { return !sessionStorage.getItem('loaderShown'); } catch (e) { return true; }
  });
  return (
    <Router>
      {isLoading && (
        <LogoLoader
          onFinished={() => {
            try { sessionStorage.setItem('loaderShown', '1'); } catch (e) { /* ignore */ }
            setIsLoading(false);
          }}
        />
      )}
      <TitleManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
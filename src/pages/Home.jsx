import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('photos');

    // Ensure whatsappNumber is a string
    const whatsappNumber = "919999999999";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello SagarMatha IBR, I'm interested in your Smart Home & Lighting solutions.")}`;

    const slides = [
        { title: "Premium Smart Home Automation", desc: "Experience the future of living with Tata Power EZ Home.", img: "hero-placeholder-1" },
        { title: "Industrial & Residential Lighting", desc: "Energy-efficient LED solutions for every space.", img: "hero-placeholder-2" },
        { title: "Seamless Control", desc: "Manage your home from anywhere in the world.", img: "hero-placeholder-3" },
        { title: "Authorized Partner", desc: "Trusted quality and warranty from Tata Power.", img: "hero-placeholder-4" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="slider-container">
                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                            <div className="slide-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.desc}</p>
                                <div className="hero-ctas">
                                    <a href={whatsappLink} className="btn-primary" target="_blank" rel="noreferrer">Get a Quote</a>
                                    <Link to="/solutions" className="btn-secondary">Explore Solutions</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="trust-bar">
                <div className="trust-item">Authorized Partner</div>
                <div className="trust-item">1 Year Warranty</div>
                <div className="trust-item">Expert Installation</div>
                <div className="trust-item">24/7 Support</div>
            </section>

            <section className="verticals-section">
                <div className="vertical-card automation">
                    <h2>Smart Home Automation</h2>
                    <p>Complete IoT integration for a modern, secure, and smart lifestyle.</p>
                    <a href={whatsappLink} className="btn-outline" target="_blank" rel="noreferrer">Automate My Home</a>
                </div>
                <div className="vertical-card lighting">
                    <h2>Industrial & Residential Lighting</h2>
                    <p>High-quality LED panels, high-bays, and flood lights for maximum efficiency.</p>
                    <a href={whatsappLink} className="btn-outline" target="_blank" rel="noreferrer">Upgrade My Lighting</a>
                </div>
            </section>

            <section className="solutions-section">
                <h2 className="section-title">Our Solutions</h2>
                <div className="solutions-grid">
                    {["Living Room", "Security", "Office Lighting", "Facade Lighting", "Energy Analytics", "Voice Control"].map((sol, i) => (
                        <div key={i} className="solution-card">
                            <h3>{sol}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats-section">
                <div className="stat-box"><h2>500+</h2><p>Homes Secured</p></div>
                <div className="stat-box"><h2>30%</h2><p>Energy Saved</p></div>
                <div className="stat-box"><h2>24/7</h2><p>Monitoring</p></div>
                <div className="stat-box"><h2>1 Yr</h2><p>Tata Warranty</p></div>
            </section>

            <section className="gallery-section">
                <div className="tab-controls">
                    <button className={activeTab === 'photos' ? 'active-tab' : ''} onClick={() => setActiveTab('photos')}>Project Photos</button>
                    <button className={activeTab === 'reviews' ? 'active-tab' : ''} onClick={() => setActiveTab('reviews')}>Customer Reviews</button>
                </div>
                {activeTab === 'photos' && (
                    <div className="photo-grid">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <div key={num} className="grid-placeholder">Project Image {num}</div>
                        ))}
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div className="review-grid">
                        {[1, 2, 3].map(num => (
                            <div key={num} className="review-card">
                                <p>"Excellent service and genuine Tata products installed seamlessly."</p>
                                <h4>- Happy Customer {num}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;
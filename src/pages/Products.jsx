import React from 'react';
import './Products.css'; // Apni CSS file import karein

const products = [
  { name: "Smart Wi-Fi Switch", category: "Automation", desc: "Control lights from anywhere." },
  { name: "LED High-Bay Light", category: "Lighting", desc: "Energy-efficient industrial light." },
  { name: "Motion Sensor", category: "Security", desc: "Automated security lighting." },
  { name: "Smart Dimmer", category: "Automation", desc: "Adjust light intensity via voice." },
  { name: "Flood Light Pro", category: "Lighting", desc: "Outdoor weather-proof lighting." },
  { name: "Energy Analytics Module", category: "Automation", desc: "Track your electricity usage." }
];

const Products = () => {
  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Premium quality smart devices for a modernized lifestyle.</p>
      </header>
      
      <div className="products-list">
        {products.map((prod, index) => (
          <div key={index} className="prod-card">
            <span className="prod-badge">{prod.category}</span>
            <h3>{prod.name}</h3>
            <p>{prod.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
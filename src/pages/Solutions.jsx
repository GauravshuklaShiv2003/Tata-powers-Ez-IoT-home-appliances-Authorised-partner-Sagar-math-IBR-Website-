import React from 'react';
import './Solutions.css';

const solutionsList = [
  { title: "Smart Home Automation", desc: "Transform your living space with IoT-enabled switches, sensors, and remote control capabilities." },
  { title: "Industrial Lighting", desc: "Energy-efficient high-bay and flood lighting solutions designed for high-performance industrial environments." },
  { title: "Residential LED", desc: "Premium aesthetic lighting for modern homes, focusing on ambiance and energy savings." },
  { title: "Security & Surveillance", desc: "Integrated smart security cameras and motion-triggered lighting for absolute peace of mind." },
  { title: "Energy Analytics", desc: "Real-time monitoring and analytics to track your electricity consumption and optimize usage." },
  { title: "Voice & Smart Control", desc: "Full integration with Alexa, Google Home, and custom apps for hands-free device management." }
];

const Solutions = () => {
  return (
    <div className="solutions-page">
      <header className="solutions-header">
        <h1>Our Solutions</h1>
        <p>Comprehensive smart technology tailored for modern requirements.</p>
      </header>
      
      <div className="solutions-grid">
        {solutionsList.map((sol, index) => (
          <div key={index} className="sol-card">
            <h3>{sol.title}</h3>
            <p>{sol.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
import React from 'react';
import './Contact.css'; // Ensure you have this file or add these styles to global.css

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Get In Touch</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn-nav">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
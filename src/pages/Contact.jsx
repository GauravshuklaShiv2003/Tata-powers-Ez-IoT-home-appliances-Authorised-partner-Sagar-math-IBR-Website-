import React from 'react'
import EnquiryForm from '../components/EnquiryForm'
import SITE from '../config'
import './Contact.css'
import './EnquiryModal.css'

const Contact = () => (
  <div className="contact-page">
    <div className="contact-head">
      <span className="contact-label">Contact Us</span>
      <h1>Let's Make Your Home <span>Smarter</span></h1>
      <p>Book a free assessment — our expert visits your home or site and gives a customized plan, completely free.</p>
    </div>

    <div className="contact-layout">
      <div className="contact-info">
        <a className="contact-card" href={`tel:+91${SITE.phone}`}>
          <span className="contact-icon">📞</span>
          <div><h4>Call Us</h4><p>{SITE.phoneDisplay}</p></div>
        </a>
        <a className="contact-card" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <span className="contact-icon">💬</span>
          <div><h4>WhatsApp</h4><p>Chat with our team</p></div>
        </a>
        <a className="contact-card" href={`mailto:${SITE.email}`}>
          <span className="contact-icon">📧</span>
          <div><h4>Email</h4><p>{SITE.email}</p></div>
        </a>
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <div><h4>Service Area</h4><p>Greater Noida, Noida, Noida Extension, Gaur City, Ghaziabad & NCR</p></div>
        </div>
      </div>

      <div className="enq-modal enq-inline">
        <EnquiryForm product="Contact page" />
      </div>
    </div>
  </div>
)

export default Contact

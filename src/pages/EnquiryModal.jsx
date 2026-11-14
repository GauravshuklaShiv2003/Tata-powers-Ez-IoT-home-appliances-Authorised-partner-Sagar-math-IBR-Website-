import React, { useEffect, useState } from 'react'
import './EnquiryModal.css'

// Replace with your Formspree form ID (free at formspree.io) or your own endpoint
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function EnquiryModal({ open, onClose, product = '' }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    if (!open) return
    setStatus('idle')
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="enq-overlay" onClick={onClose}>
      <div className="enq-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="enq-close" onClick={onClose} aria-label="Close">×</button>

        {status === 'sent' ? (
          <div className="enq-done">
            <div className="enq-tick">✓</div>
            <h3>Thank you!</h3>
            <p>We've received your enquiry and will contact you shortly.</p>
            <button className="enq-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Book Free Assessment</h3>
            <p className="enq-sub">Fill in your details and our team will get back to you.</p>

            <input type="hidden" name="product" value={product} />
            {product && <div className="enq-product">Enquiry for: <strong>{product}</strong></div>}

            <input name="name" placeholder="Your name" required autoComplete="name" />
            <input name="phone" type="tel" inputMode="tel" placeholder="Phone number"
              pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" required autoComplete="tel" />
            <input name="email" type="email" placeholder="Email (optional)" autoComplete="email" />
            <select name="interest" required defaultValue="">
              <option value="" disabled>I'm interested in</option>
              <option>Smart Home Automation</option>
              <option>Residential Lighting</option>
              <option>Industrial Lighting</option>
              <option>Commercial / Office Lighting</option>
              <option>Street & Outdoor Lighting</option>
              <option>Other</option>
            </select>
            <textarea name="message" rows="3" placeholder="Tell us about your space (optional)" />

            {status === 'error' && (
              <div className="enq-error">Something went wrong. Please try again.</div>
            )}
            <button type="submit" className="enq-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
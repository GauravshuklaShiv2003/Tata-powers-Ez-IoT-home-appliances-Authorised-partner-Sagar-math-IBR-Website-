import React, { useState } from 'react'
import SITE from '../config'

const FORM_ENDPOINT = `https://formspree.io/f/${SITE.formspreeId}`

const TIME_SLOTS = [
  '9:00 AM – 12:00 PM',
  '12:00 PM – 3:00 PM',
  '3:00 PM – 6:00 PM',
  '6:00 PM – 8:00 PM',
]

export default function EnquiryForm({ product = '', onDone }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (SITE.formspreeId === 'YOUR_FORM_ID') {
      console.warn('Set formspreeId in src/config.js')
      setStatus('error')
      return
    }
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

  if (status === 'sent') {
    return (
      <div className="enq-done">
        <div className="enq-tick">✓</div>
        <h3>Thank you!</h3>
        <p>We've received your request and will visit you in your chosen time slot.</p>
        {onDone && <button type="button" className="enq-btn" onClick={onDone}>Close</button>}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Free Assessment</h3>
      <p className="enq-sub">Fill in your details and our team will get back to you.</p>

      <input type="hidden" name="product" value={product} />
      {product && <div className="enq-product">Enquiry for: <strong>{product}</strong></div>}

      <input name="name" placeholder="Your name" required autoComplete="name" />
      <input
        name="phone" type="tel" inputMode="numeric" placeholder="Phone number"
        pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number"
        required autoComplete="tel"
      />
      <textarea name="address" rows="3" placeholder="Full address" required autoComplete="street-address" />
      <input
        name="pincode" inputMode="numeric" placeholder="Pin code"
        pattern="[0-9]{6}" maxLength={6} title="Enter a 6-digit pin code"
        required autoComplete="postal-code"
      />
      <select name="time_slot" required defaultValue="">
        <option value="" disabled>Preferred time slot</option>
        {TIME_SLOTS.map((slot) => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>

      {status === 'error' && (
        <div className="enq-error">
          Could not send right now. Please call us at{' '}
          <a href={`tel:+91${SITE.phone}`}>{SITE.phoneDisplay}</a>.
        </div>
      )}
      <button type="submit" className="enq-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>
  )
}

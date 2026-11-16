import React, { useEffect } from 'react'
import EnquiryForm from '../components/EnquiryForm'
import './EnquiryModal.css'

export default function EnquiryModal({ open, onClose, product = '' }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="enq-overlay" onClick={onClose}>
      <div className="enq-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="enq-close" onClick={onClose} aria-label="Close">×</button>
        <EnquiryForm product={product} onDone={onClose} />
      </div>
    </div>
  )
}

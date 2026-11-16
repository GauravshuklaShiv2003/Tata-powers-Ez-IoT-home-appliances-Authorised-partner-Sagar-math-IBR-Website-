import './WhatsAppFloat.css'
import SITE from '../config'

function WhatsAppFloat() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi, I want to know more about your services')}`
  return (
    <>
      <a href={`tel:+91${SITE.phone}`} className="call-float" aria-label="Call us">
        📞
        <span className="wa-tooltip">Call us</span>
      </a>
      <a href={url} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        💬
        <span className="wa-tooltip">Chat with us!</span>
      </a>
    </>
  )
}

export default WhatsAppFloat

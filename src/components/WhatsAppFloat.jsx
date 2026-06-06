import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const url = `https://wa.me/919999999999?text=${encodeURIComponent('Hi, I want to know more about your services')}`
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="wa-float">
      💬
      <span className="wa-tooltip">Chat with us!</span>
    </a>
  )
}

export default WhatsAppFloat
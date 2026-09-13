import { useEffect } from 'react'
import { MessageCircle, Phone, MapPin, Navigation } from 'lucide-react'
import {
  buildWhatsAppLink,
  generalInquiryMessage,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  STORE_ADDRESS
} from '../utils/whatsapp'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Master Solar & Electronics'
  }, [])

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`

  return (
    <div className="container-page py-10 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-navy-600">
          Reach out any time — we typically respond fastest on WhatsApp.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
        <h2 className="font-display text-lg font-semibold text-navy-900">Master Solar & Electronics</h2>

        <div className="mt-5 space-y-4 text-sm text-navy-700">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
            <span>{STORE_ADDRESS}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-navy-500" />
            <span>{WHATSAPP_DISPLAY}</span>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={`tel:+${WHATSAPP_NUMBER}`} className="btn btn-primary">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Navigation className="h-4 w-4" /> Directions
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-navy-100">
        <iframe
          title="Store location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}&output=embed`}
          width="100%"
          height="280"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

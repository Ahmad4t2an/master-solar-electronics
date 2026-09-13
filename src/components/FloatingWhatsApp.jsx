import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(generalInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Master Solar & Electronics on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center"
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-leaf animate-pulseRing" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-cardHover transition-transform duration-200 group-hover:scale-105">
          <MessageCircle className="h-7 w-7" strokeWidth={2} />
        </span>
      </span>
    </a>
  )
}

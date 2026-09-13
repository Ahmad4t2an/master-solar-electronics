import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp'

export default function WhatsAppCTA() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-600 to-leaf-800 px-6 py-10 text-center text-white sm:px-12 sm:py-14">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        Have a question or ready to order?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-leaf-50 sm:text-base">
        Message us directly on WhatsApp — Master Akmal and our team will
        confirm price, availability and delivery for you personally.
      </p>
      <a
        href={buildWhatsAppLink(generalInquiryMessage())}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-6 bg-white text-leaf-700 hover:bg-leaf-50"
      >
        <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
      </a>
    </div>
  )
}

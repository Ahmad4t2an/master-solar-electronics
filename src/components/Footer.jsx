import { Link } from 'react-router-dom'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
import { buildWhatsAppLink, generalInquiryMessage, WHATSAPP_DISPLAY, STORE_ADDRESS } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy-900 text-navy-100">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Master Solar & Electronics" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
            A family-run solar and electronics store bringing genuine solar
            solutions and home electronics to customers across Pakistan.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/solar" className="hover:text-white">Solar Products</Link></li>
            <li><Link to="/electronics" className="hover:text-white">Electronics</Link></li>
            <li><Link to="/home-appliances" className="hover:text-white">Home Appliances</Link></li>
            <li><Link to="/kitchen-appliances" className="hover:text-white">Kitchen Appliances</Link></li>
            <li><Link to="/deals" className="hover:text-white">Deals</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Customer Support</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-300">
            <li>
              <a
                href={buildWhatsAppLink(generalInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`tel:+${'923457286042'}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppLink('Assalam o Alaikum, I want to place an order. Please assist me.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Visit / Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {STORE_ADDRESS}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> {WHATSAPP_DISPLAY}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-400 sm:flex-row">
          <p>© 2026 Master Solar & Electronics. All rights reserved.</p>
          <p>Owned by Master Akmal & Abdul Wahab</p>
        </div>
      </div>
    </footer>
  )
}

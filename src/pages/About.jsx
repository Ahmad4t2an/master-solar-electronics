import { useEffect } from 'react'
import { MessageCircle, Sun, Zap, Users, MapPin } from 'lucide-react'
import { buildWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Master Solar & Electronics'
  }, [])

  return (
    <div className="container-page py-10 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          About Master Solar & Electronics
        </h1>
        <p className="mt-4 text-navy-600">
          A family-owned business bringing solar energy solutions and quality
          home electronics to customers across Pakistan.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
            <Users className="h-5.5 w-5.5" />
          </span>
          <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">Master Akmal</h2>
          <p className="mt-1 text-sm text-navy-500">Owner</p>
          <p className="mt-3 text-sm text-navy-600">
            Master Akmal founded the business with a focus on honest dealing
            and dependable products, building long-term relationships with
            customers in the local area and beyond.
          </p>
        </div>
        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
            <Users className="h-5.5 w-5.5" />
          </span>
          <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">Abdul Wahab</h2>
          <p className="mt-1 text-sm text-navy-500">Son / Co-owner</p>
          <p className="mt-3 text-sm text-navy-600">
            Abdul Wahab works alongside his father, helping the business grow
            into solar energy solutions and modern electronics while keeping
            the same customer-first approach.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-navy-50 p-6">
            <Sun className="h-6 w-6 text-solar-600" />
            <h3 className="mt-3 font-display text-sm font-semibold text-navy-900">Solar Solutions</h3>
            <p className="mt-1.5 text-sm text-navy-600">
              From individual panels and inverters to full home solar
              packages, sized around your household's needs.
            </p>
          </div>
          <div className="rounded-2xl bg-navy-50 p-6">
            <Zap className="h-6 w-6 text-leaf-600" />
            <h3 className="mt-3 font-display text-sm font-semibold text-navy-900">Home & Kitchen Appliances</h3>
            <p className="mt-1.5 text-sm text-navy-600">
              ACs, refrigerators, washing machines, kitchen appliances and
              electronics from well-known brands.
            </p>
          </div>
          <div className="rounded-2xl bg-navy-50 p-6">
            <MessageCircle className="h-6 w-6 text-navy-700" />
            <h3 className="mt-3 font-display text-sm font-semibold text-navy-900">Customer-Focused Service</h3>
            <p className="mt-1.5 text-sm text-navy-600">
              Every order goes through a real conversation on WhatsApp, so
              you always know exactly what you're getting.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-card">
        <MapPin className="h-6 w-6 text-navy-500" />
        <p className="text-sm text-navy-600">42 DB Main Yazman Road, Pakistan</p>
        <a href={buildWhatsAppLink(generalInquiryMessage())} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          <MessageCircle className="h-4 w-4" /> Chat with Us on WhatsApp
        </a>
      </div>
    </div>
  )
}

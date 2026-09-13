import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Sun, ShieldCheck, Zap } from 'lucide-react'
import { buildWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp'

const BADGES = [
  { icon: Sun, label: 'Solar Solutions' },
  { icon: Zap, label: 'Home Appliances' },
  { icon: ShieldCheck, label: 'Trusted Products' },
  { icon: MessageCircle, label: 'WhatsApp Ordering' }
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Sun glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-solar-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-leaf-500/10 blur-3xl" />

      {/* Panel-grid motif */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.08]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 60 + 20}
              y={row * 60 + 20}
              width="52"
              height="52"
              rx="4"
              stroke="#F5A623"
              strokeWidth="1.5"
            />
          ))
        )}
      </svg>

      <div className="container-page relative grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-solar-300 ring-1 ring-inset ring-white/10">
            <Sun className="h-3.5 w-3.5" /> Solar Energy & Home Electronics
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            Power Your Home.
            <br />
            <span className="text-solar-400">Power Your Future.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-navy-200 sm:text-lg">
            Solar solutions and quality electronics for every home — from
            solar panels and inverters to appliances for your kitchen and
            living room.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/solar" className="btn btn-solar">
              Shop Solar Products
            </Link>
            <Link to="/electronics" className="btn bg-white text-navy-900 hover:bg-navy-50">
              Explore Electronics <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={buildWhatsAppLink(generalInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-medium text-navy-300 sm:text-sm">
                <Icon className="h-4 w-4 text-solar-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Visual: stylized solar panel + home illustration */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 ring-1 ring-white/10">
            <svg viewBox="0 0 320 260" className="w-full">
              {/* sun */}
              <circle cx="250" cy="55" r="30" fill="#F5A623" opacity="0.9" />
              {/* house base */}
              <rect x="40" y="150" width="180" height="90" rx="4" fill="#0E3A63" stroke="#1E5A93" strokeWidth="2" />
              <polygon points="30,150 130,90 230,150" fill="#164873" />
              {/* solar panel on roof */}
              <g transform="translate(55,105) rotate(-14)">
                {Array.from({ length: 3 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 34}
                    y="0"
                    width="30"
                    height="46"
                    rx="2"
                    fill="#1F8F3E"
                    stroke="#F5A623"
                    strokeWidth="1.2"
                  />
                ))}
              </g>
              {/* door */}
              <rect x="120" y="190" width="26" height="50" rx="2" fill="#04121F" />
              {/* window */}
              <rect x="65" y="175" width="26" height="26" rx="2" fill="#F5A623" opacity="0.85" />
              <rect x="165" y="175" width="26" height="26" rx="2" fill="#F5A623" opacity="0.85" />
              {/* ground line */}
              <line x1="10" y1="240" x2="300" y2="240" stroke="#1E5A93" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

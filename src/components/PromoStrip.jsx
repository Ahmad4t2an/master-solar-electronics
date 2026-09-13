import { Truck, ShieldCheck, MessageCircle, Headphones } from 'lucide-react'

const ITEMS = [
  { icon: Truck, label: 'Nationwide Delivery' },
  { icon: ShieldCheck, label: 'Genuine Products' },
  { icon: MessageCircle, label: 'WhatsApp Orders' },
  { icon: Headphones, label: 'Customer Support' }
]

export default function PromoStrip() {
  return (
    <div className="border-y border-navy-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:gap-6">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="h-5 w-5 shrink-0 text-leaf-600" strokeWidth={1.75} />
            <span className="text-xs font-medium text-navy-700 sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

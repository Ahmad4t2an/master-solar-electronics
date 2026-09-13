import { ShieldCheck, MessageCircle, Truck, HeartHandshake } from 'lucide-react'

const POINTS = [
  { icon: HeartHandshake, text: 'Personally handled by Master Akmal & Abdul Wahab' },
  { icon: MessageCircle, text: 'Direct WhatsApp support before and after your order' },
  { icon: ShieldCheck, text: 'Products sourced from known, reputable brands' },
  { icon: Truck, text: 'Delivery arranged across Pakistan' }
]

export default function CustomerTrust() {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-3xl bg-navy-50 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
      {POINTS.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-navy-700 shadow-card">
            <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
          </span>
          <p className="text-sm text-navy-700">{text}</p>
        </div>
      ))}
    </div>
  )
}

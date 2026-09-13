import { ShieldCheck, Truck, MessageCircle, Users } from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description: 'We source from reputable brands and suppliers so you get authentic, reliable products.'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Order from anywhere in Pakistan and we will arrange delivery to your doorstep.'
  },
  {
    icon: MessageCircle,
    title: 'Easy WhatsApp Ordering',
    description: 'No confusing checkout — just message us on WhatsApp and we handle the rest.'
  },
  {
    icon: Users,
    title: 'Family-Run Business',
    description: 'Run by Master Akmal and Abdul Wahab, built on personal service and long-term trust.'
  }
]

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {REASONS.map(({ icon: Icon, title, description }) => (
        <div key={title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
            <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{title}</h3>
          <p className="mt-1.5 text-sm text-navy-500">{description}</p>
        </div>
      ))}
    </div>
  )
}

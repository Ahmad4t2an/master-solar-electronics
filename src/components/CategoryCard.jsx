import { Link } from 'react-router-dom'
import { Sun, Tv, Refrigerator, CookingPot, Package } from 'lucide-react'

const ICON_MAP = { Sun, Tv, Refrigerator, CookingPot }

export default function CategoryCard({ to, name, tagline, icon, count }) {
  const Icon = ICON_MAP[icon] || Package
  return (
    <Link
      to={to}
      className="group flex flex-col items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-leaf-200 hover:shadow-cardHover"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-leaf-50 group-hover:text-leaf-700">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-navy-900">{name}</h3>
        {tagline && <p className="mt-0.5 text-xs text-navy-500">{tagline}</p>}
      </div>
      {typeof count === 'number' && (
        <span className="mt-auto text-xs font-medium text-leaf-600">{count} products</span>
      )}
    </Link>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ title, subtitle, viewAllTo }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm text-navy-500 sm:text-base">{subtitle}</p>}
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-leaf-600 hover:text-leaf-700 sm:flex"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

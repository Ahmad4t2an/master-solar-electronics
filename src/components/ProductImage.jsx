import { useState } from 'react'
import { Sun, Tv, Refrigerator, CookingPot, Package } from 'lucide-react'

const ICONS = {
  solar: Sun,
  electronics: Tv,
  'home-appliances': Refrigerator,
  'kitchen-appliances': CookingPot
}

const GRADIENTS = {
  solar: 'from-solar-100 via-solar-50 to-white',
  electronics: 'from-navy-100 via-navy-50 to-white',
  'home-appliances': 'from-leaf-100 via-leaf-50 to-white',
  'kitchen-appliances': 'from-navy-100 via-solar-50 to-white'
}

const ICON_COLOR = {
  solar: 'text-solar-600',
  electronics: 'text-navy-600',
  'home-appliances': 'text-leaf-600',
  'kitchen-appliances': 'text-navy-600'
}

/**
 * Renders a real product photo if `src` is provided, otherwise falls back to
 * clean, branded placeholder artwork instead of a mismatched stock photo.
 * Once you have verified product photography, just pass image URLs in
 * src/data/products.js and they will show automatically.
 */
export default function ProductImage({ src, alt, categoryGroup = 'electronics', className = '' }) {
  const [failed, setFailed] = useState(false)
  const [lastSrc, setLastSrc] = useState(src)

  // Reset the "failed" flag whenever a different image URL is passed in
  // (e.g. this component instance gets reused for a different product).
  if (src !== lastSrc) {
    setLastSrc(src)
    if (failed) setFailed(false)
  }

  if (src && !failed) {
    return (
      <img
        key={src}
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
        onError={() => setFailed(true)}
      />
    )
  }

  const Icon = ICONS[categoryGroup] || Package
  const gradient = GRADIENTS[categoryGroup] || GRADIENTS.electronics
  const iconColor = ICON_COLOR[categoryGroup] || ICON_COLOR.electronics

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={alt}
    >
      <Icon className={`h-10 w-10 ${iconColor}`} strokeWidth={1.5} />
      <span className="px-4 text-center text-[11px] font-medium leading-snug text-navy-600/70 line-clamp-2">
        {alt}
      </span>
    </div>
  )
}

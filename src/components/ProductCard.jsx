import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import { formatPKR, buildWhatsAppLink, productOrderMessage } from '../utils/whatsapp'

export default function ProductCard({ product }) {
  const discount =
    product.price && product.oldPrice && product.oldPrice > product.price
      ? Math.round(100 - (product.price / product.oldPrice) * 100)
      : null

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <Link
        to={`/product/${product.slug}`}
        className="relative block aspect-square w-full overflow-hidden bg-sand"
      >
        <ProductImage
          src={product.images?.[0]}
          alt={product.name}
          categoryGroup={product.categoryGroup}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {discount && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-leaf px-2.5 py-1 text-xs font-semibold text-white">
            {discount}% Off
          </span>
        )}
        {product.availability === 'Order on Demand' && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-navy-800/90 px-2.5 py-1 text-[11px] font-medium text-white">
            Order on Demand
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {product.brand && (
          <span className="text-xs font-semibold uppercase tracking-wide text-leaf-600">
            {product.brand}
          </span>
        )}
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-navy-900 hover:text-navy-600">
            {product.name}
          </h3>
        </Link>

        {product.specs?.length > 0 && (
          <p className="mt-1.5 line-clamp-2 text-xs text-navy-500">
            {product.specs.slice(0, 2).join(' • ')}
          </p>
        )}

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-base font-bold text-navy-900">
            {formatPKR(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-navy-400 line-through">
              {formatPKR(product.oldPrice)}
            </span>
          )}
        </div>
        {product.priceIsDemo && product.price && (
          <span className="mt-0.5 text-[10px] text-navy-400">
            Indicative price — confirm on WhatsApp
          </span>
        )}

        <div className="mt-4 flex flex-col gap-2 lg:flex-row">
          <Link
            to={`/product/${product.slug}`}
            className="btn btn-outline flex-1 !px-3 !py-2 text-xs"
          >
            View Details
          </Link>
          <a
            href={buildWhatsAppLink(productOrderMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp flex-1 !px-3 !py-2 text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Order
          </a>
        </div>
      </div>
    </div>
  )
}

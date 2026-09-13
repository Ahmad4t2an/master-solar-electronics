import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MessageCircle, ShoppingCart, CheckCircle2, ChevronRight } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products.js'
import { getCategoryBySlug } from '../data/categories.js'
import ProductImage from '../components/ProductImage.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPKR, buildWhatsAppLink, productOrderMessage } from '../utils/whatsapp'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Master Solar & Electronics`
      window.scrollTo({ top: 0 })
    }
  }, [product])

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-navy-900">Product not found</h1>
        <p className="mt-2 text-navy-500">This product may have been removed or renamed.</p>
        <Link to="/" className="btn btn-primary mt-6 inline-flex">Back to Home</Link>
      </div>
    )
  }

  const category = getCategoryBySlug(product.categoryGroup)
  const related = getRelatedProducts(product)
  const discount =
    product.price && product.oldPrice && product.oldPrice > product.price
      ? Math.round(100 - (product.price / product.oldPrice) * 100)
      : null

  const handleAddToCart = () => {
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container-page py-8 sm:py-12">
      <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-navy-500">
        <Link to="/" className="hover:text-navy-800">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to={`/${product.categoryGroup}`} className="hover:text-navy-800">{category?.name}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-navy-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl border border-navy-100 bg-sand">
          <ProductImage src={product.images?.[0]} alt={product.name} categoryGroup={product.categoryGroup} />
        </div>

        <div>
          {product.brand && (
            <span className="text-xs font-semibold uppercase tracking-wide text-leaf-600">{product.brand}</span>
          )}
          <h1 className="mt-1.5 font-display text-2xl font-bold text-navy-900 sm:text-3xl">{product.name}</h1>
          {product.model && <p className="mt-1 text-sm text-navy-500">Model: {product.model}</p>}

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-navy-900">{formatPKR(product.price)}</span>
            {product.oldPrice && (
              <span className="text-base text-navy-400 line-through">{formatPKR(product.oldPrice)}</span>
            )}
            {discount && (
              <span className="rounded-full bg-leaf-50 px-2.5 py-1 text-xs font-semibold text-leaf-700">
                {discount}% Off
              </span>
            )}
          </div>
          {product.priceIsDemo && product.price && (
            <p className="mt-1 text-xs text-navy-400">Indicative price — confirm final price on WhatsApp.</p>
          )}

          <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-leaf-700">
            <CheckCircle2 className="h-4 w-4" /> {product.availability}
          </p>

          {product.specs?.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-2 rounded-lg bg-navy-50 px-3 py-2 text-sm text-navy-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                  {spec}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-sm leading-relaxed text-navy-600">{product.description}</p>

          <div className="mt-6 rounded-xl border border-navy-100 bg-white p-4">
            <h3 className="font-display text-sm font-semibold text-navy-900">Why buy from Master</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-navy-600">
              <li>• Direct WhatsApp support from a family-run local business</li>
              <li>• Help choosing the right model or solar sizing for your needs</li>
              <li>• Nationwide delivery arranged after order confirmation</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink(productOrderMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp flex-1"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <button onClick={handleAddToCart} className="btn btn-outline flex-1">
              <ShoppingCart className="h-4 w-4" /> {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-navy-900">Related Products</h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  )
}

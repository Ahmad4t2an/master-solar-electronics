import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, MessageCircle, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import ProductImage from '../components/ProductImage.jsx'
import { formatPKR, buildWhatsAppLink, cartOrderMessage } from '../utils/whatsapp'

export default function Cart() {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart()

  useEffect(() => {
    document.title = 'Your Cart | Master Solar & Electronics'
  }, [])

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center py-20 text-center">
        <ShoppingBag className="h-12 w-12 text-navy-300" />
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">Your cart is empty</h1>
        <p className="mt-2 text-navy-500">Browse our products and add items to order on WhatsApp.</p>
        <Link to="/" className="btn btn-primary mt-6">Continue Shopping</Link>
      </div>
    )
  }

  const hasKnownPrices = items.some((i) => i.price)

  return (
    <div className="container-page py-10 sm:py-14">
      <h1 className="font-display text-3xl font-bold text-navy-900">Your Cart</h1>
      <p className="mt-2 text-sm text-navy-500">
        This is a frontend cart only — checkout happens directly on WhatsApp.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
            {items.map((item) => (
              <div key={item.slug} className="flex gap-4 p-4 sm:p-5">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-sand">
                  <ProductImage src={item.image} alt={item.name} />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/product/${item.slug}`} className="font-display text-sm font-semibold text-navy-900 hover:text-navy-600">
                        {item.name}
                      </Link>
                      {item.brand && <p className="text-xs text-navy-500">{item.brand}</p>}
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      aria-label={`Remove ${item.name}`}
                      className="text-navy-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-navy-200 px-2 py-1">
                      <button
                        onClick={() => updateQty(item.slug, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="rounded-full p-1 hover:bg-navy-50"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-5 text-center text-sm font-medium">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.slug, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="rounded-full p-1 hover:bg-navy-50"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-display text-sm font-semibold text-navy-900">
                      {item.price ? formatPKR(item.price * item.qty) : 'Price on WhatsApp'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={clearCart} className="mt-4 text-sm font-medium text-navy-400 hover:text-red-500">
            Clear cart
          </button>
        </div>

        <div className="h-fit rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-navy-900">Order Summary</h2>
          <div className="mt-4 flex items-center justify-between text-sm text-navy-600">
            <span>Items</span>
            <span>{items.reduce((s, i) => s + i.qty, 0)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between font-display text-base font-semibold text-navy-900">
            <span>Estimated Total</span>
            <span>{hasKnownPrices ? formatPKR(totalPrice) : 'Price on WhatsApp'}</span>
          </div>
          <p className="mt-2 text-xs text-navy-400">
            Final price and delivery will be confirmed on WhatsApp.
          </p>

          <a
            href={buildWhatsAppLink(cartOrderMessage(items))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp mt-6 w-full"
          >
            <MessageCircle className="h-4 w-4" /> Order Selected Items on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

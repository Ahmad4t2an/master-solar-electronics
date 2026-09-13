import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, emptyMessage = 'No products found.' }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-navy-200 py-16 text-center text-navy-500">
        {emptyMessage}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  )
}

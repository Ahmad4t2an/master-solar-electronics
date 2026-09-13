import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'
import { searchProducts } from '../data/products.js'
import ProductGrid from '../components/ProductGrid.jsx'

export default function Search() {
  const [params, setParams] = useSearchParams()
  const initialQuery = params.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    document.title = 'Search Products | Master Solar & Electronics'
  }, [])

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const results = searchProducts(query)

  const handleSubmit = (e) => {
    e.preventDefault()
    setParams(query ? { q: query } : {})
  }

  return (
    <div className="container-page py-10 sm:py-14">
      <h1 className="font-display text-3xl font-bold text-navy-900">Search Products</h1>

      <form onSubmit={handleSubmit} className="relative mt-6 max-w-xl">
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name, brand, model or category..."
          className="w-full rounded-full border border-navy-200 py-3 pl-5 pr-12 text-sm focus:border-navy-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-navy p-2 text-white hover:bg-navy-600"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8">
        {query ? (
          <>
            <p className="mb-4 text-sm text-navy-500">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <ProductGrid
              products={results}
              emptyMessage="No products matched your search. Try a different keyword or ask us directly on WhatsApp."
            />
          </>
        ) : (
          <p className="text-navy-500">Start typing above to search our full catalog.</p>
        )}
      </div>
    </div>
  )
}

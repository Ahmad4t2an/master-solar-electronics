import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { SlidersHorizontal, X } from 'lucide-react'

export default function ProductFilters({
  subcategories = [],
  brands = [],
  activeSubcategory,
  onSubcategoryChange,
  activeBrand,
  onBrandChange,
  availability,
  onAvailabilityChange,
  sortBy,
  onSortChange
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [mobileOpen])

  const Filters = (
    <div className="space-y-6">
      {subcategories.length > 0 && (
        <div>
          <h4 className="mb-2.5 text-sm font-semibold text-navy-900">Category</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSubcategoryChange('')}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                !activeSubcategory ? 'bg-navy text-white' : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
              }`}
            >
              All
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSubcategoryChange(sub)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  activeSubcategory === sub
                    ? 'bg-navy text-white'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {brands.length > 0 && (
        <div>
          <h4 className="mb-2.5 text-sm font-semibold text-navy-900">Brand</h4>
          <select
            value={activeBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="w-full rounded-lg border border-navy-200 py-2 px-3 text-sm focus:border-navy-400 focus:outline-none"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <h4 className="mb-2.5 text-sm font-semibold text-navy-900">Availability</h4>
        <select
          value={availability}
          onChange={(e) => onAvailabilityChange(e.target.value)}
          className="w-full rounded-lg border border-navy-200 py-2 px-3 text-sm focus:border-navy-400 focus:outline-none"
        >
          <option value="">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Limited Stock">Limited Stock</option>
          <option value="Order on Demand">Order on Demand</option>
        </select>
      </div>

      <div>
        <h4 className="mb-2.5 text-sm font-semibold text-navy-900">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-lg border border-navy-200 py-2 px-3 text-sm focus:border-navy-400 focus:outline-none"
        >
          <option value="popular">Popular</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  )

  return (
    <>
      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="btn btn-outline w-full"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters & Sort
        </button>
      </div>

      <aside className="hidden w-64 shrink-0 lg:block">{Filters}</aside>

      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div className="absolute inset-0 bg-navy-900/40" onClick={() => setMobileOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-navy-900">Filters & Sort</h3>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {Filters}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary mt-6 w-full"
              >
                Show Results
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

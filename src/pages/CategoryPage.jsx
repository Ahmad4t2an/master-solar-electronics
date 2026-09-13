import { useEffect, useMemo, useState } from 'react'
import { getCategoryBySlug } from '../data/categories.js'
import { getProductsByCategory } from '../data/products.js'
import ProductFilters from '../components/ProductFilters.jsx'
import ProductGrid from '../components/ProductGrid.jsx'

export default function CategoryPage({ categoryGroup }) {
  const category = getCategoryBySlug(categoryGroup)
  const allProducts = useMemo(() => getProductsByCategory(categoryGroup), [categoryGroup])

  const [subcategory, setSubcategory] = useState('')
  const [brand, setBrand] = useState('')
  const [availability, setAvailability] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  useEffect(() => {
    setSubcategory('')
    setBrand('')
    setAvailability('')
    setSortBy('popular')
    document.title = `${category?.name || 'Products'} | Master Solar & Electronics`
  }, [categoryGroup, category])

  const brands = useMemo(
    () => [...new Set(allProducts.map((p) => p.brand).filter(Boolean))].sort(),
    [allProducts]
  )

  const filtered = useMemo(() => {
    let list = allProducts
    if (subcategory) list = list.filter((p) => p.subcategory === subcategory)
    if (brand) list = list.filter((p) => p.brand === brand)
    if (availability) list = list.filter((p) => p.availability === availability)

    list = [...list]
    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity))
    } else if (sortBy === 'newest') {
      list.reverse()
    } else {
      list.sort((a, b) => Number(b.bestSeller || b.featured) - Number(a.bestSeller || a.featured))
    }
    return list
  }, [allProducts, subcategory, brand, availability, sortBy])

  if (!category) return null

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">{category.name}</h1>
        <p className="mt-2 text-navy-500">{category.tagline}</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <ProductFilters
          subcategories={category.subcategories}
          brands={brands}
          activeSubcategory={subcategory}
          onSubcategoryChange={setSubcategory}
          activeBrand={brand}
          onBrandChange={setBrand}
          availability={availability}
          onAvailabilityChange={setAvailability}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="flex-1">
          <p className="mb-4 text-sm text-navy-500">{filtered.length} products</p>
          <ProductGrid products={filtered} emptyMessage="No products match these filters yet — try adjusting them or ask us on WhatsApp." />
        </div>
      </div>
    </div>
  )
}

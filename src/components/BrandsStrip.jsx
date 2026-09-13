const BRANDS = [
  'Haier', 'Dawlance', 'Kenwood', 'Gree', 'PEL', 'Orient',
  'Samsung', 'TCL', 'Panasonic', 'Anex', 'Westpoint', 'Nasgas'
]

export default function BrandsStrip() {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
      <p className="mb-5 text-center text-sm font-medium text-navy-500">
        Brands we stock products from
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="font-display text-sm font-semibold text-navy-400 transition-colors hover:text-navy-800 sm:text-base"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}

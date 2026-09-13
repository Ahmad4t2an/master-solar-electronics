import { useEffect } from 'react'
import { Tag, MessageCircle } from 'lucide-react'
import { getDeals } from '../data/products.js'
import { solarPackages } from '../data/packages.js'
import ProductGrid from '../components/ProductGrid.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { buildWhatsAppLink, productInquiryMessage } from '../utils/whatsapp'

export default function Deals() {
  const deals = getDeals()

  useEffect(() => {
    document.title = 'Deals & Offers | Master Solar & Electronics'
  }, [])

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-solar-50 text-solar-600">
          <Tag className="h-5 w-5" />
        </span>
        <div>
          <h1 className="font-display text-3xl font-bold text-navy-900">Deals & Offers</h1>
        </div>
      </div>
      <p className="max-w-2xl text-navy-500">
        A selection of current discounted products. Prices below are current
        offer pricing — always confirm the final price and availability with
        our team on WhatsApp before ordering.
      </p>

      <div className="mt-10">
        <SectionHeading title="Best Deals" subtitle="Discounted solar products, appliances & electronics" />
        <ProductGrid products={deals} emptyMessage="No active deals right now — check back soon or ask us on WhatsApp for current offers." />
      </div>

      <div className="mt-16">
        <SectionHeading title="Solar Packages" subtitle="Ready-made solar setups sized to common household needs" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solarPackages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-navy-900">{pkg.name}</h3>
              <p className="mt-1 text-sm text-navy-500">{pkg.tagline}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-navy-600">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solar-500" />
                    {h}
                  </li>
                ))}
              </ul>
              {pkg.isSample && (
                <p className="mt-4 text-[11px] text-navy-400">
                  Sample configuration — final components sized to your load.
                </p>
              )}
              <a
                href={buildWhatsAppLink(productInquiryMessage(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-5"
              >
                <MessageCircle className="h-4 w-4" /> Ask About This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

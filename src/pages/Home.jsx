import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import PromoStrip from '../components/PromoStrip.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import CustomerTrust from '../components/CustomerTrust.jsx'
import BrandsStrip from '../components/BrandsStrip.jsx'
import WhatsAppCTA from '../components/WhatsAppCTA.jsx'
import { CATEGORY_GROUPS } from '../data/categories.js'
import {
  getProductsByCategory,
  getBestSellers,
  getDeals
} from '../data/products.js'

export default function Home() {
  useEffect(() => {
    document.title = 'Master Solar & Electronics | Solar Systems & Home Electronics in Pakistan'
  }, [])

  const solarProducts = getProductsByCategory('solar').slice(0, 8)
  const electronicsProducts = getProductsByCategory('electronics').slice(0, 8)
  const homeAppliances = getProductsByCategory('home-appliances').slice(0, 8)
  const kitchenAppliances = getProductsByCategory('kitchen-appliances').slice(0, 8)
  const bestSellers = getBestSellers().slice(0, 8)
  const deals = getDeals().slice(0, 4)

  return (
    <>
      <Hero />
      <PromoStrip />

      <section className="container-page py-14 sm:py-20">
        <SectionHeading
          title="Shop by Category"
          subtitle="Everything for your home, from solar power to the kitchen counter"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORY_GROUPS.map((cat) => (
            <CategoryCard
              key={cat.slug}
              to={`/${cat.slug}`}
              name={cat.name}
              tagline={cat.tagline}
              icon={cat.icon}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Solar Solutions"
            subtitle="Panels, inverters, batteries and solar-powered essentials"
            viewAllTo="/solar"
          />
          <ProductGrid products={solarProducts} />
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <SectionHeading
          title="Featured Electronics"
          subtitle="TVs, sound systems and everyday personal electronics"
          viewAllTo="/electronics"
        />
        <ProductGrid products={electronicsProducts} />
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Home Appliances"
            subtitle="ACs, refrigerators, washing machines and more"
            viewAllTo="/home-appliances"
          />
          <ProductGrid products={homeAppliances} />
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <SectionHeading
          title="Kitchen Appliances"
          subtitle="Ovens, air fryers, blenders and kitchen essentials"
          viewAllTo="/kitchen-appliances"
        />
        <ProductGrid products={kitchenAppliances} />
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading title="Best Sellers" subtitle="Our customers' most-ordered products" />
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {deals.length > 0 && (
        <section className="container-page py-14 sm:py-20">
          <SectionHeading title="Special Deals" subtitle="Limited-time offers — confirm final price on WhatsApp" viewAllTo="/deals" />
          <ProductGrid products={deals} />
        </section>
      )}

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading title="Why Choose Master" subtitle="What makes us different" />
          <WhyChooseUs />
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <CustomerTrust />
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <BrandsStrip />
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-24">
        <WhatsAppCTA />
      </section>
    </>
  )
}

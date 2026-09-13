import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const CategoryPage = lazy(() => import('./pages/CategoryPage.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'))
const Deals = lazy(() => import('./pages/Deals.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Search = lazy(() => import('./pages/Search.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy-200 border-t-navy-700" />
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<CategoryPage categoryGroup="solar" />} />
            <Route path="/electronics" element={<CategoryPage categoryGroup="electronics" />} />
            <Route path="/home-appliances" element={<CategoryPage categoryGroup="home-appliances" />} />
            <Route path="/kitchen-appliances" element={<CategoryPage categoryGroup="kitchen-appliances" />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}


import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Search, MessageCircle, ShoppingCart } from 'lucide-react'
import logo from '../assets/logo.png'
import { useCart } from '../context/CartContext.jsx'
import { buildWhatsAppLink, generalInquiryMessage } from '../utils/whatsapp'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/solar', label: 'Solar Products' },
  { to: '/electronics', label: 'Electronics' },
  { to: '/home-appliances', label: 'Home Appliances' },
  { to: '/kitchen-appliances', label: 'Kitchen Appliances' },
  { to: '/deals', label: 'Deals' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // `navigate` from useNavigate() never changes identity between renders, so
  // depending on it here would only run this once (on mount) and never again
  // on an actual route change. Depend on the current path instead so the
  // mobile menu and search box always close after navigating.
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Lock background scroll while the mobile menu is open, and always
  // restore it on close/unmount so the page never gets stuck non-scrollable.
  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [menuOpen])

  const submitSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="hidden bg-navy-900 text-navy-50 sm:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs">
          <span>42 DB Main Yazman Road, Pakistan</span>
          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-leaf-300 hover:text-leaf-200"
          >
            <MessageCircle className="h-3.5 w-3.5" /> +92 345 7286042
          </a>
        </div>
      </div>

      <div className="container-page flex items-center gap-4 py-3">
        <button
          type="button"
          className="relative z-10 rounded-lg p-2 text-navy-800 hover:bg-navy-50 lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Master Solar & Electronics" className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-50 text-navy-800'
                    : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <form onSubmit={submitSearch} className="flex items-center">
                <input
                  autoFocus
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, brands..."
                  className="w-56 rounded-full border border-navy-200 py-2 pl-4 pr-9 text-sm focus:border-navy-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-2 text-navy-500 hover:text-navy-800"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2.5 text-navy-700 hover:bg-navy-50"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          <button
            aria-label="Open search"
            onClick={() => navigate('/search')}
            className="rounded-full p-2.5 text-navy-700 hover:bg-navy-50 sm:hidden"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/cart"
            aria-label="View cart"
            className="relative rounded-full p-2.5 text-navy-700 hover:bg-navy-50"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-solar px-1 text-[10px] font-bold text-navy-900">
                {totalItems}
              </span>
            )}
          </Link>

          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-leaf px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-leaf-600 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="rounded-full bg-leaf p-2.5 text-white shadow-card hover:bg-leaf-600 sm:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile menu drawer — rendered via portal directly into <body> so it
          always covers the full viewport, independent of the header's own
          backdrop-blur (which would otherwise clip a nested fixed element
          to the header's own box in most browsers). */}
      {menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div
              className="absolute inset-0 bg-navy-900/40"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] overflow-y-auto bg-white p-5 shadow-cardHover">
              <div className="flex items-center justify-between">
                <img src={logo} alt="Master Solar & Electronics" className="h-10 w-auto" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-2 text-navy-700 hover:bg-navy-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive ? 'bg-navy-50 text-navy-900' : 'text-navy-700 hover:bg-navy-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <a
                href={buildWhatsAppLink(generalInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-6 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>,
          document.body
        )}
    </header>
  )
}

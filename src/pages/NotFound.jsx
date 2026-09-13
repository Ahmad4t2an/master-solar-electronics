import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-6xl font-bold text-navy-200">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-2 text-navy-500">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-6">Back to Home</Link>
    </div>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Reece Bunnage'
  }, [])

  return (
    <section className="shell flex flex-col items-center justify-center py-32 text-center">
      <p className="font-head text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-white">This page doesn&rsquo;t exist</h1>
      <p className="mt-4 max-w-md text-mist">
        The link may be out of date. Everything lives under Home, About, and Projects.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Collapse the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  const linkClass = ({ isActive }) =>
    `font-head text-sm font-bold tracking-wide transition ${
      isActive ? 'text-accent' : 'text-white hover:text-mist'
    }`

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur">
      <nav className="shell flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-head text-lg font-bold text-white"
          onClick={() => setOpen(false)}
        >
          Reece <span className="text-accent">Bunnage</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end>
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-accent px-4 py-1.5 font-head text-sm
                       font-bold text-accent transition hover:bg-accent hover:text-ink"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-white md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="shell flex flex-col gap-4 py-5">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="font-head text-sm font-bold text-accent"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


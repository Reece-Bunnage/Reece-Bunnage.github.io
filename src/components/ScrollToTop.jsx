import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll on navigation, and offers a back-to-top button once the
// visitor is a screen or so down the page.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
                 rounded-full bg-accent text-ink shadow-lg shadow-ink/40
                 transition hover:bg-mist"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 4l8 8-1.41 1.41L13 7.83V20h-2V7.83l-5.59 5.58L4 12z" />
      </svg>
    </button>
  )
}

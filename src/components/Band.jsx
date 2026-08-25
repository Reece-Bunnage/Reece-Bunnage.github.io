// Full-bleed section background. The pages use `.shell` for width, which means
// there is no element spanning the viewport to paint — this wraps one around it.
const TONES = {
  paper: 'bg-white',
  cream: 'bg-cream',
  // Koleton's band runs steel -> ground, but steel is light enough that white
  // text on it drops to 2.78:1. Both ends here are dark, so all text passes.
  teal: 'bg-gradient-to-b from-ground to-ink text-white',
}

export default function Band({ tone = 'paper', children, className = '', pad = true }) {
  return (
    <section className={`${TONES[tone]} ${className}`}>
      <div className={`shell ${pad ? 'py-16 sm:py-20' : ''}`}>{children}</div>
    </section>
  )
}

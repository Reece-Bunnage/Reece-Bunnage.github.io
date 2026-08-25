import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

function Portrait() {
  const [failed, setFailed] = useState(false)

  const frame =
    'h-56 w-56 rounded-full border-4 border-accent object-cover shadow-2xl shadow-ink/50 sm:h-72 sm:w-72'

  if (failed) {
    return (
      <div
        className={`${frame} flex items-center justify-center bg-ink font-head text-6xl font-bold text-accent`}
        aria-hidden="true"
      >
        RB
      </div>
    )
  }

  return (
    <img
      src="/images/portrait.jpg"
      alt={`Portrait of ${profile.name}`}
      onError={() => setFailed(true)}
      className={frame}
    />
  )
}

export default function Hero() {
  return (
    <section className="shell grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto] md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="font-head text-sm font-bold uppercase tracking-[0.2em] text-accent">
          {profile.role}
        </p>
        <h1 className="mt-3 text-white">{profile.name}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects" className="btn-primary">
            See what I&rsquo;ve built
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Explore my GitHub
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </motion.div>

      <motion.div
        className="mx-auto md:mx-0"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <Portrait />
      </motion.div>
    </section>
  )
}

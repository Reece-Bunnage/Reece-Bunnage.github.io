import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="shell flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-head text-base font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-mist">
            {profile.role} &middot; {profile.location}
          </p>
        </div>
        <SocialLinks onDark />
      </div>
      <div className="shell border-t border-white/10 py-5">
        <p className="text-center text-xs text-steel">
          Built with React, Vite, and Tailwind CSS. &nbsp;
          <Link to="/projects" className="text-accent hover:underline">
            See the projects
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

import { profile } from '../data/profile.js'

const ICONS = {
  email: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
  linkedin: (
    <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18v-7.2H6.1V18h2.24zM7.22 9.62a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zM18 18v-4.1c0-2.16-1.15-3.17-2.69-3.17a2.32 2.32 0 00-2.1 1.16v-1H11v7.11h2.24v-3.93c0-1 .19-2 1.45-2s1.09 1.17 1.09 2.05V18H18z" />
  ),
  github: (
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12 10 10 0 0012 2z" />
  ),
  resume: (
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm0 2l4.5 4.5H14V4zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" />
  ),
}

const LINKS = [
  { key: 'email', label: 'Email', href: `mailto:${profile.email}` },
  { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin, external: true },
  { key: 'github', label: 'GitHub', href: profile.github, external: true },
  { key: 'resume', label: 'Resume', href: profile.resume, external: true },
]

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {LINKS.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            aria-label={link.label}
            title={link.label}
            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2
                       border-mist/40 text-mist transition
                       hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              {ICONS[link.key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

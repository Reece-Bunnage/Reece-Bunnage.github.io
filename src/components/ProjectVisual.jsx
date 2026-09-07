import { useState } from 'react'

// Inline glyphs used when a project has no screenshot (client/internal systems),
// and as the fallback when an image path has not been filled in yet.
const GLYPHS = {
  flow: (
    <>
      <rect x="8" y="10" width="18" height="12" rx="3" />
      <rect x="38" y="10" width="18" height="12" rx="3" />
      <rect x="23" y="42" width="18" height="12" rx="3" />
      <path d="M26 16h12M17 22v10h30v10M47 22v10" />
    </>
  ),
  shield: (
    <>
      <path d="M32 8l18 7v14c0 12-7.6 20.6-18 25-10.4-4.4-18-13-18-25V15z" />
      <path d="M24 32l6 6 12-12" />
    </>
  ),
  globe: (
    <>
      <circle cx="32" cy="32" r="22" />
      <path d="M10 32h44M32 10c6 7 9 14 9 22s-3 15-9 22c-6-7-9-14-9-22s3-15 9-22z" />
    </>
  ),
  chart: (
    <>
      <path d="M10 50h44" />
      <rect x="15" y="30" width="8" height="20" rx="2" />
      <rect x="28" y="20" width="8" height="30" rx="2" />
      <rect x="41" y="36" width="8" height="14" rx="2" />
    </>
  ),
  search: (
    <>
      <circle cx="28" cy="28" r="15" />
      <path d="M39 39l13 13" />
    </>
  ),
  game: (
    <>
      <rect x="8" y="20" width="48" height="24" rx="12" />
      <path d="M20 28v8M16 32h8M40 30h.01M46 36h.01" />
    </>
  ),
  // A rule list where one row has been unlatched — the per-rule bypass.
  rules: (
    <>
      <path d="M12 18h28M12 32h28M12 46h16" />
      <circle cx="48" cy="46" r="7" />
      <path d="M48 39v-4a5 5 0 019-3" />
    </>
  ),
  ai: (
    <>
      <path d="M32 10v14M32 40v14M14 32h14M36 32h14" />
      <path d="M22 22l8 8M42 42l-8-8M42 22l-8 8M22 42l8-8" />
      <circle cx="32" cy="32" r="4" />
    </>
  ),
}

// The same glyph set drawn inline for use on a light surface — no dark plate,
// no fixed size. Used for the per-section badges on a multi-section case study.
export function Glyph({ icon, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {GLYPHS[icon] || GLYPHS.globe}
    </svg>
  )
}

function Placeholder({ icon, className }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-ground to-ink ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {GLYPHS[icon] || GLYPHS.globe}
      </svg>
    </div>
  )
}

// A brand logo is artwork, not a screenshot: it needs breathing room and its own
// background rather than being cropped to fill. Cream keeps it off the white card.
function LogoPlate({ logo, className }) {
  return (
    <div
      className={`flex items-center justify-center border-b border-smoke-light
                  bg-cream p-6 sm:p-8 ${className}`}
    >
      {/* Capped: the source is 800px wide, and letting it fill a full-width
          detail-page plate blows the wordmark up past its usable size. */}
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className="max-h-full w-full max-w-[420px] object-contain"
      />
    </div>
  )
}

export default function ProjectVisual({ project, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (project.logo) {
    return <LogoPlate logo={project.logo} className={className} />
  }

  if (!project.image || failed) {
    return <Placeholder icon={project.icon} className={className} />
  }

  return (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover object-top ${className}`}
    />
  )
}

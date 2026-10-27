import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Band from '../components/Band.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { Glyph } from '../components/ProjectVisual.jsx'
import { certifications, communities, coursework } from '../data/profile.js'

function Card({ title, icon, children }) {
  return (
    <Reveal className="h-full">
      <div className="card h-full">
        <div className="flex items-center gap-3">
          {icon && (
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center
                         rounded-xl bg-mist/60 text-ground"
            >
              <Glyph icon={icon} className="h-6 w-6" />
            </span>
          )}
          <h2 className="!pt-0 text-xl sm:text-2xl">{title}</h2>
        </div>
        <div className="mt-2 h-1 w-12 rounded-full bg-steel" />
        <div className="mt-5">{children}</div>
      </div>
    </Reveal>
  )
}

// Earned and in-progress have to be tellable apart without relying on colour,
// so the two badges differ in fill as well as wording: earned is a solid tag,
// in progress is an outline.
function StatusBadge({ status, date }) {
  const earned = status === 'Earned'
  return (
    <p
      className={
        earned
          ? 'tag'
          : 'inline-block rounded-full border border-steel px-3 py-1 text-xs font-semibold text-ground'
      }
    >
      {earned ? `${status} ${date}` : `${status}: ${date}`}
    </p>
  )
}

function CertCard({ cert }) {
  return (
    <div className="card flex h-full flex-col">
      <p className="text-sm font-semibold uppercase tracking-wide text-smoke-mid">
        {cert.issuer}
      </p>
      <h3 className="!pt-0 mt-2 text-lg sm:text-xl">{cert.name}</h3>
      <div className="mt-3">
        <StatusBadge status={cert.status} date={cert.date} />
      </div>
      <p className="mt-4 text-base leading-relaxed text-smoke-dark">{cert.what}</p>
    </div>
  )
}

export default function Credentials() {
  useEffect(() => {
    document.title = 'Credentials | Reece Bunnage'
  }, [])

  return (
    <>
      <Band tone="paper">
        <SectionHeading
          title="Credentials"
          subtitle="Certifications, coursework, and competitions, including the ones I'm still working toward. Anything in progress says so, with the date I'm sitting it."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06} className="h-full">
              <CertCard cert={cert} />
            </Reveal>
          ))}
        </div>
      </Band>

      <Band tone="cream">
        <div className="grid gap-8 md:grid-cols-2">
          <Card title="Relevant Coursework" icon="book">
            <ul className="space-y-4">
              {coursework.map((course) => (
                <li key={course.code} className="border-l-2 border-steel pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-head font-bold text-ground">{course.name}</p>
                    <span className="text-sm font-semibold text-smoke-mid">
                      {course.code}
                    </span>
                  </div>
                  <p className="text-sm italic text-smoke-mid">{course.note}</p>
                  {course.what && (
                    <p className="mt-2 text-sm leading-relaxed text-smoke-dark">
                      {course.what}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Competitions & Communities" icon="badge">
            <ul className="space-y-4">
              {communities.map((item) => (
                <li
                  key={item.name}
                  className="relative pl-5
                             before:absolute before:left-0 before:top-2.5 before:h-1.5
                             before:w-1.5 before:rounded-full before:bg-steel"
                >
                  <p className="font-head font-bold text-ink">{item.name}</p>
                  <p className="text-sm text-smoke-mid">{item.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-smoke-dark">
              Awards and the rest of my background are on the{' '}
              <Link
                to="/about"
                className="font-semibold text-ground underline decoration-steel
                           decoration-2 underline-offset-2 hover:decoration-ground"
              >
                About page
              </Link>
              .
            </p>
          </Card>
        </div>
      </Band>

      <ContactCta />
    </>
  )
}

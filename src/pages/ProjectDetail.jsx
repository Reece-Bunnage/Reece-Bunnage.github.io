import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectVisual, { Glyph } from '../components/ProjectVisual.jsx'
import Gallery from '../components/Gallery.jsx'
import TechTags from '../components/TechTags.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { getProject, projects } from '../data/projects.js'

function Bullets({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((bullet) => (
        <li
          key={bullet}
          className="relative pl-6 leading-relaxed text-smoke-dark
                     before:absolute before:left-0 before:top-2.5 before:h-2
                     before:w-2 before:rounded-full before:bg-steel"
        >
          {bullet}
        </li>
      ))}
    </ul>
  )
}

// The highlighted closing statement — an `outcome` string, or a `takeaway`
// whose label names the kind of call being made ("The call I'd defend").
function Callout({ label, children }) {
  return (
    <p
      className="mt-8 rounded-xl border-l-4 border-ground bg-mist/25 p-5
                 font-head font-bold text-ground"
    >
      {label && <span className="text-ink">{label}: </span>}
      {children}
    </p>
  )
}

// One project inside a multi-project engagement. Same shape as a standalone
// project page, minus the visual — the glyph badge carries that job here.
function ProjectSection({ section, index }) {
  return (
    <Reveal delay={index * 0.06} className="mt-8">
      <section id={section.id} className="card scroll-mt-24">
        <div className="flex items-start gap-4">
          <span
            className="hidden shrink-0 rounded-xl bg-mist/50 p-2.5 text-ground sm:block"
            aria-hidden="true"
          >
            <Glyph icon={section.icon} className="h-7 w-7" />
          </span>
          <div>
            <p className="font-head text-sm font-bold text-steel">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h2 className="!pt-0 mt-1 text-2xl sm:text-3xl">{section.title}</h2>
          </div>
        </div>

        <TechTags tags={section.tags} className="mt-5" />

        <p className="mt-6 border-l-2 border-steel pl-4 text-lg leading-relaxed text-ink">
          {section.summary}
        </p>

        <div className="prose-body mt-6">
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-8 !pt-0 text-lg sm:text-xl">{section.bulletsTitle}</h3>
        <Bullets items={section.bullets} />

        {section.takeaway && (
          <Callout label={section.takeaway.label}>{section.takeaway.text}</Callout>
        )}
      </section>
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Reece Bunnage`
  }, [project])

  if (!project) return <Navigate to="/projects" replace />

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]
  const sections = project.sections ?? []

  return (
    <>
      <article className="shell py-12 sm:py-16">
        <Link
          to="/projects"
          className="font-head text-sm font-bold text-ground hover:text-ink"
        >
          <span aria-hidden="true">&larr;</span> All projects
        </Link>

        <Reveal className="mt-6">
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-smoke-mid">
              {project.context}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl">{project.title}</h1>
            {project.meta && (
              <p className="mt-2 text-sm font-semibold text-smoke-mid">
                {project.meta}
              </p>
            )}
            <TechTags tags={project.tags} className="mt-5" />

            {project.gallery ? (
              <Gallery items={project.gallery} />
            ) : (
              <ProjectVisual
                project={project}
                className={`mt-8 w-full rounded-xl ${
                  // A logo needs far less room than a screenshot does.
                  project.logo ? 'h-40 sm:h-48' : 'h-56 sm:h-80'
                }`}
              />
            )}

            <div className="prose-body mt-8">
              {project.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {project.bullets?.length > 0 && (
              <>
                <h2 className="mt-8 text-xl sm:text-2xl">{project.bulletsTitle}</h2>
                <Bullets items={project.bullets} />
              </>
            )}

            {project.outcome && <Callout>{project.outcome}</Callout>}

            {project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ground px-5 py-2.5
                               font-head text-sm font-bold text-white transition hover:bg-ink"
                  >
                    {link.label} <span aria-hidden="true">&#8599;</span>
                  </a>
                ))}
              </div>
            )}

            {project.note && (
              <p className="mt-6 text-sm italic text-smoke-mid">{project.note}</p>
            )}

            {sections.length > 0 && (
              <nav aria-label="Projects on this page" className="mt-8 border-t border-smoke-light pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-smoke-mid">
                  On this page
                </p>
                <ol className="mt-3 space-y-2">
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="font-head text-sm font-bold text-ground hover:text-ink"
                      >
                        <span className="text-steel">
                          {String(i + 1).padStart(2, '0')}.{' '}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </Reveal>

        {sections.map((section, i) => (
          <ProjectSection key={section.id} section={section} index={i} />
        ))}

        <div className="mt-8 text-right">
          <Link
            to={`/projects/${next.slug}`}
            className="font-head text-sm font-bold text-ground hover:text-ink"
          >
            Next: {next.title} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <ContactCta />
    </>
  )
}

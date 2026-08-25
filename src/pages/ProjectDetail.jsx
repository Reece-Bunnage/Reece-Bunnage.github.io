import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual.jsx'
import Gallery from '../components/Gallery.jsx'
import TechTags from '../components/TechTags.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { getProject, projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Reece Bunnage`
  }, [project])

  if (!project) return <Navigate to="/projects" replace />

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <article className="shell py-12 sm:py-16">
        <Link
          to="/projects"
          className="font-head text-sm font-bold text-accent hover:text-mist"
        >
          <span aria-hidden="true">&larr;</span> All projects
        </Link>

        <Reveal className="mt-6">
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-smoke-mid">
              {project.context}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl">{project.title}</h1>
            <TechTags tags={project.tags} className="mt-5" />

            {project.gallery ? (
              <Gallery items={project.gallery} />
            ) : (
              <ProjectVisual
                project={project}
                className="mt-8 h-56 w-full rounded-xl sm:h-80"
              />
            )}

            <div className="prose-body mt-8">
              {project.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-8 text-xl sm:text-2xl">{project.bulletsTitle}</h2>
            <ul className="mt-4 space-y-3">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-6 leading-relaxed text-smoke-dark
                             before:absolute before:left-0 before:top-2.5 before:h-2
                             before:w-2 before:rounded-full before:bg-accent"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            {project.outcome && (
              <p className="mt-8 rounded-xl border-l-4 border-accent bg-mist/25 p-5
                            font-head font-bold text-ground">
                {project.outcome}
              </p>
            )}

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
          </div>
        </Reveal>

        <div className="mt-8 text-right">
          <Link
            to={`/projects/${next.slug}`}
            className="font-head text-sm font-bold text-accent hover:text-mist"
          >
            Next: {next.title} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </article>

      <ContactCta />
    </>
  )
}

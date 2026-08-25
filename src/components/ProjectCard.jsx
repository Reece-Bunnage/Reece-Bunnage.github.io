import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual.jsx'
import TechTags from './TechTags.jsx'

export default function ProjectCard({ project, compact = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white
                 shadow-lg shadow-ink/20 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30"
    >
      <ProjectVisual
        project={project}
        className={compact ? 'h-32 w-full' : 'h-44 w-full'}
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-steel">
          {project.context}
        </p>
        <h3 className="mt-1 !pt-0 text-lg transition group-hover:text-ink sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-smoke-mid">
          {project.summary}
        </p>
        {!compact && <TechTags tags={project.tags.slice(0, 4)} className="mt-4" />}
        <span className="mt-4 font-head text-sm font-bold text-ground transition group-hover:text-ink">
          Read more <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}

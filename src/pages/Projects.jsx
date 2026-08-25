import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Band from '../components/Band.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { mainProjects, otherProjects } from '../data/projects.js'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects — Reece Bunnage'
  }, [])

  return (
    <>
      <Band tone="paper">
        <SectionHeading
          title="Projects"
          subtitle="Automation and systems work from client engagements and BYU, alongside the tools I've built on my own."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Band>

      <Band tone="cream">
        <SectionHeading
          title="Other Development Projects"
          subtitle="Smaller builds — mostly experiments in how far AI-assisted development goes."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </Band>

      <ContactCta />
    </>
  )
}

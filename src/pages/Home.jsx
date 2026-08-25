import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Band from '../components/Band.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { featuredProjects } from '../data/projects.js'
import { profile } from '../data/profile.js'

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
  }, [])

  return (
    <>
      <Hero />

      <Band tone="cream">
        <SectionHeading
          title="Featured Projects"
          subtitle="Client work, university systems, and things I built because I wanted them to exist."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="btn-primary">
            View all projects
          </Link>
        </div>
      </Band>

      <ContactCta />
    </>
  )
}

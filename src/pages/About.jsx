import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Band from '../components/Band.jsx'
import Timeline from '../components/Timeline.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { experience } from '../data/experience.js'
import {
  awards,
  education,
  hobbies,
  involvement,
  profile,
  skills,
} from '../data/profile.js'

function Card({ title, children }) {
  return (
    <Reveal className="h-full">
      <div className="card h-full">
        <h2 className="!pt-0 text-xl sm:text-2xl">{title}</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-steel" />
        <div className="mt-5">{children}</div>
      </div>
    </Reveal>
  )
}

function Pills({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  useEffect(() => {
    document.title = 'About — Reece Bunnage'
  }, [])

  return (
    <>
      <Band tone="paper">
        <SectionHeading
          title="About"
          subtitle="My background, the direction I'm building toward, and what I've worked on so far."
        />

        <Reveal>
          <div className="card">
            <div className="prose-body">
              {profile.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <Card title="Education">
            <p className="font-head text-lg font-bold text-ink">{education.school}</p>
            <p className="mt-1 text-sm font-semibold text-smoke-mid">
              {education.location}
            </p>

            <ul className="mt-5 space-y-4">
              {education.degrees.map((degree) => (
                <li
                  key={degree.name}
                  className="border-l-2 border-steel pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-head font-bold text-ground">{degree.name}</p>
                    <span className="text-sm font-semibold text-smoke-mid">
                      {degree.dates}
                    </span>
                  </div>
                  <p className="text-sm italic text-smoke-mid">{degree.note}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2">
              {education.details.map((detail) => (
                <li
                  key={detail}
                  className="relative pl-5 text-sm text-smoke-dark
                             before:absolute before:left-0 before:top-2 before:h-1.5
                             before:w-1.5 before:rounded-full before:bg-steel"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-8">
          <Card title="Experience">
            <Timeline items={experience} />
          </Card>
        </div>

      </Band>

      <Band tone="cream">
        <div>
          <Card title="Skills">
            <div className="grid gap-6 sm:grid-cols-3">
              {skills.map((group) => (
                <div key={group.group}>
                  <h3 className="!pt-0 text-base text-ink sm:text-base">{group.group}</h3>
                  <div className="mt-3">
                    <Pills items={group.items} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card title="Certifications & Awards">
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={award.title}>
                  <p className="font-head font-bold text-ink">{award.title}</p>
                  <p className="text-sm text-smoke-mid">{award.note}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Involvement">
            <ul className="space-y-3">
              {involvement.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-smoke-dark
                             before:absolute before:left-0 before:top-2.5 before:h-1.5
                             before:w-1.5 before:rounded-full before:bg-steel"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 !pt-0 text-base text-ink">Outside of work</h3>
            <div className="mt-3">
              <Pills items={hobbies} />
            </div>
          </Card>
        </div>
      </Band>

      <ContactCta />
    </>
  )
}

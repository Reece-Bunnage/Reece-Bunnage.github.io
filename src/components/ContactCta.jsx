import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function ContactCta() {
  return (
    <section className="shell py-16 sm:py-24">
      <Reveal>
        <div className="rounded-2xl bg-ink p-8 text-center shadow-lg shadow-ink/30 sm:p-14">
          <h2 className="text-white">Let&rsquo;s Connect</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
            I&rsquo;m looking for internships and project work in automation,
            business systems, and AI consulting. If you have a manual process that
            should not be manual, I&rsquo;d like to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

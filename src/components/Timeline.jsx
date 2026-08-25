import Reveal from './Reveal.jsx'

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-steel/40 pl-6 sm:pl-8">
      {items.map((item, i) => (
        <li key={`${item.org}-${item.title}`} className="mb-10 last:mb-0">
          <Reveal delay={i * 0.05}>
            <span
              className={`absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white ${
                item.current ? 'bg-accent' : 'bg-steel'
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="!pt-0 text-lg sm:text-xl">{item.title}</h3>
              <span className="font-head text-sm font-bold text-steel">
                {item.dates}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-smoke-mid">
              {item.org}
              {item.orgNote && (
                <span className="font-normal italic"> &mdash; {item.orgNote}</span>
              )}
              {item.location && <span className="font-normal"> &middot; {item.location}</span>}
            </p>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-sm leading-relaxed text-smoke-dark
                             before:absolute before:left-0 before:top-2 before:h-1.5
                             before:w-1.5 before:rounded-full before:bg-accent"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

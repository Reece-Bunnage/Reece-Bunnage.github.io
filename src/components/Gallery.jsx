// Optional image strip on a project detail page, for projects that span
// more than one screen worth showing.
export default function Gallery({ items = [] }) {
  if (!items.length) return null

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={item.src}>
          <img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            className="h-48 w-full rounded-xl object-cover object-top shadow-md shadow-ink/20 sm:h-56"
          />
          <figcaption className="mt-2 text-sm text-smoke-mid">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

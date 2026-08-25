export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mb-8">
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            light ? 'text-mist' : 'text-smoke-mid'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

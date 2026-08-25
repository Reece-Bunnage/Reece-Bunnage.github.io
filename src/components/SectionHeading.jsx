export default function SectionHeading({ title, subtitle, onDark = false }) {
  return (
    <div className="mb-8">
      <h2 className={onDark ? 'text-white' : ''}>{title}</h2>
      {/* Decorative rule, not text — bright teal washes out on light surfaces,
          so the muted steel carries it there instead. */}
      <div
        className={`mt-3 h-1 w-16 rounded-full ${onDark ? 'bg-accent' : 'bg-steel'}`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            onDark ? 'text-mist' : 'text-smoke-mid'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

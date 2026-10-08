export default function SectionHeading({ id, title, children }) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <h2 id={id} className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {children && <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">{children}</p>}
    </div>
  )
}
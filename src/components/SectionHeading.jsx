export default function SectionHeading({ id, title, children }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink/70">{children}</p>}
    </div>
  )
}

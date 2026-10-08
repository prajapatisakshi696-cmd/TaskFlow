import SectionHeading from './SectionHeading'
import { features } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="section bg-surface" aria-labelledby="features-title">
      <div className="container-x">
        <SectionHeading id="features-title" title="Everything a small team needs, nothing it doesn't">
          Six focused tools that cover the whole life of a task.
        </SectionHeading>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group bg-surface p-7 transition-colors hover:bg-brand-soft/60 sm:p-8">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-light transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
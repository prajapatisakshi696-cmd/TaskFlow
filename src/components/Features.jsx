import SectionHeading from './SectionHeading'
import { features } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="section bg-white" aria-labelledby="features-title">
      <div className="container-x">
        <SectionHeading id="features-title" title="Everything a small team needs, nothing it doesn't">
          Six focused tools that cover the whole life of a task.
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl border border-ink/10 bg-paper p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-mint-soft text-mint-dark">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

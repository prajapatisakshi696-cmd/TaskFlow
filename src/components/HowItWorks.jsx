import SectionHeading from './SectionHeading'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" aria-labelledby="how-title">
      <div className="container-x">
        <SectionHeading id="how-title" title="Up and running in three steps">
          Most teams set up their first project in under five minutes.
        </SectionHeading>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute left-14 top-5 hidden h-px w-[calc(100%-2rem)] bg-ink/20 md:block" />
              )}
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-lg font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { plans } from '../data/content'

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white" aria-labelledby="pricing-title">
      <div className="container-x">
        <SectionHeading id="pricing-title" title="Simple pricing that grows with your team">
          Start free. Upgrade when you need more people or more insight.
        </SectionHeading>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                p.recommended
                  ? 'bg-ink text-white shadow-2xl shadow-ink/25 lg:-my-4 lg:py-11'
                  : 'border border-ink/10 bg-paper'
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-7 rounded-full bg-amber-flow px-3 py-1 text-xs font-bold text-ink">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.recommended ? 'text-white/70' : 'text-ink/65'}`}>{p.blurb}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold">{p.price}</span>
                <span className={`text-sm ${p.recommended ? 'text-white/70' : 'text-ink/60'}`}>{p.period}</span>
              </p>

              <ul className="my-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={`mt-0.5 shrink-0 ${p.recommended ? 'text-amber-flow' : 'text-mint'}`} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={p.recommended ? 'btn bg-amber-flow text-ink hover:bg-amber-400' : 'btn-secondary'}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

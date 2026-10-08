import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { fallbackPeople, testimonialQuotes, testimonialRoles } from '../data/content'

const API_URL = 'https://randomuser.me/api/?results=3&inc=name,picture&noinfo'

function Avatar({ name, picture }) {
  const [failed, setFailed] = useState(false)
  if (!picture || failed) {
    const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
    return <span className="grid h-11 w-11 place-items-center rounded-full bg-mint-soft font-bold text-mint-dark" aria-hidden="true">{initials}</span>
  }
  return <img src={picture} alt="" width="44" height="44" loading="lazy" onError={() => setFailed(true)} className="h-11 w-11 rounded-full object-cover" />
}

export default function Testimonials() {
  const [people, setPeople] = useState(null)

  // Bonus: fetch avatars and names from the public Random User API
  useEffect(() => {
    const controller = new AbortController()
    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) =>
        setPeople(
          data.results.map((u, i) => ({
            name: `${u.name.first} ${u.name.last}`,
            role: testimonialRoles[i],
            picture: u.picture.medium,
          }))
        )
      )
      .catch((err) => {
        if (err.name !== 'AbortError') setPeople(fallbackPeople)
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHeading id="testimonials-title" title="Teams like yours are getting more done" />

        <ul className="grid gap-5 md:grid-cols-3" aria-busy={!people}>
          {(people ?? [1, 2, 3]).map((p, i) => (
            <li key={i} className="flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-6">
              {people ? (
                <>
                  <blockquote className="leading-relaxed text-ink/85">“{testimonialQuotes[i]}”</blockquote>
                  <figure className="mt-6 flex items-center gap-3">
                    <Avatar name={p.name} picture={p.picture} />
                    <span>
                      <span className="block text-sm font-semibold">{p.name}</span>
                      <span className="block text-xs text-ink/60">{p.role}</span>
                    </span>
                  </figure>
                </>
              ) : (
                <div className="animate-pulse space-y-3" role="status" aria-label="Loading testimonial">
                  <div className="h-3 rounded bg-ink/10" />
                  <div className="h-3 w-5/6 rounded bg-ink/10" />
                  <div className="h-3 w-2/3 rounded bg-ink/10" />
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-ink/10" />
                    <div className="h-3 w-24 rounded bg-ink/10" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

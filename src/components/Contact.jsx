import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import useForm from '../hooks/useForm'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const validate = ({ name, email, message }) => {
  const errors = {}
  if (!name.trim()) errors.name = 'Enter your name.'
  else if (name.trim().length < 2) errors.name = 'Your name must be at least 2 characters.'

  if (!email.trim()) errors.email = 'Enter your email address.'
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email, like name@company.com.'

  if (!message.trim()) errors.message = 'Write a short message.'
  else if (message.trim().length < 10) errors.message = 'Your message must be at least 10 characters.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  )
}

const inputClass = (error) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-mint focus:ring-2 focus:ring-mint/30 ${
    error ? 'border-red-500' : 'border-ink/20'
  }`

export default function Contact() {
  const form = useForm({ name: '', email: '', message: '' }, validate)
  const [sent, setSent] = useState(false)
  const { values, errors } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    form.touchAll()
    if (!form.isValid) return
    
    console.log('Contact form submitted:', values)
    setSent(true)
    form.reset()
  }

  return (
    <section id="contact" className="section bg-ink text-white" aria-labelledby="contact-title">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">Ready to try TaskFlow with your team?</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Tell us a little about your team and we will set up a free workspace for you. We reply within one working day.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-ink sm:p-8">
          {sent ? (
            <div className="py-10 text-center" role="status">
              <CheckCircle2 className="mx-auto text-mint" size={48} />
              <h3 className="mt-4 text-2xl font-bold">Message sent</h3>
              <p className="mt-2 text-ink/70">Thanks for getting in touch. We will reply within one working day.</p>
              <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" type="text" autoComplete="name" value={values.name}
                  onChange={form.handleChange} onBlur={form.handleBlur}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(errors.name)} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email}
                  onChange={form.handleChange} onBlur={form.handleBlur}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(errors.email)} />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" name="message" rows="4" value={values.message}
                  onChange={form.handleChange} onBlur={form.handleBlur}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                  className={inputClass(errors.message)} />
              </Field>
              <button type="submit" className="btn-primary w-full">Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

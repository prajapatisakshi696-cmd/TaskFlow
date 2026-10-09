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
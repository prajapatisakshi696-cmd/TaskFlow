# TaskFlow – Product Landing Page

A responsive landing page for **TaskFlow**, a fictional task-management platform for small teams. Built as the Web Development Intern technical assignment for Pragyan Technologies Pvt. Ltd.

**Live demo:** _https://task-flow-amber-tau.vercel.app/_

## Technologies used

- React 18 (functional components and hooks)
- Vite 5 (build tool and dev server)
- Tailwind CSS 3
- lucide-react (icons)
- Google Fonts: Bricolage Grotesque and Instrument Sans

## Run locally

```bash
git clone <your-repo-url>
cd taskflow-landing
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Features implemented

- **Navbar:** logo, Home / Features / Pricing / Contact links, sticky, accessible hamburger menu on mobile
- **Hero:** headline, description, "Get Started" and "View Features" CTAs, and an **interactive Kanban mockup** (click a task to move it forward; the progress bar updates)
- **Features:** six feature cards (Task Management, Team Collaboration, Progress Tracking, Analytics and more)
- **How it works:** three-step process
- **Pricing:** Free, Pro and Business, with Pro highlighted as the recommended plan
- **Contact form:** Name, Email, Message with client-side validation (required fields, name length, email format, message length), errors shown on blur and on submit, and a success state
- **Footer:** company info, navigation links, social placeholders
- **Bonus API integration:** testimonial names and avatars are fetched from the [Random User API](https://randomuser.me), with a loading skeleton and a fallback if the request fails
- Semantic HTML, ARIA attributes, skip link, visible focus states, reduced-motion support
- Responsive on mobile, tablet and desktop, with no horizontal overflow

## Project structure

```
src/
  components/   Navbar, Hero, BoardMockup, Features, HowItWorks, Pricing,
                Testimonials, Contact, Footer, Logo, SectionHeading
  hooks/        useForm.js (reusable form state and validation)
  data/         content.js (copy for nav, features, steps, plans)
```

## Third-party libraries / APIs

- lucide-react (MIT) for icons
- Random User API (free, no key) for testimonial avatars
- Google Fonts

## Challenges faced

- Making the three-column Kanban mockup readable on small phones: solved with compact cards and `min-w-0` so text wraps instead of overflowing.
- Keeping form validation simple but user-friendly: errors only appear after a field is touched, and every field is validated again on submit.
- Handling API failure gracefully: the testimonials section falls back to local data with initials avatars.

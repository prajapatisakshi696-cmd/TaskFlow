import { ListChecks, Users, TrendingUp, BarChart3, Bell, CalendarDays } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const features = [
  { icon: ListChecks, title: 'Task Management', text: 'Create tasks, set due dates and priorities, and drag them across your board as work moves along.' },
  { icon: Users, title: 'Team Collaboration', text: 'Assign owners, comment on tasks and share files, so nobody has to ask "who is doing this?"' },
  { icon: TrendingUp, title: 'Progress Tracking', text: 'See what is done, in progress and overdue at a glance, for every project and every person.' },
  { icon: BarChart3, title: 'Analytics', text: 'Weekly reports show how fast your team finishes work and where tasks tend to get stuck.' },
  { icon: Bell, title: 'Smart Reminders', text: 'Get a nudge before a deadline, not after. Choose email or in-app alerts per project.' },
  { icon: CalendarDays, title: 'Calendar View', text: 'Switch from board to calendar to plan the week and spot overloaded days early.' },
]

export const steps = [
  { title: 'Create a project', text: 'Name it, invite your teammates by email, and pick a board template or start empty.' },
  { title: 'Add and assign tasks', text: 'Break the work into tasks, give each one an owner and a due date.' },
  { title: 'Track it to done', text: 'Move tasks across the board, watch progress update live, and review the weekly report.' },
]

export const plans = [
  {
    name: 'Free', price: '$0', period: 'forever', blurb: 'For trying TaskFlow with a tiny team.',
    features: ['Up to 3 members', '2 active projects', 'Board view', '100 MB file storage'],
    cta: 'Start for free',
  },
  {
    name: 'Pro', price: '$8', period: 'per user / month', blurb: 'For teams that ship every week.',
    features: ['Up to 15 members', 'Unlimited projects', 'Board and calendar views', 'Progress reports', 'Smart reminders', '10 GB file storage'],
    cta: 'Choose Pro', recommended: true,
  },
  {
    name: 'Business', price: '$16', period: 'per user / month', blurb: 'For growing teams that need control.',
    features: ['Unlimited members', 'Advanced analytics', 'Roles and permissions', 'Priority support', '100 GB file storage'],
    cta: 'Choose Business',
  },
]

// Used as fallback if the public API cannot be reached
export const fallbackPeople = [
  { name: 'Priya Nair', role: 'Founder, Studio Nine', picture: '' },
  { name: 'Marcus Lee', role: 'Engineering Lead, Brightloop', picture: '' },
  { name: 'Sofia Alvarez', role: 'Operations, Greenfield Co.', picture: '' },
]

export const testimonialQuotes = [
  'We moved our weekly planning into TaskFlow and our Monday meeting went from an hour to fifteen minutes.',
  'The board is simple enough that the whole team actually uses it. That alone was worth switching.',
  'The weekly report showed us where tasks were stalling. We fixed our review process the same day.',
]
const roles = ['Founder, Studio Nine', 'Engineering Lead, Brightloop', 'Operations, Greenfield Co.']
export const testimonialRoles = roles

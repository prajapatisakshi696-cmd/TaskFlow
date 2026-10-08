import { Twitter, Github, Linkedin } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/content'

const socials = [
  { label: 'Twitter', icon: Twitter },
  { label: 'GitHub', icon: Github },
  { label: 'LinkedIn', icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            TaskFlow is a task-management platform for small teams. This is a fictional product built as a demo project.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-base font-bold">Navigate</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-white/70 hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold">Follow us</h2>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <li key={label}>
                {/* Placeholder links */}
                <a href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 hover:bg-white/10">
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  )
}

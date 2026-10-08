import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/75 hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">Get Started</a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-paper md:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block rounded-lg px-2 py-3 font-medium hover:bg-mint-soft">{l.label}</a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={close} className="btn-primary w-full">Get Started</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

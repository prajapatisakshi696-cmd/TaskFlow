import { Check } from 'lucide-react'

export default function Logo({ light = false }) {
  return (
    <a href="#home" className={`flex items-center gap-2 font-display text-xl font-extrabold ${light ? 'text-white' : 'text-ink'}`} aria-label="TaskFlow home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint text-white">
        <Check size={18} strokeWidth={3} />
      </span>
      TaskFlow
    </a>
  )
}

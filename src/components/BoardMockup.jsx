import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

const columns = ['To do', 'In progress', 'Done']

const initialTasks = [
  { id: 1, title: 'Draft launch email', tag: 'Marketing', col: 0 },
  { id: 2, title: 'Fix login redirect', tag: 'Bug', col: 0 },
  { id: 3, title: 'Review pricing page', tag: 'Design', col: 1 },
  { id: 4, title: 'Set up analytics', tag: 'Dev', col: 1 },
  { id: 5, title: 'Onboard new client', tag: 'Ops', col: 2 },
]

const tagStyle = {
  Marketing: 'bg-amber-flow/25 text-amber-900',
  Bug: 'bg-red-100 text-red-800',
  Design: 'bg-violet-100 text-violet-800',
  Dev: 'bg-sky-100 text-sky-800',
  Ops: 'bg-mint-soft text-mint-dark',
}

/* Interactive product mockup */
export default function BoardMockup() {
  const [tasks, setTasks] = useState(initialTasks)
  const done = tasks.filter((t) => t.col === 2).length
  const percent = Math.round((done / tasks.length) * 100)

  const advance = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id && t.col < 2 ? { ...t, col: t.col + 1 } : t)))

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-3 shadow-xl shadow-ink/10 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold sm:text-base">Website relaunch</p>
          <p className="text-xs text-ink/60">{done} of {tasks.length} tasks done</p>
        </div>
        <button
          type="button"
          onClick={() => setTasks(initialTasks)}
          className="inline-flex items-center gap-1 rounded-md border border-ink/15 px-2 py-1 text-xs font-medium hover:border-ink/40"
        >
          <RotateCcw size={12} /> Reset
        </button>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-ink/10" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Project progress">
        <div className="h-full rounded-full bg-mint transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {columns.map((name, i) => (
          <div key={name} className="min-w-0 rounded-xl bg-paper p-2">
            <p className="mb-2 px-1 text-xs font-semibold text-ink/70">{name}</p>
            <ul className="space-y-2">
              {tasks.filter((t) => t.col === i).map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => advance(t.id)}
                    disabled={i === 2}
                    aria-label={i === 2 ? `${t.title} (done)` : `Move "${t.title}" to ${columns[i + 1]}`}
                    className="w-full rounded-lg border border-ink/10 bg-white p-2 text-left shadow-sm transition-shadow enabled:hover:shadow-md disabled:cursor-default"
                  >
                    <span className={`mb-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${tagStyle[t.tag]}`}>{t.tag}</span>
                    <span className={`block text-xs font-medium leading-snug ${i === 2 ? 'text-ink/50 line-through' : ''}`}>{t.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-ink/55">Try it: click a task to move it forward.</p>
    </div>
  )
}

import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

const columns = ['To do', 'In progress', 'Done']
const dots = ['bg-ink/30', 'bg-amber-flow', 'bg-brand']

const initialTasks = [
  { id: 1, title: 'Draft launch email', tag: 'Marketing', col: 0 },
  { id: 2, title: 'Fix login redirect', tag: 'Bug', col: 0 },
  { id: 3, title: 'Review pricing page', tag: 'Design', col: 1 },
  { id: 4, title: 'Set up analytics', tag: 'Dev', col: 1 },
  { id: 5, title: 'Onboard new client', tag: 'Ops', col: 2 },
]

const tagStyle = {
  Marketing: 'bg-amber-flow/15 text-amber-flow',
  Bug: 'bg-red-500/15 text-red-300',
  Design: 'bg-violet-500/20 text-violet-200',
  Dev: 'bg-sky-500/15 text-sky-300',
  Ops: 'bg-emerald-500/15 text-emerald-300',
}

/* Interactive product mockup */
export default function BoardMockup() {
  const [tasks, setTasks] = useState(initialTasks)
  const done = tasks.filter((t) => t.col === 2).length
  const percent = Math.round((done / tasks.length) * 100)

  const advance = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id && t.col < 2 ? { ...t, col: t.col + 1 } : t)))

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-float">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-deep px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
      </div>

      <div className="p-3 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-base font-bold sm:text-lg">Website relaunch</p>
            <p className="text-xs text-ink/60">{done} of {tasks.length} tasks done</p>
          </div>
          <button
            type="button"
            onClick={() => setTasks(initialTasks)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-ink/15 px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-ink/40 hover:bg-white/5"
          >
            <RotateCcw size={12} /> Reset
          </button>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-ink/10" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Project progress">
          <div className="h-full rounded-full bg-brand shadow-[0_0_12px_rgb(124_58_237)] transition-all duration-500" style={{ width: `${percent}%` }} />
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {columns.map((name, i) => (
            <div key={name} className="min-w-0 rounded-xl bg-deep p-2">
              <p className="mb-2 flex items-center gap-1.5 px-1 text-xs font-semibold text-ink/70">
                <span className={`h-2 w-2 rounded-full ${dots[i]}`} aria-hidden="true" />
                {name}
                <span className="ml-auto text-ink/45">{tasks.filter((t) => t.col === i).length}</span>
              </p>
              <ul className="space-y-2">
                {tasks.filter((t) => t.col === i).map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => advance(t.id)}
                      disabled={i === 2}
                      aria-label={i === 2 ? `${t.title} (done)` : `Move "${t.title}" to ${columns[i + 1]}`}
                      className="w-full rounded-lg border border-ink/10 bg-surface p-2.5 text-left transition enabled:hover:-translate-y-0.5 enabled:hover:border-brand/60 enabled:hover:shadow-lg enabled:hover:shadow-brand/20 disabled:cursor-default"
                    >
                      <span className={`mb-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${tagStyle[t.tag]}`}>{t.tag}</span>
                      <span className={`block text-xs font-medium leading-snug ${i === 2 ? 'text-ink/50 line-through' : ''}`}>{t.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink/55">Try it: click a task to move it forward.</p>
      </div>
    </div>
  )
}
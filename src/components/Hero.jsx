import BoardMockup from './BoardMockup'

export default function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden pt-12 sm:pt-20" aria-labelledby="hero-title">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[4rem]">
            Get your whole team moving in the same direction.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
            TaskFlow is a simple task manager for small teams. Plan the work, assign it, and see
            exactly where everything stands, without the clutter of heavy project tools.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary px-7 py-3.5">Get Started</a>
            <a href="#features" className="btn-secondary px-7 py-3.5">View Features</a>
          </div>
          <p className="mt-5 text-sm text-ink/60">Free for teams of up to 3. No credit card needed.</p>
        </div>

        <div className="relative animate-rise lg:translate-x-4 lg:-rotate-1">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-full bg-brand/30 blur-3xl" />
          <BoardMockup />
        </div>
      </div>
    </section>
  )
}
import BoardMockup from './BoardMockup'

export default function Hero() {
  return (
    <section id="home" className="section pt-12 sm:pt-20" aria-labelledby="hero-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Get your whole team moving in the same direction.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
            TaskFlow is a simple task manager for small teams. Plan the work, assign it, and see
            exactly where everything stands, without the clutter of heavy project tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary px-6">Get Started</a>
            <a href="#features" className="btn-secondary px-6">View Features</a>
          </div>
          <p className="mt-5 text-sm text-ink/60">Free for teams of up to 3. No credit card needed.</p>
        </div>

        <BoardMockup />
      </div>
    </section>
  )
}

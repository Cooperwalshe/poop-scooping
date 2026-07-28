export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-300 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100">
          Serving Coronado, CA
        </span>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          A Clean Yard, Without Lifting a Finger
        </h1>
        <p className="mt-5 max-w-xl text-lg text-brand-100">
          Reliable, professional dog waste removal for Coronado homes. We show up on
          schedule, scoop every visit, and leave your yard spotless — so you can spend
          less time cleaning up and more time enjoying it.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-900 shadow-lg transition hover:bg-brand-50"
          >
            Request a Free Quote
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See How It Works
          </a>
        </div>

        <dl className="mt-12 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="text-xs uppercase tracking-wide text-brand-200">Starting at</dt>
            <dd className="mt-1 text-2xl font-bold">$15</dd>
            <dd className="text-xs text-brand-200">per visit</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-brand-200">Local &amp;</dt>
            <dd className="mt-1 text-2xl font-bold">Trusted</dd>
            <dd className="text-xs text-brand-200">Coronado owned</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-brand-200">Scheduling</dt>
            <dd className="mt-1 text-2xl font-bold">Flexible</dd>
            <dd className="text-xs text-brand-200">weekly or biweekly</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

const factors = [
  'Yard size',
  'Number of dogs',
  'Visit frequency (weekly, bi-weekly, or one-time)',
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Fair Pricing
          </h2>
          <p className="mt-4 text-slate-600">
            Every yard is different, so every quote is custom — but here's what most
            customers pay.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Average Visit
          </p>
          <p className="mt-2 text-5xl font-bold text-slate-900">
            $30
            <span className="text-lg font-medium text-slate-500"> / visit</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Starting at a $25 base price</p>
          <p className="mt-4 text-sm text-slate-600">
            Your exact price depends on a few factors. We'll send you a custom quote
            before any commitment.
          </p>

          <ul className="mt-6 space-y-3 text-left">
            {factors.map((factor) => (
              <li key={factor} className="flex items-start gap-3 text-sm text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {factor}
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className="mt-8 inline-block w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Get My Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}

const promises = [
  {
    title: 'Arrival & Departure Texts',
    description:
      "We'll text you the moment we arrive and again when we're done, so you always know we've been by.",
  },
  {
    title: 'Double-Bagged, Every Time',
    description:
      'All waste is double-bagged and sealed before it leaves your property — no mess, no smell, no exceptions.',
  },
  {
    title: 'Your Preferences, Respected',
    description:
      'Gates closed behind us, waste disposed of where you prefer, and any special instructions followed exactly.',
  },
  {
    title: "We'll Make It Right",
    description:
      "Not happy with a visit? Let us know within 24 hours and we'll come back and fix it — free of charge.",
  },
]

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Our Guarantee
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Reliable Service, No Surprises
          </h2>
          <p className="mt-4 text-slate-600">
            Here's what you can count on every single visit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-900 text-gold-400">
                {checkIcon}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{promise.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

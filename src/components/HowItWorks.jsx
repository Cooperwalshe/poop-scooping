const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description:
      'Tell us about your yard size, how many dogs you have, and how often you\'d like service. Takes less than a minute.',
  },
  {
    number: '02',
    title: 'We Confirm Pricing',
    description:
      'We review your details and send you clear, upfront pricing — no surprises, no long-term contracts required.',
  },
  {
    number: '03',
    title: 'We Scoop on Schedule',
    description:
      'Once you approve, we show up on your chosen schedule, rain or shine, and leave your yard clean every visit.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600">
            Getting a clean yard is simple. Three steps, no hassle.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <span className="text-4xl font-bold text-brand-200">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

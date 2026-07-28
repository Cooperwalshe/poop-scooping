const testimonials = [
  {
    quote:
      'Our yard has never been cleaner. They\'re always on time and the difference is night and day.',
    name: 'Sarah M.',
    detail: 'The Village',
  },
  {
    quote:
      'Easy to schedule, fair pricing, and one less thing on my weekend to-do list. Highly recommend.',
    name: 'James T.',
    detail: 'Coronado Cays',
  },
  {
    quote:
      'With two large dogs this was a game changer for our backyard. Professional and reliable every time.',
    name: 'Elena R.',
    detail: 'Coronado Shores',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Neighbors Are Saying
          </h2>
          <p className="mt-3 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Placeholder testimonials — replace with real customer reviews
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                {t.name}
                <span className="block text-xs font-normal text-slate-500">
                  {t.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

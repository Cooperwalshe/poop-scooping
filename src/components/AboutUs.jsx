export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="order-2 flex items-center justify-center rounded-3xl border border-brand-100 bg-brand-50 p-10 sm:order-1">
            <div className="text-center">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400 bg-brand-900 text-gold-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-9 w-9">
                  <path
                    d="M8 3a2 2 0 00-2 2v1.7a2 2 0 00-1.4 1.9v9.4A2.5 2.5 0 007 20.5h10a2.5 2.5 0 002.4-2.5V8.6A2 2 0 0018 6.7V5a2 2 0 00-2-2H8Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="6.4" r="1.3" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="8.5" y1="12.4" x2="15.5" y2="12.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="8.5" y1="15.6" x2="13" y2="15.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              <p className="mt-4 text-lg font-semibold text-slate-900">Active Duty</p>
              <p className="text-sm text-slate-500">Naval Air Station North Island</p>
            </div>
          </div>

          <div className="order-1 sm:order-2">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Started by a Neighbor in Uniform
            </h2>
            <p className="mt-4 text-slate-600">
              I'm active-duty military, stationed right here at Naval Air Station North
              Island. Between shifts, I kept hearing the same complaint from homeowners
              around Coronado: no time to keep up with the mess their dogs leave behind
              in the yard.
            </p>
            <p className="mt-4 text-slate-600">
              So I decided to help. Coronado Poop Scooping is a small, local operation
              built on the same reliability and attention to detail I bring to my
              service every day — so you can trust your yard is taken care of, visit
              after visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

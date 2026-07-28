const neighborhoods = [
  'The Village',
  'Coronado Cays',
  'Coronado Shores',
  'North Island',
  'Country Club Estates',
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-brand-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Proudly Serving Coronado, CA
            </h2>
            <p className="mt-4 text-brand-100">
              We're locally based and focused exclusively on Coronado — so you get a
              team that knows the island, shows up reliably, and treats your yard like
              it's part of the neighborhood we live in too.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-brand-100">
              {neighborhoods.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto h-16 w-16 text-brand-300"
              >
                <path
                  d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="mt-4 text-lg font-semibold">Coronado, California</p>
              <p className="mt-1 text-sm text-brand-200">San Diego County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

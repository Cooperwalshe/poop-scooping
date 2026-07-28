export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 3c-2.5 0-4 2-4 4.2 0 1.6 1 3 2.2 3.8-1.4.9-3.2 2.3-3.2 4.5 0 1.4 1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5 0-2.2-1.8-3.6-3.2-4.5C15 10.2 16 8.8 16 7.2 16 5 14.5 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="leading-tight">
            Coronado
            <span className="block text-xs font-medium uppercase tracking-wide text-brand-600">
              Poop Scooping
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#how-it-works" className="hover:text-brand-700">How It Works</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          <a href="#service-area" className="hover:text-brand-700">Service Area</a>
          <a href="#testimonials" className="hover:text-brand-700">Reviews</a>
        </nav>

        <a
          href="#quote"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  )
}

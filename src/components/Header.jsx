export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold-400 bg-brand-900 text-gold-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111c.076.182.245.306.442.321l5.518.442c.499.04.699.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557L2.415 10.36a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.442-.321L11.48 3.5z" />
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
          <a href="#about" className="hover:text-brand-700">About</a>
          <a href="#service-area" className="hover:text-brand-700">Service Area</a>
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

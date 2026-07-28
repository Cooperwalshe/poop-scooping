export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Coronado Poop Scooping</p>
            <p className="mt-2 text-sm text-slate-600">
              Professional dog waste removal serving Coronado, CA.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="tel:+16195550123" className="hover:text-brand-700">
                  (619) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:cooper@coronadopoopscooping.com" className="hover:text-brand-700">
                  cooper@coronadopoopscooping.com
                </a>
              </li>
              <li>Coronado, CA 92118</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Monday – Saturday: 8am – 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {year} Coronado Poop Scooping. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { BUSINESS } from '../data/site'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Contact', href: '/#contact' }
]

export default function Footer() {
  return (
    <footer className="section-x pt-16 pb-10 border-t border-ink-900 bg-ink-950">
      <div className="content-wrap">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="font-display font-semibold text-ink-50 text-lg">
              {BUSINESS.name}
            </Link>
            <p className="mt-1 text-ink-500 text-xs tracking-wide">{BUSINESS.footerLine}</p>
            <p className="mt-4 text-ink-400 text-sm max-w-xs leading-relaxed">{BUSINESS.tagline}</p>
          </div>

          <div>
            <h4 className="text-ink-200 text-sm font-medium">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ink-400 text-sm hover:text-ink-100 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ink-200 text-sm font-medium">Reach Us</h4>
            <p className="mt-4 text-ink-400 text-sm">{BUSINESS.city}</p>
            <p className="mt-1 text-ink-400 text-sm">Mobile: {BUSINESS.phone}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-900 flex flex-col items-center gap-1 text-center">
          <p className="text-ink-500 text-xs tracking-wide">OWNER — {BUSINESS.owner}</p>
          <p className="text-ink-500 text-xs tracking-wide">CEO / MANAGER — {BUSINESS.manager}</p>
        </div>

        <p className="mt-6 text-center text-ink-600 text-xs">
          © 2026 {BUSINESS.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

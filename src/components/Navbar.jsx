import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, whatsappLink } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur border-b border-ink-800' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="content-wrap section-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 64 64" className="shrink-0">
            <rect width="64" height="64" rx="12" fill="#121214" />
            <path d="M14 40 L32 16 L50 40" stroke="#5C93B8" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="20" y="40" width="24" height="6" rx="2" fill="#ECECEF" />
          </svg>
          <span className="font-display font-semibold text-[15px] md:text-base tracking-tight text-ink-50">
            NAMO IT MUMBAI
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-ink-300">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-ink-50 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink('Hello NAMO IT MUMBAI, I would like to know more about your laptop spare parts.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-steel-600 hover:bg-steel-500 text-white text-sm font-medium px-4 py-2 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-ink-700 text-ink-100"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="2" /></svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink-950 border-b border-ink-800">
          <ul className="content-wrap section-x flex flex-col py-4 gap-1 font-body text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-200 border-b border-ink-800/70 last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={whatsappLink('Hello NAMO IT MUMBAI, I would like to know more about your laptop spare parts.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-steel-600 text-white text-sm font-medium px-4 py-2.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.7.44 3.36 1.29 4.82L2 22l5.4-1.42a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.68 2 12.04 2Zm0 18.09h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.2.84.86-3.12-.2-.32a8.2 8.2 0 0 1-1.27-4.35c0-4.53 3.7-8.22 8.31-8.22 2.22 0 4.3.87 5.87 2.44a8.15 8.15 0 0 1 2.43 5.8c0 4.53-3.7 8.26-8.3 8.26Zm4.53-6.19c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.56.12-.17.25-.65.8-.8.96-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24a7.57 7.57 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.53c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

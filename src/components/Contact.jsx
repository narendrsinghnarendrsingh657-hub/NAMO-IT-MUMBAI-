import { BUSINESS, CALL_LINK, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Navbar'

export default function Contact() {
  return (
    <section id="contact" className="section-x py-20 md:py-28 border-t border-ink-900">
      <div className="content-wrap grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
        <div>
          <p className="text-steel-300 text-sm font-medium">Contact</p>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50">
            {BUSINESS.name}
          </h2>
          <p className="mt-3 text-ink-400">{BUSINESS.tagline}</p>

          <div className="mt-8 space-y-4 text-ink-200">
            <div className="flex items-center gap-3">
              <PinIcon />
              <span>{BUSINESS.city}</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span>Mo. {BUSINESS.phone}</span>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={CALL_LINK}
              className="inline-flex items-center gap-2 justify-center rounded-full bg-ink-50 text-ink-950 font-medium text-sm px-6 py-3.5 hover:bg-white transition-colors"
            >
              <PhoneIcon className="text-ink-950" />
              Call Now
            </a>
            <a
              href={whatsappLink('Hello NAMO IT MUMBAI, I would like to know more about your laptop spare parts.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-full bg-steel-600 hover:bg-steel-500 text-white font-medium text-sm px-6 py-3.5 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-8 md:p-10">
          <h3 className="font-display font-semibold text-ink-50 text-lg">Looking for a specific part?</h3>
          <p className="mt-2 text-ink-400 text-sm leading-relaxed">
            Send us your laptop brand and model number on WhatsApp — we'll confirm availability and share details
            directly.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-300">
            <li className="flex gap-2"><Dot /> Share your laptop brand and model</li>
            <li className="flex gap-2"><Dot /> Tell us which part you need</li>
            <li className="flex gap-2"><Dot /> We confirm availability on WhatsApp</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Dot() {
  return <span className="mt-2 w-1.5 h-1.5 rounded-full bg-steel-400 shrink-0" />
}

function PinIcon({ className = 'text-steel-300' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M9 17s6-5.2 6-9.5A6 6 0 0 0 3 7.5C3 11.8 9 17 9 17Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="7.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function PhoneIcon({ className = 'text-steel-300' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
      <path
        d="M4 3h2.4l1 3.6-1.6 1.3a9 9 0 0 0 4.3 4.3l1.3-1.6 3.6 1V15a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

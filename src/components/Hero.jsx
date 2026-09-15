import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Navbar'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden grain">
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-steel-700/20 blur-[120px]" />

      <div className="content-wrap section-x relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="text-steel-300 text-sm font-medium tracking-wide">
            Laptop Spare Parts &amp; Accessories · Mumbai
          </p>
          <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink-50 max-w-xl">
            Driven by quality,<br /> powered by trust.
          </h1>
          <p className="mt-6 text-ink-300 text-base sm:text-lg max-w-lg leading-relaxed">
            Quality laptop components, spare parts and accessories for a wide range of laptop models — sourced, checked and ready to ship across Mumbai.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-ink-50 text-ink-950 font-medium text-sm px-6 py-3.5 hover:bg-white transition-colors"
            >
              Explore Products
            </a>
            <a
              href={whatsappLink('Hello NAMO IT MUMBAI, I would like to know more about your laptop spare parts.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-full border border-ink-700 text-ink-100 font-medium text-sm px-6 py-3.5 hover:border-steel-500 hover:text-steel-200 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-ink-800 pt-6">
            <div>
              <dt className="text-ink-400 text-xs">Location</dt>
              <dd className="text-ink-100 text-sm mt-1 font-medium">Mumbai, MH</dd>
            </div>
            <div>
              <dt className="text-ink-400 text-xs">Focus</dt>
              <dd className="text-ink-100 text-sm mt-1 font-medium">Parts &amp; Accessories</dd>
            </div>
            <div>
              <dt className="text-ink-400 text-xs">Enquiry</dt>
              <dd className="text-ink-100 text-sm mt-1 font-medium">Via WhatsApp</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 380" className="w-full h-auto" role="img" aria-label="Illustration of laptop internal components">
      <rect x="10" y="10" width="400" height="360" rx="24" fill="#121214" stroke="#28282C" />
      <g opacity="0.5" stroke="#28282C">
        <line x1="10" y1="130" x2="410" y2="130" />
        <line x1="10" y1="250" x2="410" y2="250" />
        <line x1="140" y1="10" x2="140" y2="370" />
        <line x1="280" y1="10" x2="280" y2="370" />
      </g>

      <g transform="translate(48,48)">
        <rect width="70" height="70" rx="10" fill="none" stroke="#5C93B8" strokeWidth="3" />
        <circle cx="35" cy="35" r="11" fill="none" stroke="#8FB8D4" strokeWidth="2.5" />
      </g>

      <g transform="translate(190,52)">
        <circle cx="35" cy="35" r="30" fill="none" stroke="#5C93B8" strokeWidth="3" />
        <path d="M35 35 L35 12 M35 35 L56 23 M35 35 L56 47 M35 35 L35 58 M35 35 L14 47 M35 35 L14 23" stroke="#3A3A40" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(320,44)">
        <rect width="56" height="80" rx="10" fill="none" stroke="#5C93B8" strokeWidth="3" />
        <circle cx="28" cy="30" r="12" fill="none" stroke="#8FB8D4" strokeWidth="2.5" />
        <line x1="18" y1="58" x2="38" y2="58" stroke="#3A3A40" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(58,180)">
        <rect width="140" height="56" rx="8" fill="none" stroke="#5C93B8" strokeWidth="3" />
        <g stroke="#3A3A40" strokeWidth="1.8">
          <rect x="10" y="10" width="12" height="10" rx="2" /><rect x="26" y="10" width="12" height="10" rx="2" /><rect x="42" y="10" width="12" height="10" rx="2" /><rect x="58" y="10" width="12" height="10" rx="2" /><rect x="74" y="10" width="12" height="10" rx="2" /><rect x="90" y="10" width="12" height="10" rx="2" /><rect x="106" y="10" width="12" height="10" rx="2" />
          <rect x="10" y="26" width="50" height="10" rx="2" /><rect x="64" y="26" width="54" height="10" rx="2" />
        </g>
      </g>

      <g transform="translate(230,182)">
        <path d="M0 40 C 30 40, 20 8, 55 8" fill="none" stroke="#5C93B8" strokeWidth="4" strokeLinecap="round" />
        <rect x="-12" y="30" width="18" height="20" rx="4" fill="none" stroke="#8FB8D4" strokeWidth="2.5" />
        <rect x="50" y="-2" width="18" height="20" rx="4" fill="none" stroke="#8FB8D4" strokeWidth="2.5" />
      </g>

      <g transform="translate(120,278)">
        <rect width="160" height="70" rx="8" fill="none" stroke="#5C93B8" strokeWidth="3" />
        <line x1="0" y1="86" x2="160" y2="86" stroke="#3A3A40" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 40 L48 22 L68 42 L90 26 L110 44 L140 30" fill="none" stroke="#8FB8D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

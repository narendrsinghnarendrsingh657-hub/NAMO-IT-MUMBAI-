import { useEffect, useState } from 'react'
import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Navbar'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 rounded-full bg-ink-800 border border-ink-700 text-ink-100 flex items-center justify-center hover:bg-ink-700 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <a
        href={whatsappLink('Hello NAMO IT MUMBAI, I would like to know more about your laptop spare parts.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-steel-600 hover:bg-steel-500 text-white flex items-center justify-center shadow-lg shadow-black/40 transition-colors"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  )
}

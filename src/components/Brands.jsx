import { BRANDS } from '../data/site'

export default function Brands() {
  return (
    <section id="brands" className="section-x py-20 md:py-24 border-t border-ink-900">
      <div className="content-wrap">
        <p className="text-steel-300 text-sm font-medium">Brands</p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50">
          Parts for the brands you use
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="rounded-xl border border-ink-800 bg-ink-900/50 py-8 flex items-center justify-center text-ink-200 font-display font-semibold text-lg tracking-tight hover:border-steel-600 hover:text-ink-50 transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

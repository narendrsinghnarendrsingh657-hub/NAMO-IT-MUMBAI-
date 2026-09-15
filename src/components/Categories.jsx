import categories from '../data/categories'

export default function Categories({ onSelectCategory }) {
  return (
    <section id="categories" className="section-x py-20 md:py-28 border-t border-ink-900">
      <div className="content-wrap">
        <div className="max-w-lg">
          <p className="text-steel-300 text-sm font-medium">Laptop Parts</p>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50">
            Browse by category
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            Every category below links straight to our product catalogue, filtered to that part type.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-2xl border border-ink-800 bg-ink-900/50 overflow-hidden hover:border-steel-600 transition-colors"
            >
              <div className="aspect-[16/10] bg-ink-950">
                <img
                  src={`/images/parts/${cat.id}.svg`}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-ink-50">{cat.name}</h3>
                <p className="mt-1.5 text-ink-400 text-sm leading-relaxed line-clamp-2">{cat.description}</p>
                <button
                  onClick={() => onSelectCategory?.(cat.id)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-steel-300 hover:text-steel-200"
                >
                  View Products
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

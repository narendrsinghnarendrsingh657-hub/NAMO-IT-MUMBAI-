import { useEffect, useMemo, useState } from 'react'
import products from '../data/products'
import categories from '../data/categories'
import { BRAND_FILTERS, PART_TYPE_FILTERS, productEnquiryLink } from '../data/site'
import { WhatsAppIcon } from './Navbar'

const CATEGORY_TO_PART_TYPE = {
  'top-panel': 'Top Panel',
  'base-panel': 'Base Panel',
  'c-panel': 'C Panel',
  bezel: 'Bezel',
  fan: 'Fan',
  speaker: 'Speaker',
  'display-cable': 'Display Cable',
  keyboard: 'Keyboard',
  touchpad: 'Touchpad',
  hinges: 'Other',
  'lcd-display': 'Other',
  accessories: 'Other',
  'other-parts': 'Other'
}

const categoryNameById = Object.fromEntries(categories.map((c) => [c.id, c.name]))

export default function Products({ activeCategory, onClearCategory }) {
  const [query, setQuery] = useState('')
  const [brand, setBrand] = useState('All')
  const [partType, setPartType] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (activeCategory) {
      const el = document.getElementById('products')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeCategory])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        categoryNameById[p.category]?.toLowerCase().includes(q)

      const matchesBrand = brand === 'All' || p.brand === brand
      const matchesPartType = partType === 'All' || CATEGORY_TO_PART_TYPE[p.category] === partType
      const matchesCategory = !activeCategory || p.category === activeCategory

      return matchesQuery && matchesBrand && matchesPartType && matchesCategory
    })
  }, [query, brand, partType, activeCategory])

  const hasActiveFilters = query || brand !== 'All' || partType !== 'All' || activeCategory

  function resetFilters() {
    setQuery('')
    setBrand('All')
    setPartType('All')
    onClearCategory?.()
  }

  return (
    <section id="products" className="section-x py-20 md:py-28 border-t border-ink-900">
      <div className="content-wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-steel-300 text-sm font-medium">Product Catalogue</p>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50">
              Find your laptop part
            </h2>
          </div>
          {activeCategory && (
            <div className="inline-flex items-center gap-2 rounded-full border border-steel-600 text-steel-200 text-sm px-4 py-2">
              {categoryNameById[activeCategory]}
              <button aria-label="Clear category filter" onClick={onClearCategory} className="text-steel-300 hover:text-white">
                ×
              </button>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="mt-10 relative">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search laptop model, part or product..."
            aria-label="Search products"
            className="w-full rounded-full bg-ink-900 border border-ink-700 focus:border-steel-500 text-ink-50 placeholder:text-ink-500 text-sm pl-11 pr-5 py-3.5 outline-none transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap gap-3">
          <FilterSelect label="Brand" value={brand} onChange={setBrand} options={['All', ...BRAND_FILTERS]} />
          <FilterSelect label="Part Type" value={partType} onChange={setPartType} options={['All', ...PART_TYPE_FILTERS]} />
          {hasActiveFilters && (
            <button onClick={resetFilters} className="text-sm text-ink-400 hover:text-ink-100 px-3 py-2.5 underline underline-offset-4">
              Clear all
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mt-10">
          {loading ? (
            <LoadingGrid />
          ) : filtered.length === 0 ? (
            <EmptyState query={query} onReset={resetFilters} />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full bg-ink-900 border border-ink-700 text-sm px-4 py-2.5 text-ink-200">
      <span className="text-ink-500">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none text-ink-50 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink-900">
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

function ProductCard({ product }) {
  const availabilityStyle = {
    'In Stock': 'text-emerald-300 border-emerald-800 bg-emerald-950/40',
    'Limited Stock': 'text-amber-300 border-amber-800 bg-amber-950/40',
    'On Order': 'text-ink-300 border-ink-700 bg-ink-800'
  }[product.availability] || 'text-ink-300 border-ink-700 bg-ink-800'

  return (
    <div className="rounded-2xl border border-ink-800 bg-ink-900/50 overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-ink-950">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-contain p-8" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-ink-50 leading-snug">{product.name}</h3>
          <span className={`shrink-0 text-[11px] font-medium rounded-full border px-2.5 py-1 ${availabilityStyle}`}>
            {product.availability}
          </span>
        </div>
        <p className="mt-1.5 text-ink-400 text-sm">{product.brand} · {product.model}</p>
        <p className="mt-2 text-ink-400 text-sm leading-relaxed flex-1">{product.description}</p>
        <a
          href={productEnquiryLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-steel-600 hover:bg-steel-500 text-white text-sm font-medium px-4 py-2.5 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

function LoadingGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-busy="true" aria-label="Loading products">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-ink-800 bg-ink-900/50 overflow-hidden animate-pulse">
          <div className="aspect-[4/3] bg-ink-800" />
          <div className="p-5 space-y-3">
            <div className="h-4 w-2/3 bg-ink-800 rounded" />
            <div className="h-3 w-1/2 bg-ink-800 rounded" />
            <div className="h-3 w-full bg-ink-800 rounded" />
            <div className="h-9 w-full bg-ink-800 rounded-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  )
}

function EmptyState({ query, onReset }) {
  return (
    <div className="text-center py-16 border border-dashed border-ink-800 rounded-2xl">
      <p className="font-display font-semibold text-ink-50 text-lg">
        {query ? `No results for "${query}"` : 'No products match these filters'}
      </p>
      <p className="mt-2 text-ink-400 text-sm max-w-sm mx-auto">
        Try a different laptop model, brand or part type — or reach out directly and we'll help you find the right part.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button onClick={onReset} className="rounded-full border border-ink-700 text-ink-100 text-sm px-5 py-2.5 hover:border-steel-500">
          Clear filters
        </button>
      </div>
    </div>
  )
}

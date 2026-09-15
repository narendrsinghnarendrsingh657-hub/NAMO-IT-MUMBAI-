const reasons = [
  { title: 'Quality Products', text: 'Parts checked before they reach you.' },
  { title: 'Wide Range of Laptop Parts', text: 'From panels and hinges to fans and cables.' },
  { title: 'Multiple Laptop Brands', text: 'HP, Lenovo, Dell, Acer, ASUS and more.' },
  { title: 'Professional Support', text: 'Help finding the right part for your model.' },
  { title: 'Mumbai Based', text: 'Local stock, local support.' },
  { title: 'Easy WhatsApp Enquiry', text: 'One tap to check availability.' }
]

export default function WhyChooseUs() {
  return (
    <section className="section-x py-20 md:py-28 border-t border-ink-900 bg-ink-900/30">
      <div className="content-wrap">
        <p className="text-steel-300 text-sm font-medium">Why NAMO IT</p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50 max-w-xl">
          Built around getting you the right part
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <span className="mt-1 w-2 h-2 rounded-full bg-steel-400 shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-ink-50">{r.title}</h3>
                <p className="mt-1 text-ink-400 text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

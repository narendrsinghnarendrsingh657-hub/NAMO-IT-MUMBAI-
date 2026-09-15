const points = [
  {
    title: 'Laptop Spare Parts',
    text: 'A wide selection of internal and external spare parts for repair and replacement work.'
  },
  {
    title: 'Laptop Components',
    text: 'Individual components such as panels, hinges, cables and fans sourced for common laptop series.'
  },
  {
    title: 'Laptop Accessories',
    text: 'Everyday accessories that keep your laptop running and protected.'
  },
  {
    title: 'Replacement Parts',
    text: 'Parts intended as direct replacements to restore your laptop to working condition.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-x py-20 md:py-28 border-t border-ink-900">
      <div className="content-wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="text-steel-300 text-sm font-medium">About Us</p>
          <h2 className="mt-3 font-display font-semibold text-3xl md:text-[2.4rem] leading-tight text-ink-50">
            Specialists in laptop parts, not second-hand laptops.
          </h2>
          <p className="mt-6 text-ink-300 leading-relaxed max-w-md">
            NAMO IT MUMBAI specialises in laptop spare parts, laptop components and laptop accessories for a range
            of laptop brands and models. We work with repair shops, technicians and individual customers across
            Mumbai to help source the right part for the job.
          </p>
          <p className="mt-4 text-ink-300 leading-relaxed max-w-md">
            Our focus stays strictly on parts and accessories — we do not deal in second-hand or refurbished
            laptops.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink-800 bg-ink-900/60 p-6">
              <h3 className="font-display font-semibold text-ink-50 text-lg">{p.title}</h3>
              <p className="mt-2 text-ink-400 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

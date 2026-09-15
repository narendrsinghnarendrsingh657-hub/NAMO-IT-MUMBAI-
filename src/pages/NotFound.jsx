import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section-x min-h-[70vh] flex items-center justify-center pt-16">
      <div className="content-wrap text-center max-w-md">
        <p className="text-steel-300 text-sm font-medium">404</p>
        <h1 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink-50">
          This page took a wrong turn
        </h1>
        <p className="mt-4 text-ink-400 leading-relaxed">
          The page you're looking for doesn't exist. Head back home to browse laptop parts and accessories.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink-50 text-ink-950 font-medium text-sm px-6 py-3.5 hover:bg-white transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

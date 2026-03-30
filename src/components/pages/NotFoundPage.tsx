import { Link } from 'react-router-dom'
import { usePageTitle } from '../../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Seite nicht gefunden')

  return (
    <section className="min-h-screen flex items-center justify-center pt-[80px]">
      <div className="container-narrow text-center">
        <span className="text-[120px] lg:text-[180px] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-primary)] opacity-30 leading-none block">
          404
        </span>
        <h1 className="text-h2 text-[var(--color-neutral-900)] mt-4 mb-4">
          Seite nicht gefunden.
        </h1>
        <p className="text-body mb-10 max-w-[480px] mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link to="/" className="btn-primary">
          Zur Startseite
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </Link>
      </div>
    </section>
  )
}

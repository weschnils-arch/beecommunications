import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { services } from '../../data/content'

export function ServicesGrid() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const gridRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.1 })

  return (
    <section className="section-padding">
      <div className="container-main">
        <div ref={headerRef} className="max-w-[640px] mb-16">
          <p className="text-label mb-4">Leistungen</p>
          <h2 className="text-h2 text-[var(--color-neutral-900)]">
            Kommunikation, die wirkt.
          </h2>
          <p className="text-body mt-4">
            Vier Schwerpunkte, ein Ziel: Zusammenarbeit, die funktioniert — von innen nach außen.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/leistungen/${service.slug}`}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-xl hover:-translate-y-1 ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`p-8 lg:p-10 h-full ${
                i === 0
                  ? 'bg-[var(--color-neutral-900)] text-white md:min-h-[400px] flex flex-col md:justify-end'
                  : 'bg-[var(--color-neutral-50)] md:min-h-[200px] flex flex-col md:justify-end'
              }`}>
                {i === 0 && (
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[var(--color-primary)] opacity-10 blur-[80px]" />
                )}

                <p className={`text-[13px] font-medium uppercase tracking-wider mb-3 ${
                  i === 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary-dark)]'
                }`}>
                  {service.subtitle}
                </p>

                <h3 className={`text-[clamp(24px,3vw,36px)] font-['DM_Serif_Display',Georgia,serif] leading-tight mb-4 ${
                  i === 0 ? 'text-white' : 'text-[var(--color-neutral-900)]'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-[15px] leading-relaxed mb-6 ${
                  i === 0 ? 'text-white/70' : 'text-[var(--color-neutral-700)]'
                }`}>
                  {service.shortDescription}
                </p>

                <span className={`inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 group-hover:gap-3 ${
                  i === 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-neutral-900)]'
                }`}>
                  Mehr erfahren
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '../../hooks/useScrollReveal'
import { painPoints } from '../../data/content'

const icons: Record<string, JSX.Element> = {
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  alert: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  growth: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
  ),
}

export function PainPoints() {
  const sectionRef = useScrollReveal<HTMLElement>({ direction: 'up' })
  const cardsRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.12 })

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--color-neutral-50)] relative">
      <div className="container-main">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <p className="text-label mb-4">Kennen Sie das?</p>
          <h2 className="text-h2 text-[var(--color-neutral-900)]">
            Wenn Kommunikation zur Herausforderung wird
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[960px] mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-[var(--color-bg)] rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                {icons[point.icon]}
              </div>
              <h3 className="text-h3 text-[var(--color-neutral-900)] mb-3">{point.title}</h3>
              <p className="text-body text-[15px]">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

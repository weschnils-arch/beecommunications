import { useScrollReveal } from '../../hooks/useScrollReveal'
import { processSteps } from '../../data/content'

export function Process() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const stepsRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.15 })

  return (
    <section className="section-padding bg-[var(--color-neutral-50)] relative overflow-hidden">
      <div className="honeycomb-bg" />

      <div className="container-main relative z-10">
        <div ref={headerRef} className="text-center max-w-[640px] mx-auto mb-16">
          <p className="text-label mb-4">Wie arbeite ich?</p>
          <h2 className="text-h2 text-[var(--color-neutral-900)]">
            Von der Anfrage zum Ergebnis
          </h2>
          <p className="text-body mt-4">
            Jedes Projekt ist anders — aber der Rahmen gibt Orientierung. Transparent, strukturiert, auf Augenhöhe.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative group">
              <div className="bg-[var(--color-bg)] rounded-xl p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="text-[48px] lg:text-[56px] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-primary)] opacity-30 leading-none block mb-2">
                  {step.number}
                </span>
                <h3 className="text-[18px] font-semibold text-[var(--color-neutral-900)] mb-2 font-['Inter',sans-serif]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-neutral-700)]">
                  {step.description}
                </p>
              </div>

              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-[var(--color-neutral-200)] z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

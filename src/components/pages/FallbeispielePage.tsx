import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import { caseStudies } from '../../data/content'
import { CtaSection } from '../sections/CtaSection'

export function FallbeispielePage() {
  usePageTitle('Fallbeispiele')
  const ref = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.15 })

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <p className="text-label mb-4">Fallbeispiele</p>
          <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,80px)]">
            Aus der Praxis.
          </h1>
          <p className="text-body mt-6 max-w-[640px] text-[clamp(17px,1.3vw,20px)]">
            Anonymisierte Beispiele aus meiner Arbeit. Jedes Projekt ist anders — aber die Muster sind oft ähnlich.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-main">
          <div ref={ref} className="flex flex-col gap-8 max-w-[960px]">
            {caseStudies.map((cs, i) => (
              <article key={i} className="bg-[var(--color-neutral-50)] rounded-2xl p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[12px] font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-[clamp(24px,3vw,36px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] mb-8">
                  {cs.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                      Die Herausforderung
                    </p>
                    <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                      Der Ansatz
                    </p>
                    <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{cs.approach}</p>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                      Das Ergebnis
                    </p>
                    <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{cs.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

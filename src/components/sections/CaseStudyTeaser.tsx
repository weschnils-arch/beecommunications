import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { caseStudies } from '../../data/content'

export function CaseStudyTeaser() {
  const ref = useScrollReveal<HTMLElement>({ direction: 'up' })
  const featured = caseStudies[0]

  return (
    <section ref={ref} className="section-padding">
      <div className="container-main">
        <div className="max-w-[960px] mx-auto">
          <p className="text-label mb-4">Aus der Praxis</p>
          <h2 className="text-h2 text-[var(--color-neutral-900)] mb-12">
            Wie Zusammenarbeit entsteht
          </h2>

          <div className="bg-[var(--color-neutral-50)] rounded-2xl p-8 lg:p-12">
            <h3 className="text-[clamp(24px,3vw,32px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] mb-8">
              {featured.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                  Die Herausforderung
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">
                  {featured.challenge}
                </p>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                  Der Ansatz
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">
                  {featured.approach}
                </p>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                  Das Ergebnis
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">
                  {featured.result}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {featured.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-[12px] font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/fallbeispiele" className="btn-secondary">
              Alle Fallbeispiele ansehen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

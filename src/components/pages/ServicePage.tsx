import { useParams, Link, Navigate } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import { services, caseStudies } from '../../data/content'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/leistungen" replace />

  const relatedCase = caseStudies.find((c) =>
    c.tags.some((tag) => service.title.toLowerCase().includes(tag.toLowerCase().split(' ')[0]))
  ) || caseStudies[0]

  return <ServicePageContent service={service} relatedCase={relatedCase} />
}

function ServicePageContent({ service, relatedCase }: {
  service: typeof services[0]
  relatedCase: typeof caseStudies[0]
}) {
  usePageTitle(service.title)
  const heroRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const painRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.1 })
  const approachRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const methodsRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.08 })

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 lg:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <div ref={heroRef} className="max-w-[760px]">
            <Link to="/leistungen" className="text-label inline-flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 8H3M7 4L3 8l4 4"/></svg>
              Alle Leistungen
            </Link>
            <p className="text-[14px] font-medium text-[var(--color-primary-dark)] mb-3">{service.subtitle}</p>
            <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,80px)]">
              {service.title}
            </h1>
            <p className="text-body mt-6 text-[clamp(17px,1.3vw,20px)] max-w-[640px]">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-main">
          <div className="max-w-[960px]">
            <h2 className="text-h2 text-[var(--color-neutral-900)] mb-10">Das Problem</h2>
            <div ref={painRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.painPoints.map((point) => (
                <div key={point} className="flex gap-4 p-6 bg-[var(--color-neutral-50)] rounded-xl">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2.5"><path d="M4 8h8"/></svg>
                  </div>
                  <p className="text-[15px] text-[var(--color-neutral-700)] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div ref={approachRef} className="max-w-[760px]">
            <h2 className="text-h2 text-[var(--color-neutral-900)] mb-6">Mein Ansatz</h2>
            <p className="text-body text-[clamp(17px,1.3vw,20px)]">{service.approach}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-h2 text-[var(--color-neutral-900)] mb-10">Methoden & Tools</h2>
          <div ref={methodsRef} className="flex flex-wrap gap-3">
            {service.methods.map((method) => (
              <span key={method} className="px-5 py-2.5 text-[14px] font-medium bg-[var(--color-primary-light)] text-[var(--color-neutral-900)] rounded-full border border-[var(--color-primary)]/20">
                {method}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-h3 text-[var(--color-neutral-900)] mb-6">Formate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.formats.map((format) => (
                <div key={format} className="p-5 bg-[var(--color-neutral-50)] rounded-xl text-[15px] text-[var(--color-neutral-700)]">
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div className="max-w-[960px] mx-auto">
            <p className="text-label mb-4">Aus der Praxis</p>
            <h2 className="text-h2 text-[var(--color-neutral-900)] mb-8">{relatedCase.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">Herausforderung</p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{relatedCase.challenge}</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">Ansatz</p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{relatedCase.approach}</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">Ergebnis</p>
                <p className="text-[15px] leading-relaxed text-[var(--color-neutral-700)]">{relatedCase.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
        <div className="container-narrow text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-[var(--color-neutral-900)]/70 mb-8">Lassen Sie uns in einem kostenlosen Erstgespräch über Ihr Team sprechen.</p>
          <Link to="/kontakt" className="btn-primary !bg-[var(--color-neutral-900)] !text-white">
            Erstgespräch vereinbaren
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export function ServicesOverview() {
  usePageTitle('Leistungen')
  const ref = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.1 })

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <p className="text-label mb-4">Leistungen</p>
          <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,80px)]">
            Kommunikation, die wirkt.
          </h1>
          <p className="text-body mt-6 max-w-[600px] text-[clamp(17px,1.3vw,20px)]">
            Vier Schwerpunkte, ein Ziel: Zusammenarbeit, die funktioniert — von innen nach außen.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-main">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/leistungen/${service.slug}`}
                className="group bg-[var(--color-neutral-50)] rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <p className="text-[13px] font-medium uppercase tracking-wider text-[var(--color-primary-dark)] mb-3">
                  {service.subtitle}
                </p>
                <h2 className="text-[clamp(24px,3vw,36px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] mb-4">
                  {service.title}
                </h2>
                <p className="text-[15px] text-[var(--color-neutral-700)] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-neutral-900)] transition-all duration-300 group-hover:gap-3 group-hover:text-[var(--color-primary-dark)]">
                  Mehr erfahren
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

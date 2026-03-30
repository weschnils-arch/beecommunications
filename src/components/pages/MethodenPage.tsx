import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import { methods, workshops } from '../../data/content'
import { CtaSection } from '../sections/CtaSection'
import workshopsImg from '../../assets/images/workshops-overview.webp'

export function MethodenPage() {
  usePageTitle('Methoden & Modelle')
  const gridRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.08 })
  const wsRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.08 })

  const categories = [...new Set(methods.map((m) => m.category))]

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <p className="text-label mb-4">Methoden & Modelle</p>
          <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,80px)]">
            Werkzeuge, die wirken.
          </h1>
          <p className="text-body mt-6 max-w-[640px] text-[clamp(17px,1.3vw,20px)]">
            Keine Methode um der Methode willen. Ich arbeite mit bewährten Modellen — und setze sie dort ein, wo sie den größten Hebel haben.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-main">
          {categories.map((cat) => (
            <div key={cat} className="mb-16 last:mb-0">
              <h2 className="text-h3 text-[var(--color-neutral-900)] mb-6 pb-3 border-b border-[var(--color-neutral-200)]">{cat}</h2>
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {methods.filter((m) => m.category === cat).map((method) => (
                  <div key={method.name} className="p-6 bg-[var(--color-neutral-50)] rounded-xl hover:shadow-md transition-all duration-300">
                    <h3 className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-2 font-['Inter',sans-serif]">
                      {method.name}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[var(--color-neutral-700)]">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <p className="text-label mb-4">Online Impuls-Workshops</p>
          <h2 className="text-h2 text-[var(--color-neutral-900)] mb-4">
            Kompakte Formate, große Wirkung.
          </h2>
          <p className="text-body mb-8 max-w-[600px]">
            3-stündige Online-Workshops für 8-14 Teilnehmer*innen. Mit Lernmaterial, Transferaufgaben und Gruppenarbeit.
          </p>
          <div className="mb-12 max-w-[600px] rounded-2xl overflow-hidden shadow-lg">
            <img src={workshopsImg} alt="Online Impuls-Workshops Übersicht" className="w-full h-auto" loading="lazy" />
          </div>
          <div ref={wsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshops.map((ws) => (
              <div key={ws.title} className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-neutral-200)] hover:border-[var(--color-primary)] transition-colors duration-300">
                <h3 className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-2 font-['Inter',sans-serif]">
                  {ws.title}
                </h3>
                <p className="text-[14px] text-[var(--color-neutral-700)]">{ws.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

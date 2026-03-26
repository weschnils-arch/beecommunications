import { useScrollReveal } from '../../hooks/useScrollReveal'

export function SolutionBridge() {
  const ref = useScrollReveal<HTMLElement>({ direction: 'up' })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)]/50 to-transparent" />

      <div className="container-narrow relative z-10 text-center">
        <p className="text-label mb-6">#innenbeginnen</p>

        <h2 className="text-h2 text-[var(--color-neutral-900)] max-w-[800px] mx-auto">
          Veränderung beginnt in der Kommunikation.
        </h2>

        <div className="mt-10 max-w-[680px] mx-auto space-y-6">
          <p className="text-body text-[clamp(17px,1.3vw,20px)]">
            Wie im Bienenstock: Wenn die Kommunikation stimmt, entsteht <strong className="text-[var(--color-neutral-900)]">Schwarmwissen</strong>. Jedes Teammitglied weiß, was es beizutragen hat — und alle ziehen am selben Strang.
          </p>
          <p className="text-body text-[clamp(17px,1.3vw,20px)]">
            Mein Ansatz: Zuerst zuhören, dann verstehen, dann gestalten. Keine Standardlösungen, sondern maßgeschneiderte Kommunikationskonzepte, die zu Ihrem Team passen.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
            <span className="text-[28px]">&#x1F41D;</span>
            <span className="text-[15px] font-medium text-[var(--color-neutral-900)] italic font-['DM_Serif_Display',Georgia,serif]">
              Kommunikation, die bee_geistert.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function CtaSection() {
  const ref = useScrollReveal<HTMLElement>({ direction: 'scale' })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="honeycomb-bg !opacity-10" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <h2 className="text-[clamp(32px,5vw,56px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] leading-tight mb-6">
          Lassen Sie uns sprechen.
        </h2>
        <p className="text-[clamp(16px,1.3vw,20px)] text-[var(--color-neutral-900)]/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
          Das Erstgespräch ist kostenlos und unverbindlich. Erzählen Sie mir von Ihrem Team — ich höre zu.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/kontakt" className="btn-primary !bg-[var(--color-neutral-900)] !text-white hover:!bg-[var(--color-neutral-900)]/90">
            Erstgespräch vereinbaren
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
          <Link to="/team-check" className="btn-secondary !border-[var(--color-neutral-900)]/30 !text-[var(--color-neutral-900)] hover:!border-[var(--color-neutral-900)]">
            Team-Check starten
          </Link>
        </div>
      </div>
    </section>
  )
}

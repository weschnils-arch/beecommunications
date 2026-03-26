import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { siteConfig } from '../../data/content'

export function KontaktPage() {
  const formRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <p className="text-label mb-4">Kontakt</p>
          <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,80px)]">
            Lassen Sie uns sprechen.
          </h1>
          <p className="text-body mt-6 max-w-[600px] text-[clamp(17px,1.3vw,20px)]">
            Das Erstgespräch ist kostenlos und unverbindlich. Schreiben Sie mir — ich melde mich innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div ref={formRef}>
              {submitted ? (
                <div className="bg-[var(--color-primary-light)] rounded-2xl p-10 text-center">
                  <div className="text-[48px] mb-4">&#x1F41D;</div>
                  <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Vielen Dank!</h2>
                  <p className="text-body">Ihre Nachricht ist angekommen. Ich melde mich in Kürze bei Ihnen.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] font-medium text-[var(--color-neutral-900)] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg text-[15px] text-[var(--color-neutral-900)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-medium text-[var(--color-neutral-900)] mb-2">Unternehmen</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg text-[15px] text-[var(--color-neutral-900)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-neutral-900)] mb-2">E-Mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg text-[15px] text-[var(--color-neutral-900)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="ihre@email.at"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-neutral-900)] mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg text-[15px] text-[var(--color-neutral-900)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="+43 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[var(--color-neutral-900)] mb-2">Ihre Nachricht *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-lg text-[15px] text-[var(--color-neutral-900)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                      placeholder="Erzählen Sie mir kurz, worum es geht..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto justify-center">
                    Nachricht senden
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-h3 text-[var(--color-neutral-900)] mb-4">Direkter Kontakt</h3>
                <div className="space-y-3 text-[15px] text-[var(--color-neutral-700)]">
                  <p className="font-semibold text-[var(--color-neutral-900)]">{siteConfig.owner}</p>
                  <p>{siteConfig.address}</p>
                  <p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-[var(--color-primary-dark)] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-primary-dark)] transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-primary-dark)] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-neutral-50)] rounded-xl p-6">
                <h3 className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-3 font-['Inter',sans-serif]">
                  Lieber telefonieren?
                </h3>
                <p className="text-[14px] text-[var(--color-neutral-700)] leading-relaxed">
                  Rufen Sie mich an oder schicken Sie eine kurze E-Mail mit Ihrem Wunschtermin. Ich rufe Sie zurück.
                </p>
              </div>

              <div className="bg-[var(--color-primary-light)] rounded-xl p-6">
                <h3 className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-3 font-['Inter',sans-serif]">
                  Team-Kommunikations-Check
                </h3>
                <p className="text-[14px] text-[var(--color-neutral-700)] leading-relaxed mb-4">
                  30 Minuten, kostenlos, auf den Punkt. Erste Einschätzung Ihrer Team-Kommunikation.
                </p>
                <a href="/team-check" className="text-[14px] font-semibold text-[var(--color-primary-dark)] inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Zum Team-Check
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

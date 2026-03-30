import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePageTitle } from '../../hooks/usePageTitle'
import { faqItems, testimonials, siteConfig } from '../../data/content'
import feedbackRegeln from '../../assets/images/feedback-regeln.webp'

export function TeamCheckPage() {
  usePageTitle('Team-Kommunikations-Check')
  const heroRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const offerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <section className="min-h-screen flex items-center pt-[80px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-bg)] to-[var(--color-bg)]" />
        <div className="honeycomb-bg" />

        <div className="container-main relative z-10">
          <div ref={heroRef} className="max-w-[760px] mx-auto text-center">
            <p className="text-label mb-6">Kostenloser Team-Kommunikations-Check</p>
            <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(26px,6vw,80px)]">
              Wie gut kommuniziert Ihr Team wirklich?
            </h1>
            <p className="text-body mt-8 text-[clamp(17px,1.3vw,20px)] max-w-[600px] mx-auto">
              In 30 Minuten erhalten Sie eine ehrliche Einschätzung Ihrer Team-Kommunikation — und konkrete erste Schritte.
            </p>
            <a href="#team-check-form" className="btn-primary mt-10 inline-flex">
              Jetzt Team-Check anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M4 9l4 4 4-4"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-h2 text-[var(--color-neutral-900)] text-center mb-12">
              Kommt Ihnen das bekannt vor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '&#x23F0;', text: 'Meetings dauern ewig — Ergebnisse fehlen trotzdem.' },
                { icon: '&#x1F910;', text: 'Konflikte schwelen, aber keiner spricht sie an.' },
                { icon: '&#x1F4C9;', text: 'Informationen versickern zwischen Abteilungen.' },
              ].map((item, i) => (
                <div key={i} className="bg-[var(--color-bg)] rounded-xl p-6 text-center">
                  <span className="text-[36px] block mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <p className="text-[15px] text-[var(--color-neutral-700)] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div ref={offerRef} className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-label mb-4">Das Angebot</p>
              <h2 className="text-h2 text-[var(--color-neutral-900)]">
                Der Team-Kommunikations-Check
              </h2>
              <p className="text-body mt-4 max-w-[600px] mx-auto">
                Ein 30-minütiges Gespräch, in dem ich Ihnen zuhöre, gezielte Fragen stelle und Ihnen eine erste Einschätzung gebe. Kostenlos und unverbindlich.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Ehrliche Einschätzung', desc: 'Keine Verkaufsgespräche. Ich sage Ihnen, was ich sehe — auch wenn es unbequem ist.' },
                { title: 'Erste Handlungsempfehlungen', desc: 'Konkrete Ideen, was Sie sofort tun können — auch ohne mich.' },
                { title: 'Klarer nächster Schritt', desc: 'Ob eine Zusammenarbeit Sinn macht, entscheiden wir gemeinsam.' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-[var(--color-primary-light)] rounded-xl">
                  <h3 className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-2 font-['Inter',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-neutral-700)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div className="max-w-[640px] mx-auto flex flex-col sm:flex-row items-center gap-6 p-8 bg-[var(--color-bg)] rounded-2xl">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={feedbackRegeln} alt="Gerlinde Oberndorfer" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[var(--color-neutral-900)]">{siteConfig.owner}</p>
              <p className="text-[14px] text-[var(--color-neutral-700)] mt-1">
                20+ Jahre Erfahrung in Unternehmenskommunikation. Master in Training & Development. PERMA-Lead zertifiziert.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-[640px] mx-auto text-center">
            <svg className="w-10 h-10 text-[var(--color-primary)] opacity-30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-[clamp(18px,2.5vw,24px)] font-['DM_Serif_Display',Georgia,serif] leading-relaxed text-[var(--color-neutral-900)] mb-6">
              {testimonials[0].quote}
            </blockquote>
            <p className="text-[15px] font-semibold text-[var(--color-neutral-900)]">{testimonials[0].author}</p>
            <p className="text-[14px] text-[var(--color-neutral-700)] mt-1">{testimonials[0].company}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-h2 text-[var(--color-neutral-900)] text-center mb-10">Häufige Fragen</h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-[15px] font-semibold text-[var(--color-neutral-900)] pr-4">{item.question}</span>
                    <svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-neutral-400)" strokeWidth="1.5"
                      className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    >
                      <path d="M5 8l5 5 5-5"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-[14px] text-[var(--color-neutral-700)] leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team-check-form" className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] relative">
        <div className="container-narrow relative z-10">
          <div className="max-w-[560px] mx-auto">
            <h2 className="text-[clamp(28px,4vw,44px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] text-center mb-8">
              Team-Check anfragen
            </h2>

            {submitted ? (
              <div className="bg-white/90 rounded-2xl p-10 text-center">
                <div className="text-[48px] mb-4">&#x1F41D;</div>
                <h3 className="text-h3 text-[var(--color-neutral-900)] mb-3">Vielen Dank!</h3>
                <p className="text-body">Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Ihr Name *"
                  className="w-full px-4 py-3.5 bg-white/90 border-0 rounded-lg text-[15px] text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-900)]/20"
                />
                <input
                  type="email"
                  required
                  placeholder="Ihre E-Mail *"
                  className="w-full px-4 py-3.5 bg-white/90 border-0 rounded-lg text-[15px] text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-900)]/20"
                />
                <input
                  type="text"
                  placeholder="Unternehmen & Ihre Rolle"
                  className="w-full px-4 py-3.5 bg-white/90 border-0 rounded-lg text-[15px] text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-900)]/20"
                />
                <textarea
                  rows={3}
                  placeholder="Was beschäftigt Sie gerade? (optional)"
                  className="w-full px-4 py-3.5 bg-white/90 border-0 rounded-lg text-[15px] text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-900)]/20 resize-none"
                />
                <button type="submit" className="btn-primary !bg-[var(--color-neutral-900)] !text-white w-full justify-center">
                  Kostenlos anfragen
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </button>
                <p className="text-[12px] text-[var(--color-neutral-900)]/50 text-center">
                  Kostenlos & unverbindlich. Keine versteckten Kosten.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

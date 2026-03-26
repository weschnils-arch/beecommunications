import { useScrollReveal } from '../../hooks/useScrollReveal'
import { siteConfig, credentials } from '../../data/content'
import { CtaSection } from '../sections/CtaSection'
import feedbackRegeln from '../../assets/images/feedback-regeln.webp'

export function UeberMichPage() {
  const bioRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const storyRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const credRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.08 })

  return (
    <>
      <section className="pt-[120px] lg:pt-[140px] pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-light)]/30 to-transparent h-[60%]" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={bioRef}>
              <p className="text-label mb-4">Über mich</p>
              <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(28px,6vw,72px)]">
                Gerlinde Oberndorfer
              </h1>
              <p className="text-[var(--color-primary-dark)] text-[18px] mt-2 mb-6 font-medium">
                Master in Training & Development
              </p>
              <div className="space-y-4 text-body text-[clamp(16px,1.2vw,18px)]">
                <p>
                  Seit über 20 Jahren beschäftige ich mich mit dem, was Zusammenarbeit ausmacht — und was sie verhindert. Nach 9 Jahren als Leiterin für Kommunikation, PR und Customer Experience bei der Hello bank! (BNP Paribas) habe ich 2019 Bee Communications gegründet.
                </p>
                <p>
                  Mein Fokus: Teams und Organisationen dabei unterstützen, eine Kommunikationskultur zu entwickeln, die trägt. Nicht mit Standardrezepten, sondern mit dem, was zu den Menschen und zum Unternehmen passt.
                </p>
                <p>
                  Ich arbeite mit Führungskräften, die spüren, dass es im Team nicht rund läuft — und die bereit sind, etwas daran zu ändern. Manchmal reicht ein Impuls, manchmal braucht es einen Prozess. Beides ist okay.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[300px] h-[380px] lg:w-[360px] lg:h-[440px] rounded-2xl overflow-hidden">
                <img
                  src={feedbackRegeln}
                  alt="Gerlinde Oberndorfer — Bee Communications"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--color-neutral-900)]/60 to-transparent">
                  <p className="text-white text-[14px] font-medium">Salzburg, Österreich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-neutral-50)]">
        <div className="container-main">
          <div ref={storyRef} className="max-w-[760px]">
            <h2 className="text-h2 text-[var(--color-neutral-900)] mb-8">Mein Weg</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[3px] bg-[var(--color-primary)] rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-1">1994 – 2000</p>
                  <p className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-1 font-['Inter',sans-serif]">Internationale Unternehmen, Wien</p>
                  <p className="text-[15px] text-[var(--color-neutral-700)]">Marketing, International Trade & Executive Support. Die Grundlage für mein Verständnis von Unternehmenskommunikation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[3px] bg-[var(--color-primary)] rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-1">2000 – 2008</p>
                  <p className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-1 font-['Inter',sans-serif]">Leitungsfunktionen — Marketing & PR</p>
                  <p className="text-[15px] text-[var(--color-neutral-700)]">Stv. Abteilungsdirektorin, Leiterin Marketing & PR. Und dazwischen: Mutter werden — Sohn Felix und Tochter Luzia.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[3px] bg-[var(--color-primary)] rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-1">2009 – 2018</p>
                  <p className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-1 font-['Inter',sans-serif]">Hello bank! / BNP Paribas</p>
                  <p className="text-[15px] text-[var(--color-neutral-700)]">9 Jahre Communication, PR & Customer Experience. Interne und externe Kommunikation, Marketing, Events. In dieser Zeit auch das Master-Studium absolviert.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[3px] bg-[var(--color-primary)] rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-1">2013 – 2016</p>
                  <p className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-1 font-['Inter',sans-serif]">Master in Training & Development</p>
                  <p className="text-[15px] text-[var(--color-neutral-700)]">Berufsbegleitend an der Universität Salzburg / SMBS. Organisations- und Personalentwicklung, Wirtschaftstraining, Führung und Coaching.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-[3px] bg-[var(--color-primary)] rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] mb-1">Seit 2019</p>
                  <p className="text-[17px] font-semibold text-[var(--color-neutral-900)] mb-1 font-['Inter',sans-serif]">Bee Communications</p>
                  <p className="text-[15px] text-[var(--color-neutral-700)]">Mein eigenes Unternehmen. Organisationsentwicklung, Teamkommunikation, Trainings und Coaching — für Teams und Führungskräfte, die wirklich etwas verändern wollen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-h2 text-[var(--color-neutral-900)] mb-4">Qualifikationen</h2>
          <p className="text-body mb-12 max-w-[600px]">
            Sprachen: Deutsch (Muttersprache), Englisch (fließend), Italienisch (fließend), Spanisch (Grundkenntnisse)
          </p>
          <div ref={credRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred) => (
              <div key={cred.name} className="p-6 bg-[var(--color-neutral-50)] rounded-xl flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-dark)" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 15l-3 3 1-4-3-3h4L12 7l1 4h4l-3 3 1 4z"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[var(--color-neutral-900)]">{cred.name}</p>
                  <p className="text-[13px] text-[var(--color-neutral-700)] mt-1">{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-neutral-50)]">
        <div className="container-main text-center">
          <p className="text-[15px] text-[var(--color-neutral-700)]">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-primary-dark)] transition-colors">{siteConfig.email}</a>
            {' | '}
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-[var(--color-primary-dark)] transition-colors">{siteConfig.phone}</a>
            {' | '}
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-dark)] transition-colors">LinkedIn</a>
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

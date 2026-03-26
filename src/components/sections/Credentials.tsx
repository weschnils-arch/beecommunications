import { useScrollReveal } from '../../hooks/useScrollReveal'
import permaLead from '../../assets/images/perma-lead.webp'
import medienfrauen from '../../assets/images/medienfrauen.webp'
import creativeIndustry from '../../assets/images/creative-industry.svg'

const credentialItems = [
  { name: 'PERMA-Lead', description: 'Positive Leadership Zertifizierung', image: permaLead },
  { name: 'Master MTD', description: 'Universität Salzburg / SMBS', image: null },
  { name: 'HRM Experts', description: 'Human Resource Management', image: null },
  { name: 'Creative Industry', description: 'Choch3 Expert Certificate', image: creativeIndustry },
  { name: 'Salzburger Medienfrauen', description: 'Mitglied', image: medienfrauen },
  { name: 'WKO', description: 'Wirtschaftskammer Österreich', image: null },
]

export function Credentials() {
  const ref = useScrollReveal<HTMLElement>({ direction: 'up' })

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[var(--color-neutral-50)] border-y border-[var(--color-neutral-200)]">
      <div className="container-main">
        <p className="text-label text-center mb-10">Zertifizierungen & Mitgliedschaften</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {credentialItems.map((cred) => (
            <div key={cred.name} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-neutral-200)] flex items-center justify-center transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:shadow-md overflow-hidden p-2">
                {cred.image ? (
                  <img src={cred.image} alt={cred.name} className="w-full h-full object-contain" loading="lazy" />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 15l-3 3 1-4-3-3h4L12 7l1 4h4l-3 3 1 4z"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                )}
              </div>
              <p className="text-[13px] font-semibold text-[var(--color-neutral-900)] leading-tight">
                {cred.name}
              </p>
              <p className="text-[12px] text-[var(--color-neutral-400)] mt-1 leading-snug">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import logoFull from '../../assets/images/logo-full.webp'

export function Footer() {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-white">
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <img src={logoFull} alt="Bee Communications" className="h-[32px] w-auto brightness-0 invert mb-6" loading="lazy" />
            <p className="text-[14px] text-white/60 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-[14px] text-white/40 italic font-['DM_Serif_Display',Georgia,serif]">
              {siteConfig.claim}
            </p>
          </div>

          <div>
            <h4 className="text-[14px] font-['Inter',sans-serif] font-semibold uppercase tracking-wider text-white/40 mb-6">
              Leistungen
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/leistungen/teamkommunikation" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Teamkommunikation</Link></li>
              <li><Link to="/leistungen/organisationsentwicklung" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Organisationsentwicklung</Link></li>
              <li><Link to="/leistungen/leadership-training" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Leadership Training</Link></li>
              <li><Link to="/leistungen/employer-branding" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Employer Branding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-['Inter',sans-serif] font-semibold uppercase tracking-wider text-white/40 mb-6">
              Entdecken
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/methoden" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Methoden & Modelle</Link></li>
              <li><Link to="/fallbeispiele" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Fallbeispiele</Link></li>
              <li><Link to="/ueber-mich" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Über mich</Link></li>
              <li><Link to="/team-check" className="text-[15px] text-white/70 hover:text-[var(--color-primary)] transition-colors">Team-Check</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-['Inter',sans-serif] font-semibold uppercase tracking-wider text-white/40 mb-6">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-3 text-[15px] text-white/70">
              <li>{siteConfig.owner}</li>
              <li>{siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-[var(--color-primary)] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-primary)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Bee Communications | UID: {siteConfig.uid}
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

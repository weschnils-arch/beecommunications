import { siteConfig } from '../../data/content'
import { usePageTitle } from '../../hooks/usePageTitle'

export function ImpressumPage() {
  usePageTitle('Impressum')
  return (
    <section className="pt-[120px] lg:pt-[140px] section-padding">
      <div className="container-narrow">
        <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(32px,5vw,56px)] mb-12">Impressum</h1>
        <div className="prose max-w-none space-y-6 text-body">
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Informationen gemäß § 5 ECG</h2>
            <p><strong>Bee Communications</strong></p>
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address}</p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Kontakt</h2>
            <p>Telefon: {siteConfig.phone}</p>
            <p>E-Mail: <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-primary-dark)] hover:underline">{siteConfig.email}</a></p>
            <p>Web: {siteConfig.website}</p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Umsatzsteuer-ID</h2>
            <p>UID: {siteConfig.uid}</p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Berufsbezeichnung</h2>
            <p>Unternehmensberatung</p>
            <p>Mitglied der Wirtschaftskammer Österreich</p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DatenschutzPage() {
  usePageTitle('Datenschutz')
  return (
    <section className="pt-[120px] lg:pt-[140px] section-padding">
      <div className="container-narrow">
        <h1 className="text-display text-[var(--color-neutral-900)] !text-[clamp(32px,5vw,56px)] mb-12">Datenschutz</h1>
        <div className="prose max-w-none space-y-6 text-body">
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Datenschutzerklärung</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Verantwortliche</h2>
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address}</p>
            <p>E-Mail: {siteConfig.email}</p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Kontaktformular</h2>
            <p>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit mir aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Ihre Rechte</h2>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
          </div>
          <div>
            <h2 className="text-h3 text-[var(--color-neutral-900)] mb-3">Webhosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Die Server befinden sich in der EU. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

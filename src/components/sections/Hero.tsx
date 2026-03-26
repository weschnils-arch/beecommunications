import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import beeIcon from '../../assets/images/bee-icon.webp'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(headlineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      .fromTo(sublineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(visualRef.current, { opacity: 0, scale: 0.8, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.2 }, '-=1')

    return () => { tl.kill() }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-[80px]">
      <div className="honeycomb-bg" />

      <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-10 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-label mb-6">Teamkommunikation & Organisationsentwicklung</p>

            <h1 ref={headlineRef} className="text-display text-[var(--color-neutral-900)]">
              Kommunikation,<br />
              <span className="whitespace-nowrap">die <span className="text-[var(--color-primary)]">bee</span><span className="tracking-[-0.08em]">_</span>geistert.</span>
            </h1>

            <p ref={sublineRef} className="text-body mt-8 max-w-[520px] text-[clamp(17px,1.3vw,20px)]">
              Ich unterstütze Teams und Führungskräfte dabei, eine Kommunikation zu entwickeln, die von innen heraus trägt — ehrlich, klar und nachhaltig.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary">
                Erstgespräch vereinbaren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <Link to="/leistungen" className="btn-secondary">
                Leistungen entdecken
              </Link>
            </div>
          </div>

          <div ref={visualRef} className="relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)]/20" />
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-primary-light)] flex items-center justify-center">
                <img src={beeIcon} alt="Bee Communications" className="w-[60%] h-[60%] object-contain" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[var(--color-accent)] opacity-15 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[12px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-[var(--color-neutral-900)] animate-pulse" />
      </div>
    </section>
  )
}

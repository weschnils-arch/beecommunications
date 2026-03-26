import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxBreakerProps {
  quote: string
  subtitle?: string
  variant: 'warm' | 'dark' | 'golden' | 'muted'
  backgroundImage?: string
}

const variantStyles = {
  warm: {
    bg: 'bg-gradient-to-br from-[#FDF0D5] via-[#F9B233]/20 to-[#C67D4A]/10',
    text: 'text-[var(--color-neutral-900)]',
    sub: 'text-[var(--color-neutral-700)]',
    overlay: '',
  },
  dark: {
    bg: 'bg-[var(--color-neutral-900)]',
    text: 'text-white',
    sub: 'text-white/60',
    overlay: '',
  },
  golden: {
    bg: 'bg-gradient-to-br from-[#F9B233] via-[#D4941E] to-[#C67D4A]',
    text: 'text-[var(--color-neutral-900)]',
    sub: 'text-[var(--color-neutral-900)]/60',
    overlay: '',
  },
  muted: {
    bg: 'bg-gradient-to-br from-[var(--color-neutral-50)] via-[#E8E4DF] to-[var(--color-neutral-50)]',
    text: 'text-[var(--color-neutral-900)]',
    sub: 'text-[var(--color-neutral-700)]',
    overlay: '',
  },
}

export function ParallaxBreaker({ quote, subtitle, variant, backgroundImage }: ParallaxBreakerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const bg = bgRef.current
    if (!section || !content || !bg) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.fromTo(bg, { y: -60 }, { y: 60, ease: 'none' })

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
      },
    })

    contentTl.fromTo(content,
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, ease: 'power2.out' }
    )

    return () => {
      tl.kill()
      contentTl.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill()
      })
    }
  }, [])

  const styles = variantStyles[variant]

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${backgroundImage ? 'min-h-[60vh]' : 'min-h-[50vh]'} flex items-center justify-center`}
    >
      <div
        ref={bgRef}
        className="absolute inset-[-60px] will-change-transform"
      >
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className={`absolute inset-0 ${variant === 'dark' ? 'bg-[var(--color-neutral-900)]/70' : 'bg-[var(--color-bg)]/40 backdrop-blur-[2px]'}`} />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 ${styles.bg}`} />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='70' viewBox='0 0 60 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23F9B233' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 70px',
            }} />
          </>
        )}
      </div>

      <div ref={contentRef} className="relative z-10 container-narrow text-center py-20 lg:py-28">
        <blockquote className={`font-['DM_Serif_Display',Georgia,serif] text-[clamp(28px,4.5vw,56px)] leading-[1.15] ${styles.text}`}>
          {quote}
        </blockquote>
        {subtitle && (
          <p className={`mt-6 text-[clamp(14px,1.2vw,17px)] font-medium uppercase tracking-[0.12em] ${styles.sub}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

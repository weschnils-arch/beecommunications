import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  height?: string
  overlay?: 'light' | 'dark' | 'golden' | 'none'
  children?: React.ReactNode
}

export function ParallaxImage({ src, alt, height = '50vh', overlay = 'dark', children }: ParallaxImageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.fromTo(img, { y: '-15%' }, { y: '15%', ease: 'none' })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill()
      })
    }
  }, [])

  const overlayClasses: Record<string, string> = {
    light: 'bg-[var(--color-bg)]/30',
    dark: 'bg-[var(--color-neutral-900)]/50',
    golden: 'bg-gradient-to-br from-[#F9B233]/40 to-[#C67D4A]/30',
    none: '',
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[130%] object-cover will-change-transform -top-[15%]"
        loading="lazy"
      />
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </section>
  )
}

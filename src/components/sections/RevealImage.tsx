import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealImageProps {
  src: string
  alt: string
}

export function RevealImage({ src, alt }: RevealImageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const wrapper = wrapperRef.current
    const img = imgRef.current
    if (!section || !wrapper || !img) return

    gsap.fromTo(wrapper,
      { clipPath: 'inset(5% 45% 5% 45% round 16px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.8,
        },
      }
    )

    gsap.fromTo(img,
      { scale: 1.15 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill()
      })
    }
  }, [])

  return (
    <section ref={sectionRef}>
      <div
        ref={wrapperRef}
        className="w-full h-[50vh] lg:h-[70vh] overflow-hidden will-change-[clip-path]"
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover will-change-transform"
          loading="lazy"
        />
      </div>
    </section>
  )
}

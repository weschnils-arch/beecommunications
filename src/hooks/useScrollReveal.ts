import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface UseScrollRevealOptions {
  direction?: RevealDirection
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(options: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const { direction = 'up', delay = 0, duration = 0.8, stagger = 0, once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 ? el.children : el

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay }
    const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: 'power3.out' }

    if (stagger > 0) {
      fromVars.stagger = stagger
      toVars.stagger = stagger
    }

    switch (direction) {
      case 'up':
        fromVars.y = 40
        toVars.y = 0
        break
      case 'left':
        fromVars.x = -40
        toVars.x = 0
        break
      case 'right':
        fromVars.x = 40
        toVars.x = 0
        break
      case 'scale':
        fromVars.scale = 0.95
        toVars.scale = 1
        break
    }

    const tween = gsap.fromTo(targets, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [direction, delay, duration, stagger, once])

  return ref
}

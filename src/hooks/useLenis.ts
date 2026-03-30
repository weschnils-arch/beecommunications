import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function useLenis() {
  const rafRef = useRef<((time: number) => void) | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => { lenis.raf(time * 1000) }
    rafRef.current = raf
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenisInstance = null
      lenis.destroy()
      if (rafRef.current) gsap.ticker.remove(rafRef.current)
    }
  }, [])
}

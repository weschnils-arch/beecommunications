import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCountUp(target: number, duration = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const obj = { val: 0 }
        gsap.fromTo(obj, { val: 0 }, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => setCount(Math.round(obj.val)),
        })
      },
    })

    return () => st.kill()
  }, [target, duration])

  return { count, ref }
}

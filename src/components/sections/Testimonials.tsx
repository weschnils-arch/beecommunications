import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { testimonials } from '../../data/content'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useScrollReveal<HTMLElement>({ direction: 'up' })

  return (
    <section ref={ref} className="section-padding bg-[var(--color-neutral-900)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[14px] font-medium uppercase tracking-wider text-[var(--color-primary)] mb-6">
            Kundenstimmen
          </p>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <div key={active} className="animate-fade-in">
              <svg className="w-12 h-12 text-[var(--color-primary)] opacity-30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <blockquote className="text-[clamp(20px,2.5vw,28px)] font-['DM_Serif_Display',Georgia,serif] leading-relaxed text-white/90 mb-8">
                {testimonials[active].quote}
              </blockquote>

              <div>
                <p className="text-[15px] font-semibold text-white">
                  {testimonials[active].author}
                </p>
                <p className="text-[14px] text-white/50 mt-1">
                  {testimonials[active].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-[var(--color-primary)] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

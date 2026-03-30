import { stats } from '../../data/content'
import { useCountUp } from '../../hooks/useCountUp'

function StatItem({ value, suffix, label, startFrom = 0 }: { value: number; suffix: string; label: string; startFrom?: number }) {
  const { count, ref } = useCountUp(value, 2, startFrom)

  return (
    <div ref={ref} className="text-center">
      <span className="text-[clamp(40px,6vw,72px)] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] leading-none">
        {count}{suffix}
      </span>
      <p className="text-[14px] text-[var(--color-neutral-700)] mt-2 max-w-[200px] mx-auto leading-relaxed">
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

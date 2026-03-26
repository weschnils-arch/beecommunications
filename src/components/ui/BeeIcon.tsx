export function BeeIcon({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="290" cy="130" r="55" stroke="currentColor" strokeWidth="28" fill="none" />
      <path
        d="M220 280c-60 30-140 10-180-60 80-20 140 10 180 60z"
        fill="var(--color-primary)"
      />
      <path
        d="M320 180c40-50 120-60 170-10-60 40-130 40-170 10z"
        fill="var(--color-primary)"
      />
      <path
        d="M240 200c-30 60-10 140 60 180 20-80-10-140-60-180z"
        fill="var(--color-primary)"
      />
      <ellipse
        cx="270"
        cy="300"
        rx="120"
        ry="80"
        stroke="currentColor"
        strokeWidth="28"
        fill="none"
        transform="rotate(-20, 270, 300)"
      />
    </svg>
  )
}

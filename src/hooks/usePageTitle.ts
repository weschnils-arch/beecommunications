import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} — Bee Communications` : 'Bee Communications — Kommunikation, die bee_geistert.'
    return () => {
      document.title = 'Bee Communications — Kommunikation, die bee_geistert.'
    }
  }, [title])
}

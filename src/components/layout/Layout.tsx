import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useLenis, getLenis } from '../../hooks/useLenis'

export function Layout() {
  useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])

  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

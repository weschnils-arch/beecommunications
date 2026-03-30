import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useLenis } from '../../hooks/useLenis'

export function Layout() {
  useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
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

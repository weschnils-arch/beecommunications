import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLenis, getLenis } from '../../hooks/useLenis'
import { siteConfig } from '../../data/content'
import logoFull from '../../assets/images/logo-full.webp'

export function TeamCheckLayout() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFDFB]/95 backdrop-blur-md shadow-[0_1px_0_var(--color-neutral-200)]">
        <div className="container-main flex items-center justify-between h-[72px] lg:h-[80px]">
          <Link to="/" className="flex-shrink-0">
            <img src={logoFull} alt="Bee Communications" className="h-[32px] lg:h-[38px] w-auto" />
          </Link>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-[14px] font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary-dark)] transition-colors hidden sm:flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {siteConfig.phone}
          </a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[var(--color-neutral-900)] text-white py-8">
        <div className="container-main text-center">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Bee Communications | {siteConfig.owner}
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <Link to="/impressum" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

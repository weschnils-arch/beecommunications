import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoFull from '../../assets/images/logo-full.webp'

const navLinks = [
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Teamkommunikation', href: '/leistungen/teamkommunikation' },
      { label: 'Organisationsentwicklung', href: '/leistungen/organisationsentwicklung' },
      { label: 'Leadership Training', href: '/leistungen/leadership-training' },
      { label: 'Employer Branding', href: '/leistungen/employer-branding' },
    ],
  },
  { label: 'Methoden', href: '/methoden' },
  { label: 'Fallbeispiele', href: '/fallbeispiele' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isMobileOpen
          ? 'bg-[#FEFDFB] shadow-[0_1px_0_var(--color-neutral-200)]'
          : isScrolled
            ? 'bg-[#FEFDFB]/95 backdrop-blur-md shadow-[0_1px_0_var(--color-neutral-200)]'
            : 'bg-[#FEFDFB]/0'
      }`}
    >
      <div className="container-main flex items-center justify-between h-[72px] lg:h-[80px]">
        <Link to="/" className="relative z-50 flex-shrink-0">
          <img src={logoFull} alt="Bee Communications" className="h-[32px] lg:h-[38px] w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href}
                className={`text-[15px] font-medium transition-colors duration-200 hover:text-[var(--color-primary-dark)] ${
                  location.pathname.startsWith(link.href)
                    ? 'text-[var(--color-primary-dark)]'
                    : 'text-[var(--color-neutral-700)]'
                }`}
              >
                {link.label}
              </Link>

              {link.children && activeDropdown === link.href && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-[var(--color-bg)] rounded-lg shadow-lg border border-[var(--color-neutral-200)] p-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-[14px] text-[var(--color-neutral-700)] hover:text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-50)] rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/kontakt" className="btn-primary text-[14px] py-3 px-6">
            Erstgespräch
          </Link>
        </div>

        <button
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menü"
        >
          <span
            className={`block w-6 h-[2px] bg-[var(--color-neutral-900)] transition-all duration-300 ${
              isMobileOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[var(--color-neutral-900)] transition-all duration-300 ${
              isMobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[var(--color-neutral-900)] transition-all duration-300 ${
              isMobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 pt-[72px]" style={{ backgroundColor: '#FEFDFB' }}>
          <div className="container-main py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className="text-[28px] font-['DM_Serif_Display',Georgia,serif] text-[var(--color-neutral-900)] block"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="text-[16px] text-[var(--color-neutral-700)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Link to="/kontakt" className="btn-primary w-full justify-center">
                Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

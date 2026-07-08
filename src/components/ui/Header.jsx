import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const headerRef = useRef(null)
  const menuOverlayRef = useRef(null)
  const menuItemsRef = useRef([])
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(() => {
    gsap.fromTo(headerRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.2 })
  }, [])

  const toggleMenu = () => {
    const opening = !menuOpen
    setMenuOpen(opening)

    if (opening) {
      gsap.set(menuOverlayRef.current, { display: 'flex' })
      gsap.fromTo(menuOverlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      )
    } else {
      gsap.to(menuOverlayRef.current, { opacity: 0, duration: 0.2, onComplete: () => gsap.set(menuOverlayRef.current, { display: 'none' }) })
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] md:w-auto md:min-w-[640px] lg:min-w-[800px]"
      >
        <nav className="flex items-center justify-between px-5 py-3 bg-cardBg backdrop-blur-xl border border-cardBorder rounded-full">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="TeenAviva" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-bold text-textPrimary hidden sm:inline">TeenAviva</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-textDim hover:text-gold transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="/download/teenaviva.apk"
              className="inline-flex items-center gap-1.5 bg-gold text-brownDeep font-semibold text-xs px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Android
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 bg-cardBg border border-cardBorder text-textPrimary font-semibold text-xs px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              iOS
            </a>
          </div>

          <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1 p-1" aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-textPrimary transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-textPrimary transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-textPrimary transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </nav>
      </header>

      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-40 bg-brownDeep/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 hidden md:hidden"
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            ref={(el) => (menuItemsRef.current[i] = el)}
            href={link.href}
            className="text-2xl text-textPrimary hover:text-gold transition-colors"
            onClick={toggleMenu}
          >
            {link.label}
          </a>
        ))}
        <div ref={(el) => (menuItemsRef.current[navLinks.length] = el)} className="mt-4 flex flex-col gap-3 w-full max-w-[220px]">
          <a
            href="/download/teenaviva.apk"
            className="inline-flex items-center justify-center gap-2 bg-gold text-brownDeep font-bold px-8 py-3 rounded-full"
            onClick={toggleMenu}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Android
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-cardBg border border-cardBorder text-textPrimary font-bold px-8 py-3 rounded-full"
            onClick={toggleMenu}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            iOS
          </a>
        </div>
      </div>
    </>
  )
}

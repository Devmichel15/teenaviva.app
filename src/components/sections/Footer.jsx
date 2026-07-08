import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Footer() {
  const footerRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            end: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative border-t border-divider py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <p className="font-bold text-2xl text-textPrimary">
              Teen<span className="text-gold">Aviva</span>
            </p>
            <p className="text-textDim text-sm mt-1">A Bíblia em contexto para adolescentes</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-textDim hover:text-gold transition-colors duration-200" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-textDim hover:text-gold transition-colors duration-200" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            <a href="#" className="text-textDim hover:text-gold transition-colors duration-200" aria-label="TikTok">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-divider">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-textDim hover:text-textPrimary transition-colors">Política de Privacidade</a>
            <a href="#" className="text-textDim hover:text-textPrimary transition-colors">Termos de Uso</a>
            <a href="#" className="text-textDim hover:text-textPrimary transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/download/teenaviva.apk"
              className="inline-flex items-center gap-2 bg-gold text-brownDeep font-bold px-5 py-3 rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95 text-sm"
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
              className="inline-flex items-center gap-2 bg-cardBg border border-cardBorder text-textPrimary font-bold px-5 py-3 rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95 text-sm"
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

        <div className="text-center mt-8">
          <p className="text-textDim text-xs">&copy; {new Date().getFullYear()} TeenAviva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

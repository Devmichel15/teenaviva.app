import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const mockupRef = useRef(null)
  const notifRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const lines = titleRef.current.querySelectorAll('.reveal-line')
      gsap.fromTo(lines,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      )

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
      )

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.9, ease: 'power2.out' }
      )

      gsap.fromTo(mockupRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.9, delay: 1.1, ease: 'power3.out' }
      )

      gsap.fromTo(notifRef.current,
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: 1.8, ease: 'back.out(1.7)' }
      )
    }, containerRef)

    return () => ctx.revert()
  })

  useGSAP(() => {
    gsap.to(mockupRef.current, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-12 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto z-10">
        <div ref={titleRef} className="mb-6">
          <h1 className="text-reveal-line mb-1">
            <span className="reveal-line font-bold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] text-textPrimary">
              Sua Bíblia em contexto
            </span>
          </h1>
          <h1 className="text-reveal-line">
            <span className="reveal-line font-bold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] text-gold">
              Todos os dias
            </span>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-textMid text-base md:text-lg max-w-xl mx-auto mb-8">
          O app que ajuda adolescentes a ler a Bíblia com contextualização, interpretação e constância.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/download/teenaviva.apk"
            className="inline-flex items-center gap-2 bg-gold text-brownDeep font-bold px-7 py-3.5 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-gold/25"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar para Android
          </a>
          <a
            href="#ios"
            className="inline-flex items-center gap-2 bg-cardBg border border-cardBorder text-textPrimary font-bold px-7 py-3.5 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Baixar para iOS
          </a>
        </div>
      </div>

      <div ref={mockupRef} className="relative mt-12 w-[200px] md:w-[280px] z-10">
        <img
          src="/splash-screen.jpg"
          alt="TeenAviva splash screen"
          className="w-full h-auto object-contain"
          loading="lazy"
        />

        <div
          ref={notifRef}
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-cardBg backdrop-blur-xl border border-cardBorder rounded-xl p-2.5 md:p-3 flex items-center gap-2 shadow-xl"
        >
          <span className="text-base md:text-lg">🔥</span>
          <div className="text-left">
            <p className="text-[10px] md:text-xs text-textMid font-semibold whitespace-nowrap">Hora da sua</p>
            <p className="text-[10px] md:text-xs text-gold font-bold whitespace-nowrap">leitura diária</p>
          </div>
        </div>
      </div>
    </section>
  )
}

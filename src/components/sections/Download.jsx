import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const steps = [
  { num: 1, text: 'Toque em "Baixar para Android" abaixo.' },
  { num: 2, text: 'Se o celular pedir, toque em "Permitir" para instalar de fontes desconhecidas.' },
  { num: 3, text: 'Aguarde o download e toque em "Instalar". Pronto!' },
]

export default function Download() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const ctaRef = useRef(null)
  const iosRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        iosRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">Baixar</p>
        <h2 className="font-bold text-4xl md:text-5xl text-textPrimary mb-4">
          Pronto pra <span className="text-gold">começar?</span>
        </h2>
        <p className="text-textMid text-lg mb-10 max-w-lg mx-auto">
          Baixe agora e comece sua jornada de leitura bíblica contextualizada.
        </p>

        <div ref={ctaRef} className="mb-10">
          <a
            href="/download/teenaviva.apk"
            className="inline-flex items-center gap-3 bg-gold text-brownDeep font-bold text-lg px-10 py-5 rounded-2xl transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-gold/25"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar para Android
          </a>
          <p className="text-textDim text-sm mt-3">APK direto · 15 MB · Grátis</p>
        </div>

        <div ref={iosRef} className="bg-goldBg border border-goldBorder rounded-2xl p-6 mb-12 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <p className="text-gold font-semibold">iOS — Em breve</p>
          </div>
          <p className="text-textMid text-sm">
            A versão para iPhone está sendo preparada. Quer ser avisado quando lançar?
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <h3 className="text-textPrimary font-semibold mb-6">Como instalar:</h3>
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => (stepsRef.current[i] = el)}
                className="flex items-center gap-4 bg-cardBg border border-cardBorder rounded-xl p-4 text-left"
              >
                <div className="w-8 h-8 rounded-full bg-gold text-brownDeep font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {step.num}
                </div>
                <p className="text-textMid">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

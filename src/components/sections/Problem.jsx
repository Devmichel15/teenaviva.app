import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Problem() {
  const containerRef = useRef(null)
  const phrasesRef = useRef([])

  const phrases = [
    "A Bíblia é o livro mais lido do mundo — mas também um dos mais mal compreendidos.",
    "Para um adolescente, os saltos históricos e culturais são um muro intransponível.",
    "O resultado? Vontade de ler, desânimo ao tentar, e a sensação de que 'não é pra mim'.",
    "O TeenAviva nasceu pra mudar isso.",
  ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        phrasesRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">O problema</p>
        <div className="space-y-3">
          {phrases.map((text, i) => (
            <p
              key={i}
              ref={(el) => (phrasesRef.current[i] = el)}
              className="font-bold text-2xl md:text-4xl lg:text-5xl leading-snug text-textPrimary"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

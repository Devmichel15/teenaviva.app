import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const pilares = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    titulo: 'Contextualização',
    texto: 'Cada passagem vem com o pano de fundo histórico e cultural que você precisa pra entender o que realmente está escrito.',
    detalhe: 'Quem escreveu? Pra quem? O que significava naquela época — e o que significa hoje?',
    mockup: '/IA - screen.jpg',
    cor: 'gold',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    titulo: 'Planos de leitura guiada',
    texto: 'Não é só ler — é entender o que Deus está falando com você hoje. Reflexões guiadas pra aplicar a Palavra no seu dia a dia.',
    detalhe: 'Perguntas que conectam o texto à sua vida, sem rodeios e sem fórmula pronta.',
    mockup: '/pra ti - screen.jpg',
    cor: 'sage',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    titulo: 'Constância',
    texto: 'Streaks, lembretes diários e planos de leitura gamificados. Porque fé que cresce é fé que se alimenta todos os dias.',
    detalhe: 'Você não perde o ritmo. E quando perder, a gente te ajuda a voltar sem culpa.',
    mockup: '/ofensivas-screen.jpg',
    cor: 'sage',
  },
]

const colorMap = {
  gold: { iconBg: 'bg-goldBg text-gold border-goldBorder', tag: 'text-gold' },
  sage: { iconBg: 'bg-sageBg text-sage border-sageBorder', tag: 'text-sage' },
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 80%', end: 'top 40%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="como-funciona" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">Como funciona</p>
          <h2 className="font-bold text-4xl md:text-5xl text-textPrimary">
            Três pilares, um <span className="text-gold">propósito</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {pilares.map((p, i) => {
            const c = colorMap[p.cor] || colorMap.gold
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
                  <div className="flex-1">
                    <div className={`inline-flex p-3 rounded-2xl mb-6 border ${c.iconBg}`}>
                      {p.icon}
                    </div>
                    <h3 className="font-bold text-3xl md:text-4xl text-textPrimary mb-4">{p.titulo}</h3>
                    <p className="text-textMid text-lg mb-3">{p.texto}</p>
                    <p className="text-textDim italic">{p.detalhe}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <img
                      src={p.mockup}
                      alt={`Tela de ${p.titulo.toLowerCase()} do TeenAviva`}
                      className="w-full max-w-[200px] md:max-w-[260px] h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

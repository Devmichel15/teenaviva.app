import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const features = [
  {
    id: 0,
    title: 'Plano de leitura',
    desc: 'Planos temáticos que se encaixam na sua rotina. Escolha por livro, tema ou tempo.',
    color: 'gold',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    id: 1,
    title: 'Devocional contextualizado',
    desc: 'Cada leitura vem com áudio, contexto histórico e reflexão guiada.',
    color: 'brown',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Streak & constância',
    desc: 'Mantenha sua sequência de leitura com metas diárias e badges de progresso.',
    color: 'sage',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Anotações pessoais',
    desc: 'Escreva suas reflexões e marque versículos. Seu diário espiritual no seu bolso.',
    color: 'gold',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        <path d="M15 5l3 3"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Comunidade',
    desc: 'Grupos de leitura e oração com outros adolescentes. Você não está sozinho.',
    color: 'brown',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

const colorMap = {
  gold: { bg: 'bg-goldBg', border: 'border-goldBorder', text: 'text-gold', icon: 'text-gold' },
  brown: { bg: 'bg-brownCardBg', border: 'border-brownCardBorder', text: 'text-primaryBrown', icon: 'text-primaryBrown' },
  sage: { bg: 'bg-sageBg', border: 'border-sageBorder', text: 'text-sage', icon: 'text-streakGreen' },
}

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 40%', toggleActions: 'play none none reverse' } }
      )
    })
  }, [])

  return (
    <section id="funcionalidades" ref={sectionRef} className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">Funcionalidades</p>
          <h2 className="font-bold text-4xl md:text-5xl text-textPrimary">
            Tudo que você precisa <span className="text-gold">pra crescer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const c = colorMap[f.color]
            return (
              <div
                key={f.id}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <div className="bg-cardBg backdrop-blur-sm border border-cardBorder rounded-3xl p-6 md:p-8 h-full flex flex-col items-start">
                  <div className={`w-11 h-11 p-2.5 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.icon} mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className={`font-bold text-lg md:text-xl mb-2 ${c.text}`}>{f.title}</h3>
                  <p className="text-textMid text-sm md:text-base leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

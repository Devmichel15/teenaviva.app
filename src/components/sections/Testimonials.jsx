import { useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const testimonials = [
  {
    text: '[SUBSTITUIR] "Eu nunca consegui ler a Bíblia por mais de 3 dias seguidos. Com o TeenAviva, já estou no meu 47º dia. O contexto histórico faz toda a diferença."',
    author: 'Nome do adolescente',
    role: 'Usuário do TeenAviva',
  },
  {
    text: '[SUBSTITUIR] "Meu filho sempre teve dificuldade com a leitura bíblica. Ver ele acordando sozinho pra fazer o devocional foi uma surpresa maravilhosa."',
    author: 'Nome do pai/mãe',
    role: 'Pai/Mãe de usuário',
  },
  {
    text: '[SUBSTITUIR] "Finalmente um app que não trata a Bíblia como um livro de autoajuda. Ele explica o texto de verdade, no contexto dele."',
    author: 'Nome do líder juvenil',
    role: 'Líder de grupo jovem',
  },
  {
    text: '[SUBSTITUIR] "O sistema de streak me motiva demais. Parece um jogo, mas o prêmio é muito maior: entender a Palavra de Deus."',
    author: 'Nome da adolescente',
    role: 'Usuária do TeenAviva',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const countersRef = useRef([])

  const stats = [
    { value: 15000, label: 'versículos contextualizados', suffix: '+' },
    { value: 2500, label: 'planos de leitura criados', suffix: '+' },
    { value: 93, label: '% mantêm a constância', suffix: '' },
  ]

  const animateCounter = useCallback((el, target, suffix = '') => {
    const obj = { value: 0 }
    gsap.to(obj, {
      value: target,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        el.textContent = Math.floor(obj.value).toLocaleString('pt-BR') + suffix
      },
    })
  }, [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((el) => {
        const val = parseInt(el.dataset.value, 10)
        const suffix = el.dataset.suffix || ''
        animateCounter(el, val, suffix)
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [animateCounter])

  return (
    <section id="depoimentos" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">Depoimentos</p>
          <h2 className="font-bold text-4xl md:text-5xl text-textPrimary">
            Quem usa, <span className="text-gold">recomenda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-cardBg backdrop-blur-sm border border-cardBorder rounded-2xl p-6 md:p-8"
            >
              <svg className="text-gold/30 mb-4" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-textMid mb-4 leading-relaxed">{t.text}</p>
              <div>
                <p className="text-textPrimary font-semibold text-sm">{t.author}</p>
                <p className="text-textDim text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p
                ref={(el) => (countersRef.current[i] = el)}
                data-value={s.value}
                data-suffix={s.suffix}
                className="font-bold text-4xl md:text-6xl text-gold mb-2"
              >
                0{s.suffix}
              </p>
              <p className="text-textDim text-sm md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

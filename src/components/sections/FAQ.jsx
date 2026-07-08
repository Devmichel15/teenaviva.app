import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const faqs = [
  {
    q: 'É de graça?',
    a: 'Sim! O TeenAviva é 100% gratuito. Não há planos pagos, assinaturas ou conteúdo bloqueado. Acreditamos que a Palavra de Deus deve ser acessível a todos.',
  },
  {
    q: 'Funciona offline?',
    a: 'Sim! Após baixar os planos de leitura, você pode ler e fazer suas reflexões sem internet. O app sincroniza quando você estiver online.',
  },
  {
    q: 'Por que não está nas lojas oficiais?',
    a: 'Estamos em fase de lançamento e priorizando o acesso direto via APK para Android. A versão para iOS está em desenvolvimento e será disponibilizada em breve via TestFlight e posteriormente na App Store.',
  },
  {
    q: 'É seguro baixar o APK direto?',
    a: 'Sim. O APK é assinado e verificado. O Android pode exibir um aviso do Play Protect por ser de fonte externa à Play Store — é um procedimento normal de segurança. Basta tocar em "Instalar mesmo assim" ou "Permitir" e seguir em frente.',
  },
  {
    q: 'Vou receber atualizações automaticamente?',
    a: 'Sim! O app tem um sistema de atualização embutido que notifica quando há uma nova versão disponível. Você também pode baixar o APK mais recente aqui na landing page.',
  },
]

export default function FAQ() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const toggleAccordion = (index) => {
    const content = itemsRef.current[index].querySelector('.accordion-content')
    const answer = content.querySelector('.accordion-answer')
    const icon = itemsRef.current[index].querySelector('.accordion-icon')
    const isOpen = itemsRef.current[index].dataset.open === 'true'

    if (isOpen) {
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          itemsRef.current[index].dataset.open = 'false'
        },
      })
      gsap.to(icon, { rotate: 0, duration: 0.3 })
    } else {
      const h = answer.scrollHeight
      gsap.set(answer, { height: 'auto' })
      const h2 = answer.offsetHeight
      gsap.set(answer, { height: 0 })
      gsap.to(answer, {
        height: h2,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          itemsRef.current[index].dataset.open = 'true'
          gsap.set(answer, { height: 'auto' })
        },
      })
      gsap.to(icon, { rotate: 45, duration: 0.3 })
    }
  }

  return (
    <section id="faq" ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest text-sm uppercase mb-4">FAQ</p>
          <h2 className="font-bold text-4xl md:text-5xl text-textPrimary">
            Dúvidas <span className="text-gold">frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              data-open="false"
              className="bg-cardBg border border-cardBorder rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between p-5 text-left text-textPrimary font-semibold hover:text-gold transition-colors duration-200"
              >
                <span>{faq.q}</span>
                <svg
                  className="accordion-icon w-5 h-5 flex-shrink-0 text-gold transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="accordion-content">
                <div className="accordion-answer overflow-hidden" style={{ height: 0, opacity: 0 }}>
                  <div className="px-5 pb-5 text-textMid leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

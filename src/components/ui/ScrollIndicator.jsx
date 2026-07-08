import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function ScrollIndicator() {
  useGSAP(() => {
    gsap.to('.scroll-indicator-arrow', {
      y: 8,
      opacity: 0.3,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  })

  return (
    <div className="flex flex-col items-center gap-2 mt-16 text-textMid">
      <span className="text-sm tracking-widest uppercase text-textDim">
        Role para descobrir
      </span>
      <div className="scroll-indicator-arrow flex flex-col items-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </div>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({ autoRaf: true })
lenis.on('scroll', ScrollTrigger.update)

let resizeTimer
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh()
  }, 200)
})

ScrollTrigger.refresh()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

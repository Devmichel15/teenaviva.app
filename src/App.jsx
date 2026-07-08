import Header from './components/ui/Header'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Download from './components/sections/Download'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Download />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}

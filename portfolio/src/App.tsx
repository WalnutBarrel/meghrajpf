import { motion, useScroll, useSpring } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Timeline } from './components/Timeline'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Stats } from './components/Stats'
import { DrivesMe } from './components/DrivesMe'
import { Highlights } from './components/Highlights'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative bg-[#0b0f19] selection:bg-brand-accent/30">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="mesh-gradient min-h-screen">
        <Hero />
        <About />
        <Highlights />
        <Projects />
        <Timeline />
        <TechStack />
        <Stats />
        <DrivesMe />
        <Contact />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Meghraj. Built with React & Framer Motion.
        </p>
      </footer>
    </main>
  )
}

export default App

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled ? 'bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          MEGHRAJ<span className="text-brand-accent">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-400">
          {['About', 'Projects', 'Timeline', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full border border-brand-accent/20 hover:bg-brand-accent hover:text-white transition-all duration-300 text-xs">
            Download Resume
          </button>
        </div>

        <div className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.nav>
  )
}

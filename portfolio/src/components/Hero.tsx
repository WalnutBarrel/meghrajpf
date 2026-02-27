import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-xs font-semibold mb-6">
            Production Builder • Hackathon Finalist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
        >
          I build systems that <br /> 
          <span className="text-white/40">solve real problems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Full Stack Developer focused on building scalable, purposeful systems from civic-tech platforms to IoT optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-white text-[#0b0f19] rounded-xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            View Work
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="px-8 py-4 bg-brand-bg text-white border border-white/10 rounded-xl font-bold transition-all hover:bg-white/5 active:scale-95 flex items-center gap-2">
            Download Resume
            <Download className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-brand-accent" 
          />
        </div>
      </motion.div>
    </section>
  )
}

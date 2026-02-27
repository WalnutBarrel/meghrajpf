import { motion } from 'framer-motion'
import { Target, Zap, ShieldCheck } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Designing systems with <br />
            <span className="text-brand-accent">purpose and discipline.</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-400">
            <p>
              I’m Meghrajsinh — a full-stack developer focused on building scalable, purposeful systems. 
              From civic-tech platforms to automation concepts, I design products that solve real-world problems — not just look impressive.
            </p>
            <p>
              My approach is rooted in technical excellence and a commitment to longevity. I believe architecture should be clean, code should be maintainable, and systems should be resilient.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card p-10 relative z-10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-accent/20 transition-all duration-500" />
            
            <Target className="w-12 h-12 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">The Discipline Mindset</h3>
            <p className="text-slate-400 italic text-xl leading-relaxed">
              "Discipline beats motivation. Consistency compounds."
            </p>
            <div className="mt-8 flex gap-6">
               <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">B.Sc</span>
                  <span className="text-slate-500 text-sm">CA & IT (3rd Year)</span>
               </div>
               <div className="w-px h-12 bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">India</span>
                  <span className="text-slate-500 text-sm">Gujarat Based</span>
               </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-accent/20 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

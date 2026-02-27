import { motion } from 'framer-motion'
import { CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react'

const drives = [
  {
    title: "Consistency over talent",
    description: "I believe that long-term success is built on small, daily improvements rather than sporadic bursts of inspiration.",
    icon: TrendingUp
  },
  {
    title: "Build with purpose",
    description: "Every line of code should contribute to a meaningful solution. I don't build features; I solve problems.",
    icon: Lightbulb
  },
  {
    title: "Be better than yesterday",
    description: "The mindset of continuous learning and growth is the only way to stay relevant in an evolving tech landscape.",
    icon: CheckCircle2
  }
]

export const DrivesMe = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Me</h2>
        <p className="text-slate-400">The core principles that guide my professional work and life.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {drives.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card p-10 h-full text-center flex flex-col items-center hover:bg-brand-accent/5">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

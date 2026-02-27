import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy, Laptop, Server } from 'lucide-react'

const Zap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)

const timelineData = [
  {
    year: "2022 – Present",
    title: "B.Sc CA & IT",
    location: "Gujarat, India",
    description: "Building real-world projects alongside rigorous academic studies.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Smart Traffic System",
    description: "IoT-based traffic optimization concept using Python, OpenCV and IoT integration.",
    icon: Laptop,
  },
  {
    year: "2024",
    title: "Safaidoot (Hackathon)",
    description: "Oracle National Hackathon – Top 10 India. Complaint management platform.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Online Library Platform",
    description: "Full-stack system with authentication using Node.js, MySQL, and JWT.",
    icon: Server,
  },
  {
    year: "2025",
    title: "Online Quiz Web App",
    description: "Dynamic quiz engine with admin panel & scoring logic.",
    icon: Briefcase,
  },
  {
    year: "Next",
    title: "Backend & Systems",
    description: "Scaling into specialized Backend & System Design roles.",
    icon: Zap,
  },
]

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
        <p className="text-slate-400">Chronological growth and milestone achievements.</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/50 via-brand-accent/20 to-transparent" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-accent shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10" />

              {/* Content */}
              <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="glass-card p-6 hover:translate-y-[-4px]">
                  <span className="text-brand-accent font-mono text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 justify-start md:group-odd:justify-end">
                    {index % 2 !== 0 && <item.icon className="w-5 h-5 text-brand-accent md:hidden" />}
                    {item.title}
                    {index % 2 === 0 && <item.icon className="w-5 h-5 text-brand-accent md:hidden" />}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

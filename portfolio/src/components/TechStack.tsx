import { motion } from 'framer-motion'
import { 
  Code2, 
  Terminal, 
  Globe, 
  Layers, 
  Database, 
  Cpu, 
  Wrench,
  Server
} from 'lucide-react'

const techStack = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
  },
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Authentication"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"]
  },
  {
    category: "Tools & Systems",
    icon: Wrench,
    skills: ["Git & GitHub", "Docker", "Vercel", "Linux", "IoT (OpenCV)"]
  },
  {
    category: "Architecture",
    icon: Layers,
    skills: ["System Design", "Scalability", "Clean Architecture", "OOP"]
  }
]

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Infrastructure</h2>
          <p className="text-slate-400 max-w-xl">
            A specialized stack focused on performance, scalability, and solving real-world challenges.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card p-8 h-full hover:border-brand-accent/30 bg-white/[0.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-accent/5 rounded-xl text-brand-accent group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white/90">{item.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-400 group-hover:border-brand-accent/10 group-hover:text-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Cpu, Database, Layout } from 'lucide-react'

const projects = [
  {
    title: "Smart Traffic System",
    description: "IoT-based traffic optimization system designed to reduce congestion using real-time image processing and sensor data.",
    impact: "Automated traffic flow management reducing wait times by up to 30% in simulation.",
    tech: ["Python", "OpenCV", "IoT"],
    github: "#",
    live: "#",
    icon: Cpu,
  },
  {
    title: "Safaidoot",
    description: "Comprehensive complaint management platform built for the Oracle National Hackathon. Focuses on civic tech efficiency.",
    impact: "Top 10 Finalist in Oracle National Hackathon (129+ teams).",
    tech: ["React", "REST API", "PostgreSQL"],
    github: "#",
    live: "#",
    icon: Layout,
  },
  {
    title: "Online Library Platform",
    description: "A secure, robust library management system featuring complex role-based access control and inventory tracking.",
    impact: "Production-ready system handling concurrent user transactions with JWT security.",
    tech: ["Node.js", "MySQL", "JWT"],
    github: "#",
    live: "#",
    icon: Database,
  },
  {
    title: "Online Quiz Web App",
    description: "Dynamic quiz engine with real-time scoring logic, admin dashboards, and performance analytics.",
    impact: "Scalable architecture supporting dynamic category creation and instant feedback loops.",
    tech: ["React", "Node.js", "Express"],
    github: "#",
    live: "#",
    icon: Code2,
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-xl">
            A selection of projects that demonstrate my ability to handle complex requirements and deliver production-ready solutions.
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-sm font-mono text-brand-accent">Total Projects: 4</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card p-8 h-full flex flex-col hover:border-brand-accent/50">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
                 <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Impact</p>
                 <p className="text-sm text-slate-300 italic">"{project.impact}"</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
                    {t}
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

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something <br /> <span className="text-brand-accent">meaningful.</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Open to internships, backend roles, freelance projects, and meaningful collaborations.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <div className="space-y-8">
            <div>
                <h4 className="text-white font-bold mb-4">Connect</h4>
                <div className="flex flex-col gap-4">
                    <a href="mailto:contact@meghrajsinh.com" className="flex items-center gap-4 text-slate-400 hover:text-brand-accent transition-colors group">
                        <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                            <Mail className="w-5 h-5" />
                        </div>
                        Email
                    </a>
                    <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-brand-accent transition-colors group">
                        <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-4 text-slate-400 hover:text-brand-accent transition-colors group">
                        <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:border-brand-accent/50">
                            <Github className="w-5 h-5" />
                        </div>
                        GitHub
                    </a>
                </div>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
        >
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all font-medium"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                    <input 
                        type="email" 
                        placeholder="you@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all font-medium"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                    <textarea 
                        rows={4}
                        placeholder="What's on your mind?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/20 transition-all font-medium resize-none"
                    />
                </div>
                <button className="w-full bg-white text-brand-bg py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Send Message
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Trophy, Zap, Terminal } from 'lucide-react'

export const Highlights = () => {
  return (
    <section className="py-24 px-6 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
                <h4 className="font-bold text-white">Oracle Hackathon</h4>
                <p className="text-slate-500 text-sm italic">Top 10 India</p>
            </div>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
                <h4 className="font-bold text-white">Smart Traffic IoT</h4>
                <p className="text-slate-500 text-sm italic">Automation Concept</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center shrink-0">
                <Terminal className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
                <h4 className="font-bold text-white">Full Stack Projects</h4>
                <p className="text-slate-500 text-sm italic">Production Ready</p>
            </div>
        </div>
      </div>
    </section>
  )
}

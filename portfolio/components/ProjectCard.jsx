"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
      whileHover={{ y:-6, scale:1.02 }}
      className="glass p-6 rounded-2xl border border-white/10"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm mb-3">{desc}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map(t=>(
          <span key={t} className="text-xs px-2 py-1 border border-white/20 rounded-full">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

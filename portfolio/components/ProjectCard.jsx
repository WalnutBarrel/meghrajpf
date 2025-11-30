"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech = [], link }) {
  return (
    <motion.div 
      whileHover={{scale:1.04, y:-6}} 
      transition={{type:"spring", stiffness:200}}
      className="glass p-6 rounded-xl border border-white/10 
                 hover:border-primary/40 hover:shadow-[0_0_25px_#00eaff50]"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t,i)=>(
          <span key={i} 
            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} target="_blank"
          className="mt-5 inline-block text-primary text-sm hover:underline"
        >
          View Project →
        </a>
      )}
    </motion.div>
  );
}

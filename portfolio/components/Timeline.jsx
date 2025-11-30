"use client";

import { motion } from "framer-motion";

const items = [
  {
    period: "2022 – Present",
    title: "B.Sc CA & IT Student",
    place: "Gujarat, India",
    body: "Studying Computer Applications & IT while building real-world projects and exploring full-stack development."
  },
  {
    period: "2023",
    title: "Smart Traffic System",
    place: "Academic Project",
    body: "Designed a system to optimize traffic flow using technology, improving safety and reducing congestion."
  },
  {
    period: "2024",
    title: "Safaidoot – Cleaning Complaint App",
    place: "Oracle Hackathon · Top 10 in India",
    body: "Built a complaint management app that helps citizens report cleanliness issues. Ranked Top 10 across 129+ teams."
  },
  {
    period: "2025",
    title: "Online Library Platform",
    place: "Full-Stack Project",
    body: "Developed a complete online library with authentication, book management, and a smooth user experience."
  },
  {
    period: "Next",
    title: "Backend & Full-Stack Roles",
    place: "Your Company?",
    body: "Open to internships and roles where I can build impactful products and grow as a developer."
  }
];

export default function Timeline() {
  return (
    <section className="py-28 max-w-5xl mx-auto px-6">
      <div className="text-center mb-10">
        <p className="text-sm tracking-[0.25em] uppercase text-primary/80">
          Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          How I&apos;ve been leveling up
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-10 pb-10"
          >
            {/* dot */}
            <div className="absolute -left-[10px] md:-left-[11px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_18px_#00eaff]"></div>

            <p className="text-xs uppercase tracking-widest text-zinc-400">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg md:text-xl font-semibold">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-primary/80 mt-1">
              {item.place}
            </p>
            <p className="mt-2 text-sm md:text-[15px] text-zinc-300 leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

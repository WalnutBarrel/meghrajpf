"use client";

import { motion } from "framer-motion";
import FloatingSkills from "@/components/FloatingSkills";
import Image from "next/image";
import RippleButton from "@/components/RippleButton";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-main flex flex-col pt-32">

      {/* ====================== HERO SECTION ====================== */}
      <section className="max-w-6xl w-full mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight font-semibold"
          >
            I build impactful <span className="text-primary">digital experiences</span> for people & products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed"
          >
            I'm <strong>Meghrajsinh J Solanki</strong> — Full-Stack Developer & B.Sc CA & IT student.
            I've built <span className="font-semibold">Smart Traffic System</span>, 
            <span className="font-semibold"> Safaidoot </span>
            (Top 10 in Oracle Hackathon across 129+ teams in India),
            and a complete <strong>Online Library System</strong>.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div className="mt-10 flex gap-6 relative z-[5]">
            <RippleButton className="px-10 py-3 rounded-full bg-[#00eaff] text-black 
              font-semibold shadow-[0_0_20px_#00eaff80] hover:shadow-[0_0_40px_#00eaff] 
              transition-all">
              View Projects 🚀
            </RippleButton>

            <RippleButton className="px-10 py-3 rounded-full border border-white/40 
              hover:bg-white/10 transition text-white">
              Say hello 👋
            </RippleButton>
          </motion.div>
        </div>

        {/* PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative w-72 h-80 glass rounded-3xl overflow-hidden mx-auto shadow-[0_0_50px_#00eaff20]"
        >
          <Image src="/meghraj.jpg" alt="Meghraj" fill className="object-cover" />
          <div className="absolute bottom-0 w-full text-center py-3 bg-black/40 backdrop-blur-lg text-xs font-medium">
            Meghrajsinh J Solanki <br />
            Smart Traffic · Safaidoot · Online Library
          </div>
        </motion.div>

      </section>

      {/* ====================== SKILLS ====================== */}
      <FloatingSkills />

      {/* ====================== TIMELINE ====================== */}
      <Timeline />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">

      {/* Heading */}
      <motion.p 
        initial={{opacity:0, y:-10}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:.1}}
        className="tracking-[0.25em] text-primary/70 text-sm uppercase"
      >
        More About Me
      </motion.p>

      <motion.h1 
        initial={{opacity:0, y:10}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:.2}}
        className="text-4xl md:text-5xl font-semibold mt-3 leading-tight"
      >
        I'm Meghrajsinh,<br/> a curious engineer who builds with purpose.
      </motion.h1>


      {/* Main About Copy */}
      <motion.div 
        initial={{opacity:0, y:10}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:.3}}
        className="mt-8 text-[17px] md:text-lg leading-[1.7] text-zinc-300 max-w-3xl"
      >
        <p>
          I'm a B.Sc CA & IT student who loves turning ideas into digital products.
          Whether it’s smart city concepts like 
          <span className="font-semibold text-white"> Smart Traffic System </span>  
          or real-world civic tools like 
          <span className="font-semibold text-white"> Safaidoot</span>, 
          I enjoy building systems that solve problems — not just look good.
        </p>

        <p className="mt-5">
          In the Oracle National Hackathon, my team built Safaidoot — a cleanliness 
          complaint management app — and ranked 
          <span className="font-bold text-white"> Top 10 in India out of 129+ teams.</span>  
          That journey taught me teamwork, rapid prototyping, and shipping under pressure.
        </p>

        <p className="mt-5">
          Outside code, I push myself like I do in learning — with discipline. Cristiano 
          Ronaldo inspires me deeply — not for football, but for mindset:  
          <span className="italic text-white">work hard, stay hungry, improve every day.</span>
        </p>
      </motion.div>


      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">

        {/* Focus Areas */}
        <motion.div 
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:.2}}
          className="glass rounded-2xl p-6 text-sm leading-relaxed border border-white/10 shadow-lg"
        >
          <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
          <p className="opacity-80">Full-stack development · Scalable apps · Clean UI · UX-driven design · Real-world solutions</p>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:.3}}
          className="glass rounded-2xl overflow-hidden flex items-center justify-center border border-white/10"
        >
          <Image src="/meghraj2.jpg" alt="Meghraj" width={400} height={300} className="object-cover"/>
        </motion.div>

        {/* Availability */}
        <motion.div 
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1, y:0}} 
          transition={{delay:.4}}
          className="glass rounded-2xl p-6 flex flex-col justify-center text-center text-sm border border-white/10 shadow-lg"
        >
          <p className="font-semibold text-[15px] leading-relaxed">
            Open for internships · freelance work · collaborations · project opportunities
          </p>
        </motion.div>

      </div>


      {/* Small Signature Footer */}
      <motion.p 
        initial={{opacity:0, y:10}} 
        whileInView={{opacity:1, y:0}}
        transition={{delay:.5}}
        className="text-zinc-500 text-[14px] mt-12"
      >
        Always building. Always improving. 🚀
      </motion.p>

      {/* ============================= */}
{/* 📊 QUICK STATS SECTION        */}
{/* ============================= */}

<section className="mt-20">
  <h2 className="text-2xl font-semibold mb-6">By the numbers</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    
    <div className="glass py-6 rounded-xl flex flex-col items-center border border-white/10">
      <p className="text-3xl font-bold text-primary">+4</p>
      <p className="text-sm opacity-80 mt-1">Projects Built</p>
    </div>

    <div className="glass py-6 rounded-xl flex flex-col items-center border border-white/10">
      <p className="text-3xl font-bold text-primary">Top 10</p>
      <p className="text-sm opacity-80 mt-1">Oracle Hackathon India</p>
    </div>

    <div className="glass py-6 rounded-xl flex flex-col items-center border border-white/10">
      <p className="text-3xl font-bold text-primary">3+</p>
      <p className="text-sm opacity-80 mt-1">Years Learning & Coding</p>
    </div>

    <div className="glass py-6 rounded-xl flex flex-col items-center border border-white/10">
      <p className="text-3xl font-bold text-primary">∞</p>
      <p className="text-sm opacity-80 mt-1">Curiosity & Growth</p>
    </div>

  </div>
</section>



{/* ============================= */}
{/* 🧠 CORE VALUES SECTION        */}
{/* ============================= */}

<section className="mt-20">
  <h2 className="text-2xl font-semibold mb-6">What drives me</h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="glass p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold text-lg mb-1">Consistency over talent</h3>
      <p className="opacity-80 text-sm">
        I don’t rely on motivation — I rely on showing up every day.
      </p>
    </div>

    <div className="glass p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold text-lg mb-1">Build with purpose</h3>
      <p className="opacity-80 text-sm">
        Code should solve real problems — looks come after usefulness.
      </p>
    </div>

    <div className="glass p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold text-lg mb-1">Be better than yesterday</h3>
      <p className="opacity-80 text-sm">
        Improvement is the game. Progress — even 1% — matters.
      </p>
    </div>

  </div>
</section>



{/* ============================= */}
{/* 🏆 ACHIEVEMENTS / BADGES      */}
{/* ============================= */}

<section className="mt-20 mb-16">
  <h2 className="text-2xl font-semibold mb-6">Highlights & Achievements</h2>

  <div className="flex flex-wrap gap-4">

    <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-primary/40 shadow-[0_0_15px_#00eaff60]">
      🏆 Top 10 Oracle Hackathon India
    </span>

    <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">
      🚦 Smart Traffic System — IoT Automation
    </span>

    <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">
      🧼 Safaidoot — Cleanliness Complaint Platform
    </span>

    <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">
      📚 Full-Stack Online Library System
    </span>

    <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10">
      💡 Always building. Always curious.
    </span>

  </div>
</section>


    </main>
  );
}

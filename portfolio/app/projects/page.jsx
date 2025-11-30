"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Page Title */}
      <motion.h1 
        initial={{opacity:0,y:20}} 
        animate={{opacity:1,y:0}} 
        transition={{duration:.5}}
        className="text-4xl md:text-5xl font-bold mb-14"
      >
        Projects <span className="text-primary">🚀</span>
      </motion.h1>


      {/* Projects Grid */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden:{opacity:0,y:25},
          show:{opacity:1,y:0,transition:{staggerChildren:.15}}
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
      >

        <motion.div variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}>
          <ProjectCard 
            title="Smart Traffic System"
            desc="AI-based traffic density detection + automation using sensors."
            tech={["Python", "OpenCV", "IoT"]}
            // link="https://github.com/" // add later if you want
          />
        </motion.div>

        <motion.div variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}>
          <ProjectCard 
            title="Safaidoot"
            desc="Real-world cleanliness platform — Top 10 at Oracle Hackathon 🇮🇳"
            tech={["React", "Next.js", "REST APIs"]}
            // link="https://github.com/" 
          />
        </motion.div>

        <motion.div variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}>
          <ProjectCard 
            title="Online Library System"
            desc="Borrow, return, track books — full-stack authentication + admin panel."
            tech={["MySQL", "Node", "JWT Auth"]}
            link="https://walnutbarrel.github.io/project/"
          />
        </motion.div>

      </motion.div>

    </main>
  );
}

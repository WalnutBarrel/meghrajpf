"use client";
import ProjectCard from "@/components/ProjectCard";

export default function Projects(){
  return(
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10">Projects 🚀</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        <ProjectCard title="Smart Traffic System" desc="Automated traffic flow monitoring + sensors." tech={["Python","ML","Node"]}/>
        <ProjectCard title="Safaidoot" desc="Waste complaint app — Top 10 in Oracle Hackathon 🇮🇳" tech={["React","Next.js","API"]}/>
        <ProjectCard title="Online Library" desc="Full stack system for books borrow/return system." tech={["MySQL","Auth","PDF"]}/>
      </div>
    </div>
  )
}

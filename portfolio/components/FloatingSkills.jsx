"use client";
import Image from "next/image";

export default function Skills() {

  const skills = [
    "react","nextjs","tailwind","css","node-16",
    "figma","mysql-logo","docker","aws",
    "git","github-142","python","cpp","kubernetes","java","html-5"
  ];

  return (
    <section className="py-32 flex flex-col items-center gap-10">

      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        <span className="text-white/70">My Skills</span>
        <span className="text-primary"> — The Secret Sauce</span>
      </h2>

      {/* Skill Grid */}
      <div className="
        grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 
        gap-6 md:gap-8 px-6 max-w-6xl
      ">
        {skills.map((name,i)=>(
          <div key={i}
            className="bg-white/5 border border-white/10 rounded-2xl 
                       p-4 flex items-center justify-center
                       backdrop-blur-xl shadow-[0_0_25px_#0007]
                       hover:scale-110 hover:shadow-[0_0_35px_#00eaff90]
                       transition-all duration-300 cursor-pointer group"
          >
            <Image 
              src={`/icons/${name}.svg`}
              alt={name}
              width={40}
              height={40}
              className="opacity-90 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

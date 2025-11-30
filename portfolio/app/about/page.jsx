// app/about/page.jsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] mt-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
          More about me
        </p>
        <h1 className="text-4xl font-display mb-4">
          I&apos;m Meghrajsinh, a{" "}
          <span className="text-primary">curious engineer</span>.
        </h1>
        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
          I&apos;m a B.Sc CA &amp; IT student who loves turning rough ideas into
          functional products. From smart city concepts like{" "}
          <strong>Smart Traffic System</strong> to cleanliness-driven platforms
          like <strong>Safaidoot</strong>, I enjoy building things that actually
          help people.
        </p>
        <p className="text-zinc-300 text-sm leading-relaxed mb-3">
          In an Oracle-hosted hackathon, my team built Safaidoot — a cleaning
          complaint management app — and placed <strong>Top 10 in India</strong>{" "}
          out of 129+ teams. That experience taught me teamwork, fast
          prototyping, and how to ship under pressure.
        </p>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Outside coding, I like pushing myself mentally — similar to how my
          idol Cristiano Ronaldo approaches football: discipline, consistency,
          and always improving.
        </p>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-3xl p-4">
          <p className="text-xs text-zinc-400 mb-1">Focus areas</p>
          <p className="text-sm">
            Full-stack web apps · clean UI · performance · real-world use cases.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-3xl h-32 relative overflow-hidden">
            <Image
              src="/meghraj.jpg"
              alt="Meghrajsinh photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="glass rounded-3xl h-32 flex items-center justify-center text-center text-xs px-3">
            <p>
              Always open to internships, freelance work, and interesting
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

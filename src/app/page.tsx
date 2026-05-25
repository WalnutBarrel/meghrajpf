import { Suspense } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { Philosophy } from "../components/sections/Philosophy";
import { Stack } from "../components/sections/Stack";
import { Notes } from "../components/sections/Notes";

import { FadeIn } from "../components/ui/FadeIn";
import { Skeleton } from "../components/ui/Skeleton";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-14 md:pt-16">
        <Hero />

        <Suspense fallback={
          <Section className="border-t border-border">
            <div className="flex flex-col gap-24 py-16">
              <Skeleton className="w-full aspect-[21/9]" />
              <Skeleton className="w-full aspect-[21/9]" />
            </div>
          </Section>
        }>
          <Work />
        </Suspense>

        <Philosophy />

        <Stack />

        <Notes />

        {/* Contact Section */}
        <Section id="contact" className="border-t border-border border-b">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end min-h-[30vh]">
              <div className="mb-12 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                  Let&apos;s build something.
                </h2>
                <a 
                  href="mailto:hello@example.com" 
                  className="text-lg md:text-xl text-secondary hover:text-primary transition-colors duration-300 inline-flex items-center group"
                >
                  hello@example.com
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
              
              <div className="flex gap-6 text-sm text-secondary font-medium">
                <a href="#" className="hover:text-primary transition-colors duration-300">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors duration-300">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors duration-300">LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>

      <footer className="py-8 text-center border-t border-border bg-background">
        <span className="text-xs text-secondary/60 font-mono">
          © {new Date().getFullYear()} Meghrajpf. All rights reserved.
        </span>
      </footer>
    </>
  );
}

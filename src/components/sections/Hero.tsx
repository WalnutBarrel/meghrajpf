import Link from 'next/link';
import { Section } from '../layout/Section';

export function Hero() {
  return (
    <Section id="hero" withGrid className="min-h-[85vh] flex flex-col justify-center pt-24 md:pt-32">
      <div className="max-w-4xl">
        {/* Status indicator row */}
        <div className="animate-fade-up flex flex-col md:flex-row md:items-center gap-4 mb-8 text-xs font-mono text-secondary tracking-tight uppercase">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for opportunities</span>
          </div>
          <span className="hidden md:inline text-border">—</span>
          <span>Based in India</span>
        </div>
        
        {/* Name */}
        <h1 className="animate-fade-up animation-delay-100 text-5xl sm:text-6xl md:text-[5.5rem] font-medium tracking-tighter text-primary mb-6 leading-[1.05]">
          Meghraj Solanki.
        </h1>
        
        {/* Asymmetric indented content block */}
        <div className="animate-fade-up animation-delay-200 pl-0 md:pl-24 lg:pl-40 max-w-3xl mt-16 md:mt-24">
          <h2 className="text-xl md:text-2xl text-primary font-medium tracking-tight mb-4">
            Systems-focused Full Stack Developer
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-normal mb-10 max-w-xl">
            Building reliable software systems for real-world operations, 
            civic infrastructure, and scalable digital products.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link 
              href="#work" 
              className="group inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
            >
              <span className="border-b border-border group-hover:border-accent pb-1 transition-colors duration-300">
                View selected work
              </span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

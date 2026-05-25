import Link from 'next/link';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between bg-grid-texture"
    >
      <Container>
        {/* ── Top: Muted discipline label ── */}
        <div className="pt-28 md:pt-36 lg:pt-44">
          <span className="animate-fade-up block text-[10px] md:text-[11px] font-mono text-secondary/50 tracking-[0.2em] uppercase">
            Engineering Portfolio
          </span>
        </div>

        {/* ── Center: Editorial typography block ── */}
        <div className="mt-16 md:mt-24 lg:mt-32">
          <h1 className="animate-fade-up animation-delay-100 text-[clamp(2.8rem,8vw,7.5rem)] font-medium tracking-[-0.04em] text-primary leading-[0.92] mb-0">
            Meghraj
            <br />
            Solanki
          </h1>
        </div>

        {/* ── Below: Role + Description ── */}
        <div className="mt-12 md:mt-16 lg:mt-20 pl-0 md:pl-1">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="animate-fade-up animation-delay-200 text-base md:text-lg font-medium text-primary/80 tracking-tight leading-snug mb-5">
              Systems-focused Full Stack Developer
            </h2>
            <p className="animate-fade-up animation-delay-300 text-sm md:text-[15px] text-secondary/90 leading-[1.7] font-normal">
              Building reliable software systems for real-world operations,
              civic infrastructure, and scalable digital products.
            </p>
          </div>
        </div>

        {/* ── Bottom: Metadata row + anchor ── */}
        <div className="mt-auto pt-20 md:pt-28 pb-12 md:pb-16">
          {/* Thin divider */}
          <div className="animate-fade-up animation-delay-400 border-t border-white/[0.04] mb-8 md:mb-10" />

          <div className="animate-fade-up animation-delay-500 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            {/* Metadata cluster */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-secondary/50 tracking-tight">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[5px] w-[5px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-emerald-500/70" />
                </span>
                <span>Available for internships</span>
              </div>

              <span className="hidden sm:inline text-white/[0.08]">·</span>

              <span>Gujarat, India</span>

              <span className="hidden sm:inline text-white/[0.08]">·</span>

              <span className="text-secondary/40">Scalable systems &amp; backend architecture</span>
            </div>

            {/* Anchor to work */}
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 text-[11px] font-mono text-secondary/50 tracking-tight hover:text-secondary/80 transition-colors duration-700"
            >
              <span>Selected work</span>
              <span className="transform translate-y-[0.5px] group-hover:translate-y-[2px] transition-transform duration-700 ease-out">
                ↓
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

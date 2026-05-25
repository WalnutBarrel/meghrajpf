import { Container } from '../ui/Container';
import { FadeIn } from '../ui/FadeIn';

/* ─────────────────────────────────────────────
   Tenets — the numbered principles
   ───────────────────────────────────────────── */

const tenets = [
  {
    number: '01',
    title: 'Solve the operation, not the interface.',
    body: 'The most valuable software disappears into the workflow it serves. If the system demands attention, the design has failed. The goal is operational transparency — software that runs so reliably it becomes invisible to the people who depend on it.',
  },
  {
    number: '02',
    title: 'Maintainability is the only real feature.',
    body: 'Complexity is easy to introduce and nearly impossible to remove. Every architectural decision should be evaluated not by what it enables today, but by what it costs to change in eighteen months. Code that cannot be reasoned about by a stranger is a liability, not an asset.',
  },
  {
    number: '03',
    title: 'Consistency compounds. Cleverness decays.',
    body: 'Reliable output comes from reliable systems, not from talent applied sporadically. Strict naming conventions, predictable module boundaries, and disciplined commit histories are not bureaucratic overhead — they are the foundation that allows a codebase to scale without entropy.',
  },
  {
    number: '04',
    title: 'Design for the operator, not the demo.',
    body: 'The person who uses your software every day is not the person who approved the budget for it. Real-world systems must account for edge cases, partial failures, and human error — not just the golden path that looks compelling in a presentation.',
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="border-t border-border bg-grid-texture py-32 md:py-48 lg:py-56"
    >
      <Container>
        {/* ── Section header ── */}
        <FadeIn>
          <div className="mb-24 md:mb-32 lg:mb-40">
            <div className="flex items-baseline justify-between mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
                Engineering
                <br className="hidden md:block" />
                Philosophy
              </h2>
              <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase hidden sm:inline">
                Principles
              </span>
            </div>

            {/* ── Lead statement — the manifesto opening ── */}
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-[1.65rem] font-medium text-primary/90 leading-[1.45] tracking-tight">
                Good engineering is often invisible. The most robust systems
                are built on the most boring foundations — disciplined
                abstractions, predictable boundaries, and a deliberate
                resistance to unnecessary complexity.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Divider ── */}
        <div className="border-t border-white/[0.03] mb-20 md:mb-24" />

        {/* ── Extended essay block ── */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-32 lg:mb-40">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase">
                Perspective
              </span>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col gap-7 max-w-xl">
                <p className="text-sm md:text-[15px] text-secondary/80 leading-[1.8]">
                  I approach software as operational infrastructure — not as a
                  product to be shipped, but as a system to be sustained. The
                  distinction matters. Products optimize for launch. Systems
                  optimize for the years that follow.
                </p>
                <p className="text-sm md:text-[15px] text-secondary/80 leading-[1.8]">
                  This means choosing mature tooling over fashionable tooling.
                  It means writing documentation before writing abstractions.
                  It means designing for the team that will inherit your code,
                  not the audience that will evaluate your portfolio.
                </p>
                <p className="text-sm md:text-[15px] text-secondary/70 leading-[1.8]">
                  Real-world software operates under constraints that tutorials
                  never mention — intermittent connectivity, administrative
                  hierarchies, operators who are not developers, and requirements
                  that change faster than release cycles. Building for these
                  conditions requires patience, not ambition.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Divider ── */}
        <div className="border-t border-white/[0.03] mb-20 md:mb-24" />

        {/* ── Tenets ── */}
        <div className="flex flex-col gap-0">
          {tenets.map((tenet, index) => (
            <FadeIn key={tenet.number} delay={index * 80}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 py-14 md:py-16 ${
                  index < tenets.length - 1
                    ? 'border-b border-white/[0.03]'
                    : ''
                }`}
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-[10px] font-mono text-primary/15 tracking-[0.15em]">
                    {tenet.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-base md:text-lg font-medium text-primary/90 tracking-tight leading-snug">
                    {tenet.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-sm text-secondary/70 leading-[1.8] max-w-lg">
                    {tenet.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

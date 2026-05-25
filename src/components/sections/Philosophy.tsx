import { Section } from '../layout/Section';
import { FadeIn } from '../ui/FadeIn';

export function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-border bg-surface/30">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Title and Principles */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                Engineering<br className="hidden lg:block" /> Philosophy
              </h2>
              <ul className="text-sm font-mono text-secondary tracking-tight space-y-3">
                <li className="flex items-start">
                  <span className="text-primary/40 mr-4">01</span>
                  <span>Principles over trends.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary/40 mr-4">02</span>
                  <span>Systems over features.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary/40 mr-4">03</span>
                  <span>Clarity over cleverness.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column: Editorial Text Blocks */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24 lg:pt-2">
            {/* Main Statement */}
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-6 leading-[1.3] max-w-3xl">
                Real-world problem solving requires a disciplined disregard for the hype cycle. The most robust systems are often built on the most boring foundations.
              </h3>
              <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                From civic infrastructure to high-throughput enterprise platforms, my focus remains on building resilient software that solves actual constraints. I view engineering not as the mere application of new technologies, but as the rigorous process of finding the simplest viable solution to complex operational challenges.
              </p>
            </div>
            
            <div className="border-t border-border/50 pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              {/* Block 1 */}
              <div className="flex flex-col gap-5">
                <h4 className="text-base font-medium text-primary tracking-tight">Long-Term Thinking</h4>
                <p className="text-base text-secondary leading-relaxed">
                  Software is an asset only when it is maintainable. I prioritize architectural decisions that compound over time, favoring strict consistency and clear boundaries over short-term velocity. The goal is always to build systems that developers can reason about years after they are written.
                </p>
              </div>
              
              {/* Block 2 */}
              <div className="flex flex-col gap-5">
                <h4 className="text-base font-medium text-primary tracking-tight">Pragmatic Scalability</h4>
                <p className="text-base text-secondary leading-relaxed">
                  Scalability is not solely about handling traffic spikes; it’s about organizational and operational endurance. I design systems that scale mechanically with load, but more importantly, scale gracefully as business logic evolves and engineering teams expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

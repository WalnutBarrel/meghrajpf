import { Section } from '../layout/Section';
import { FadeIn } from '../ui/FadeIn';

const stack = [
  {
    category: 'Frontend',
    tools: 'React · Next.js · TypeScript · Tailwind CSS',
  },
  {
    category: 'Backend',
    tools: 'Node.js · Python · PostgreSQL · Redis · API Architecture',
  },
  {
    category: 'Infrastructure',
    tools: 'Docker · Linux · CI/CD Pipelines · Vercel · AWS',
  },
  {
    category: 'Systems',
    tools: 'Event-Driven Design · Message Queues · Edge Computing · Observability',
  },
];

export function Stack() {
  return (
    <Section id="stack" className="border-t border-border">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
              Technical Stack
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border/30">
              {stack.map((item) => (
                <div
                  key={item.category}
                  className="group py-7 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12"
                >
                  <h3 className="text-xs font-mono tracking-wider text-primary/35 uppercase w-36 shrink-0">
                    {item.category}
                  </h3>
                  <p className="text-base text-secondary group-hover:text-primary/90 transition-colors duration-500">
                    {item.tools}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

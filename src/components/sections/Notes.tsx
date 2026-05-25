import Link from 'next/link';
import { Section } from '../layout/Section';
import { FadeIn } from '../ui/FadeIn';

const notes = [
  {
    title: 'Building Maintainable Dashboards',
    summary: 'On the hidden cost of flexible layouts, and why the best dashboards are the ones nobody has to think about.',
    date: '2026',
    tag: 'Systems Design',
  },
  {
    title: 'Why Systems Thinking Matters',
    summary: 'Software is a living system. Treating it as a collection of features leads to entropy. Treating it as an organism leads to resilience.',
    date: '2025',
    tag: 'Engineering',
  },
  {
    title: 'Designing Software for Operators',
    summary: 'The people who run your software every day are not the people who requested it. Design for the operator, not the stakeholder.',
    date: '2025',
    tag: 'Product Thinking',
  },
  {
    title: 'Consistency Over Motivation',
    summary: 'Motivation is unreliable infrastructure. Consistent systems, habits, and defaults will always outperform bursts of inspired effort.',
    date: '2024',
    tag: 'Craft',
  },
];

export function Notes() {
  return (
    <Section id="notes" className="border-t border-border bg-surface/20">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight mb-5">
              Notes
            </h2>
            <p className="text-secondary text-sm leading-relaxed max-w-sm">
              Short writings on engineering, systems design, and the craft of building software that lasts.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border/30">
              {notes.map((note) => (
                <Link
                  key={note.title}
                  href="#"
                  className="group block py-9 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 mb-3">
                    <h3 className="text-lg font-medium tracking-tight text-primary group-hover:text-primary/80 transition-colors duration-500">
                      {note.title}
                    </h3>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs font-mono text-primary/20 tracking-wider uppercase">
                        {note.tag}
                      </span>
                      <span className="text-xs font-mono text-primary/15">
                        {note.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary/80 text-sm leading-relaxed max-w-prose">
                    {note.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

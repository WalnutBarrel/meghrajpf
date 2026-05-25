import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../layout/Section';

const projects = [
  {
    title: 'Safaidoot',
    description: 'Civic tech platform streamlining waste management and sanitation workforce operations.',
    stack: 'Next.js, Node.js, PostgreSQL, Redis',
    challenges: 'Coordinating real-time geospatial data with offline-first capabilities for sanitation workers in low-connectivity areas.',
    architecture: 'Event-driven microservices with CRDT-based offline syncing and automated dispatch routing via PostgreSQL PostGIS.',
    link: '#',
    image: '/images/safaidoot.png'
  },
  {
    title: 'Smart Traffic System',
    description: 'Real-time intersection monitoring and adaptive signal control system for municipal transit.',
    stack: 'Python, TensorFlow, Go, TimescaleDB',
    challenges: 'Processing high-throughput video streams at the edge with millisecond latency requirements and high availability.',
    architecture: 'Edge-to-cloud hybrid model using WebRTC for video transport and Go-based rule engines for immediate signal actuation.',
    link: '#',
    image: '/images/smart_traffic.png'
  },
  {
    title: 'Online Library Platform',
    description: 'Digital archive and lending system for extensive municipal library networks.',
    stack: 'React, TypeScript, GraphQL, ElasticSearch',
    challenges: 'Implementing highly accurate full-text search across millions of OCR-processed documents with granular access controls.',
    architecture: 'Serverless architecture with ElasticSearch indexing pipeline and strict DRM enforcement microservices via edge functions.',
    link: '#',
    image: '/images/library.png'
  }
];

import { FadeIn } from '../ui/FadeIn';

export function Work() {
  return (
    <Section id="work" className="border-t border-border bg-background">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 md:mb-0">
            Selected Work
          </h2>
          <span className="text-secondary text-sm md:text-base font-mono tracking-tight">
            2022 — 2026
          </span>
        </div>
      </FadeIn>
      
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="flex flex-col gap-8 md:gap-12 group">
              <Link href={project.link} className="relative block overflow-hidden rounded-xl bg-[#111111] border border-white/5 aspect-video md:aspect-[21/9]">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02] opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />
              </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-5 lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8 md:mt-12">
                    <Link 
                      href={project.link} 
                      className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors duration-300 group/link"
                    >
                      <span className="border-b border-border/40 group-hover/link:border-primary/60 pb-0.5 transition-colors duration-300">
                        View Project
                      </span>
                      <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
                
                <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col gap-8 md:gap-10 mt-2 md:mt-1">
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider text-primary/60 mb-2.5 uppercase">Stack</h4>
                    <p className="text-secondary text-base">{project.stack}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider text-primary/60 mb-2.5 uppercase">Engineering Challenges</h4>
                    <p className="text-secondary text-base leading-relaxed">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider text-primary/60 mb-2.5 uppercase">Architecture Highlights</h4>
                    <p className="text-secondary text-base leading-relaxed">{project.architecture}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { FadeIn } from '../ui/FadeIn';

/* ─────────────────────────────────────────────
   Project data — structured as case studies
   ───────────────────────────────────────────── */

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  outcome: string;
  stack: string;
  challenges: string;
  architecture: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Safaidoot',
    type: 'Civic Operations Platform',
    description:
      'An operational complaint management system designed to streamline public issue tracking, escalation workflows, and administrative coordination across municipal sanitation infrastructure.',
    outcome:
      'Enabled structured, trackable public grievance resolution — replacing informal, unaccountable processes with a deterministic, auditable system.',
    stack: 'Next.js · Node.js · PostgreSQL · Redis',
    challenges:
      'Designing multi-tier escalation workflows that account for administrative hierarchy, geographic jurisdiction, and time-bound resolution mandates — while maintaining usability for non-technical municipal operators.',
    architecture:
      'Event-driven service architecture with role-based access control, queue-prioritized complaint routing, PostgreSQL-backed audit trails, and a Redis-powered notification layer for real-time status propagation.',
    link: '#',
    image: '/images/safaidoot.png',
  },
  {
    number: '02',
    title: 'Smart Traffic System',
    type: 'IoT + Computer Vision',
    description:
      'An intelligent traffic optimization system using sensor networks and computer vision to monitor intersection density and adapt signal timing for improved throughput.',
    outcome:
      'Demonstrated measurable improvements in intersection efficiency through adaptive signal control during peak-hour simulations.',
    stack: 'Python · TensorFlow · Go · TimescaleDB',
    challenges:
      'Processing high-throughput video feeds at the edge with strict latency requirements, while maintaining reliable state synchronization between distributed sensor nodes and the central control plane.',
    architecture:
      'Edge-to-cloud hybrid model with on-device inference, Go-based rule engines for immediate signal actuation, and TimescaleDB for high-cardinality time-series analytics and historical pattern analysis.',
    link: '#',
    image: '/images/smart_traffic.png',
  },
  {
    number: '03',
    title: 'Online Library Platform',
    type: 'Multi-Role Management System',
    description:
      'A role-based digital management platform with layered authentication, granular access control, and operational workflows for library administration and patron services.',
    outcome:
      'Delivered a structured, permission-aware system that cleanly separates administrative, staff, and patron access — reducing operational overhead and access-related incidents.',
    stack: 'React · TypeScript · GraphQL · ElasticSearch',
    challenges:
      'Implementing fine-grained, role-based access control across deeply nested resource hierarchies without introducing authorization latency or over-coupling permission logic to business logic.',
    architecture:
      'Serverless compute with a GraphQL gateway, attribute-based access control (ABAC) middleware, ElasticSearch indexing pipeline for full-text search, and edge-deployed enforcement functions.',
    link: '#',
    image: '/images/library.png',
  },
];

/* ─────────────────────────────────────────────
   Flagship project — full-width editorial
   ───────────────────────────────────────────── */

function FlagshipProject({ project }: { project: Project }) {
  return (
    <FadeIn>
      <article className="group">
        {/* ── Number + Type ── */}
        <div className="flex items-baseline justify-between mb-10 md:mb-14">
          <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase">
            {project.number}
          </span>
          <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase">
            {project.type}
          </span>
        </div>

        {/* ── Cinematic image ── */}
        <Link
          href={project.link}
          className="relative block overflow-hidden rounded-lg bg-[#0c0c0c] border border-white/[0.03] aspect-[16/9] md:aspect-[2.2/1] mb-16 md:mb-20"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover transition-all duration-[1.4s] ease-out group-hover:scale-[1.015] opacity-60 group-hover:opacity-90 grayscale-[0.3] group-hover:grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent pointer-events-none" />
        </Link>

        {/* ── Title + Description ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <h3 className="text-3xl md:text-[2.5rem] font-medium tracking-tighter leading-none text-primary mb-5">
              {project.title}
            </h3>
            <p className="text-base text-secondary/90 leading-[1.7] max-w-md">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="lg:pt-2">
              <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-3">
                Outcome
              </h4>
              <p className="text-sm text-secondary/80 leading-[1.8] mb-10 max-w-lg">
                {project.outcome}
              </p>
              <Link
                href={project.link}
                className="inline-flex items-center gap-2 text-[11px] font-mono text-secondary/40 tracking-tight hover:text-secondary/70 transition-colors duration-700 group/link"
              >
                <span>View project</span>
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-700">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Technical detail row ── */}
        <div className="border-t border-white/[0.03] pt-10 md:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-20">
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-3">
                Stack
              </h4>
              <p className="text-sm text-secondary/70 leading-relaxed">
                {project.stack}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-3">
                Engineering Challenges
              </h4>
              <p className="text-sm text-secondary/70 leading-[1.7]">
                {project.challenges}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-3">
                Architecture
              </h4>
              <p className="text-sm text-secondary/70 leading-[1.7]">
                {project.architecture}
              </p>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   Secondary project — compact editorial
   ───────────────────────────────────────────── */

function SecondaryProject({ project }: { project: Project }) {
  return (
    <FadeIn>
      <article className="group">
        {/* ── Number + Type ── */}
        <div className="flex items-baseline justify-between mb-8 md:mb-10">
          <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase">
            {project.number}
          </span>
          <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase">
            {project.type}
          </span>
        </div>

        {/* ── Image ── */}
        <Link
          href={project.link}
          className="relative block overflow-hidden rounded-lg bg-[#0c0c0c] border border-white/[0.03] aspect-[16/9] mb-12 md:mb-14"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-[1.4s] ease-out group-hover:scale-[1.015] opacity-50 group-hover:opacity-80 grayscale-[0.3] group-hover:grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent pointer-events-none" />
        </Link>

        {/* ── Content ── */}
        <h3 className="text-2xl md:text-3xl font-medium tracking-tighter leading-none text-primary mb-4">
          {project.title}
        </h3>
        <p className="text-sm text-secondary/80 leading-[1.7] mb-8 max-w-md">
          {project.description}
        </p>

        {/* ── Technical metadata ── */}
        <div className="border-t border-white/[0.03] pt-8 flex flex-col gap-6">
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-2">
              Stack
            </h4>
            <p className="text-sm text-secondary/60">{project.stack}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.15em] text-primary/25 uppercase mb-2">
              Architecture
            </h4>
            <p className="text-sm text-secondary/60 leading-[1.7]">
              {project.architecture}
            </p>
          </div>
        </div>

        {/* ── Link ── */}
        <div className="mt-8">
          <Link
            href={project.link}
            className="inline-flex items-center gap-2 text-[11px] font-mono text-secondary/40 tracking-tight hover:text-secondary/70 transition-colors duration-700 group/link"
          >
            <span>View project</span>
            <span className="transform group-hover/link:translate-x-1 transition-transform duration-700">
              →
            </span>
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   Main section
   ───────────────────────────────────────────── */

export function Work() {
  const flagship = projects[0];
  const secondary = projects.slice(1);

  return (
    <section
      id="work"
      className="border-t border-border bg-background py-32 md:py-48 lg:py-56"
    >
      <Container>
        {/* ── Section header ── */}
        <FadeIn>
          <div className="flex items-baseline justify-between mb-24 md:mb-32 lg:mb-40">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
              Selected Work
            </h2>
            <span className="text-[10px] font-mono text-primary/20 tracking-[0.15em] uppercase hidden sm:inline">
              2023 — Present
            </span>
          </div>
        </FadeIn>

        {/* ── Flagship case study ── */}
        <FlagshipProject project={flagship} />

        {/* ── Divider ── */}
        <div className="my-24 md:my-32 lg:my-40 border-t border-white/[0.03]" />

        {/* ── Secondary projects — asymmetric 2-column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 xl:gap-24">
          {secondary.map((project) => (
            <SecondaryProject key={project.number} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

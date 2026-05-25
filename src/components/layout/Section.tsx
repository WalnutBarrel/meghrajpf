import { ReactNode } from 'react';
import { Container } from '../ui/Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  withGrid?: boolean;
}

export function Section({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  withGrid = false
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative ${withGrid ? 'bg-grid-texture' : ''} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

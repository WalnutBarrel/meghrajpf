import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto px-6 sm:px-8 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}

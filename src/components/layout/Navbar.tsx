"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 border-b ${
        scrolled 
          ? 'bg-background/40 backdrop-blur-xl border-border/20' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-14 md:h-16">
          <Link 
            href="/" 
            className="text-primary font-medium tracking-tight text-sm hover:opacity-80 transition-opacity duration-500"
          >
            Meghrajpf.
          </Link>
          
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-8 text-sm font-medium text-secondary tracking-tight">
            <Link href="#work" className="hover:text-primary transition-colors duration-500">
              Work
            </Link>
            <Link href="#philosophy" className="hover:text-primary transition-colors duration-500">
              Philosophy
            </Link>
            <Link href="#notes" className="hover:text-primary transition-colors duration-500">
              Notes
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors duration-500">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono text-secondary tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/80"></span>
            </span>
            <span className="hidden sm:inline">Available</span>
          </div>
        </nav>
      </Container>
    </header>
  );
}

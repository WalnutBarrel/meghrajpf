import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { cn } from '../lib/utils'

const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  
  useEffect(() => {
    let startTime: number | null = null
    const duration = 2000 
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            requestAnimationFrame(animate)
        }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center p-8 glass-card">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-1">
        <span>{count}</span>
        <span className="text-brand-accent">{suffix}</span>
      </div>
      <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">{label}</div>
    </div>
  )
}

export const Stats = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <Counter value={4} label="Projects Built" suffix="+" />
        <Counter value={10} label="Oracle Hackathon" suffix="Top" />
        <Counter value={3} label="Years Coding" suffix="+" />
        <Counter value={100} label="Growth Mindset" suffix="%" />
      </div>
    </section>
  )
}

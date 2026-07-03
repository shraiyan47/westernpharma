'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  label: string
}

const stats: Stat[] = [
  { value: 1, label: 'Branch' },
  { value: 40, label: 'Years of Experience' },
  { value: 100, label: 'Business Partners' },
  { value: 1000, label: 'Products Distributed' },
]

function AnimatedCounter({ value, label }: Stat) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const interval = setInterval(() => {
            setCount((prev) => {
              if (prev >= value) {
                clearInterval(interval)
                return value
              }
              return prev + Math.ceil(value / 50)
            })
          }, 30)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{count > value ? value : count}+</div>
      <p className="text-white/80 text-sm md:text-base font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">By The Numbers</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Our commitment to excellence reflected in our track record</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-white/80 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

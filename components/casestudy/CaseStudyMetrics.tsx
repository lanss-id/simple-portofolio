'use client'

import { useEffect, useRef } from 'react'
import type { ProjectMetric } from '@/types'

export function CaseStudyMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.registerPlugin(ScrollTrigger)

      if (!containerRef.current) return

      ctx = gsap.context(() => {
        const metricsNodes = containerRef.current!.querySelectorAll('.cs-metric')

        gsap.from(metricsNodes, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        })
      }, containerRef.current)
    }

    animate()

    return () => ctx?.revert()
  }, [])

  if (!metrics || metrics.length === 0) return null

  return (
    <div className="cs-section-inner">
      <div ref={containerRef} className="cs-metrics">
        {metrics.map((m, i) => (
          <div key={i} className="cs-metric">
            <div className="cs-metric-val">{m.value}</div>
            <div className="cs-metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

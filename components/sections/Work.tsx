'use client'

import { useEffect, useRef } from 'react'
import { loadGSAP } from '@/lib/gsap'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/shared/ProjectCard'

const marqueeItems = [
  'Next.js', 'TypeScript', 'React', 'Node.js', 'Python',
  'Supabase', 'Docker', 'AI Integration', 'LLM', 'RAG',
  'Cloud Infrastructure', 'Full Stack',
]

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!trackRef.current) return
    let ctx: { revert: () => void } | undefined

    async function init() {
      const { gsap, ScrollTrigger } = await loadGSAP()
      gsap.registerPlugin(ScrollTrigger)

      const track = trackRef.current
      if (!track) return

      const children = Array.from(track.children) as HTMLElement[]
      const half = children.slice(0, children.length / 2)
      const halfWidth = half.reduce((acc, el) => acc + el.offsetWidth, 0)

      ctx = gsap.context(() => {
        // Marquee animation
        gsap.to(track, {
          x: -halfWidth,
          duration: 35,
          ease: 'none',
          repeat: -1,
        })

        // Heading reveal
        if (headingRef.current) {
          gsap.from(headingRef.current, {
            yPercent: 105,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headingRef.current.parentElement,
              start: 'top 85%',
            },
          })
        }
      })
    }

    init()

    return () => {
      ctx?.revert()
    }
  }, [])

  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <section id="work" style={{ paddingTop: 'clamp(4rem, 8vw, 8rem)' }}>
      {/* Marquee header */}
      <div className="marquee-wrap" style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
        <div ref={trackRef} className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep">×</span>
            </span>
          ))}
        </div>
      </div>

      <div className="site-container">
        {/* Section heading */}
        <div className="overflow-clip" style={{ marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
          <h2 ref={headingRef} className="section-heading">
            Selected Work
          </h2>
        </div>

        {/* Project list */}
        <div>
          {projects
            .filter((p) => p.available)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}

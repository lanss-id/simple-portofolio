'use client'

import { useEffect, useRef } from 'react'
import type { Project } from '@/types'

export function CaseStudyHero({ project }: { project: Project }) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function animate() {
      const { gsap } = await import('gsap')

      ctx = gsap.context(() => {
        // Reveal title lines
        const lines = titleRef.current?.querySelectorAll('.tl span')
        if (lines && lines.length > 0) {
          gsap.to(lines, {
            y: 0,
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.12,
            delay: 0.3,
          })
        }

        // Reveal meta strip
        if (metaRef.current) {
          gsap.from(metaRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.9,
          })
        }
      })
    }

    animate()

    return () => ctx?.revert()
  }, [])

  // Split title into words for line reveal
  const words = project.title.split(' ')

  const meta = [
    { label: 'Company', value: project.company },
    { label: 'Year', value: project.year },
    { label: 'Type', value: project.type },
    { label: 'Role', value: project.role },
  ].filter((m) => m.value)

  return (
    <section className="cs-hero">
      {/* Background gradient */}
      <div
        className="cs-hero-bg"
        style={{ background: project.heroGradient }}
      />
      <div className="cs-hero-overlay" />

      {/* Large faded number */}
      <div className="cs-hero-number">{project.number}</div>

      {/* Content */}
      <div className="cs-hero-content">
        {project.company && (
          <p className="cs-company">{project.company}</p>
        )}

        <h1 ref={titleRef} className="cs-title">
          {words.map((word, i) => (
            <span key={i} className="tl">
              <span>{word}</span>
            </span>
          ))}
        </h1>

        <div ref={metaRef} className="cs-meta-strip">
          {meta.map((m, i) => (
            <div key={i} className="cs-meta-item">
              <div className="cs-meta-label">{m.label}</div>
              <div className="cs-meta-value">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import type { ProjectSection } from '@/types'

export function CaseStudySection({
  section,
  accentColor,
}: {
  section: ProjectSection
  accentColor: string
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return

      ctx = gsap.context(() => {
        const children = sectionRef.current!.querySelectorAll(
          '.cs-section-label, .cs-section-title, .cs-section-body p, .cs-finding, .cs-quote'
        )

        gsap.from(children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }, sectionRef.current)
    }

    animate()

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="cs-section">
      <div className="cs-section-inner">
        <p className="cs-section-label">{section.label}</p>
        <h2 className="cs-section-title">{section.title}</h2>

        <div className="cs-section-body">
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {section.findings && section.findings.length > 0 && (
          <div className="cs-findings">
            {section.findings.map((f, i) => (
              <div key={i} className="cs-finding">
                <div className="cs-finding-icon">{f.icon}</div>
                <h3 className="cs-finding-title">{f.title}</h3>
                <p className="cs-finding-text">{f.text}</p>
              </div>
            ))}
          </div>
        )}

        {section.quote && (
          <blockquote
            className="cs-quote"
            style={{ '--cs-accent': accentColor } as React.CSSProperties}
          >
            <p>&ldquo;{section.quote}&rdquo;</p>
          </blockquote>
        )}
      </div>
    </section>
  )
}

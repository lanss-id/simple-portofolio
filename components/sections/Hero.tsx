'use client'

import { useEffect, useRef } from 'react'
import { loadGSAP } from '@/lib/gsap'

interface HeroProps {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready) return

    let ctx: { revert: () => void } | undefined

    loadGSAP().then(({ gsap }) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.1 })

        tl.from([line1Ref.current, line2Ref.current], {
          yPercent: 110,
          duration: 1.1,
          ease: 'power4.out',
          stagger: 0.08,
        })
          .from(
            infoRef.current,
            { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
          )
          .from(
            badgesRef.current,
            { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' },
            '<'
          )
          .from(
            scrollRef.current,
            { opacity: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.3'
          )
      })
    })

    return () => {
      ctx?.revert()
    }
  }, [ready])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(2rem, 5vh, 4rem)',
        position: 'relative',
      }}
    >
      {/* Scroll indicator — right side vertical text */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          right: 'clamp(1.5rem, 3vw, 3rem)',
          bottom: 'clamp(2rem, 6vh, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
        aria-hidden
      >
        <div
          style={{
            width: '1px',
            height: '4rem',
            background: 'var(--border-strong)',
          }}
        />
        <span className="scroll-indicator">Scroll</span>
      </div>

      <div className="site-container">
        {/* Giant name */}
        <h1
          aria-label="Maulana Kayyis Purnadiva"
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div className="overflow-clip">
            <span ref={line1Ref} className="hero-name block">
              Maulana
            </span>
          </div>
          <div className="overflow-clip">
            <span ref={line2Ref} className="hero-name block" style={{ color: 'var(--fg-muted)' }}>
              Kayyis
            </span>
          </div>
          <div className="overflow-clip">
            <span className="hero-name block" style={{ color: 'var(--fg-muted)' }}>
              Purnadiva
            </span>
          </div>
        </h1>

        {/* Bottom row: description left + badges right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: description */}
          <div ref={infoRef} style={{ maxWidth: '28rem' }}>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                lineHeight: 1.7,
                color: 'var(--fg)',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
              }}
            >
              Full Stack Engineer & AI Developer.
              <br />
              Jakarta · Bandung · Remote.
              <br />
              Four years building scalable web apps, AI-powered
              systems, and cloud infrastructure. Open for freelance.
            </p>
          </div>

          {/* Right: status badges */}
          <div
            ref={badgesRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              alignItems: 'flex-end',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--fg-muted)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 6px #22c55e',
                }}
              />
              Available for work
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--fg-subtle)' }}>
              Indonesia / Remote
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--fg-subtle)' }}>
              4+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

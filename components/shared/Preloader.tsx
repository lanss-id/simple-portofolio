'use client'

import { useEffect, useRef } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const ranRef = useRef(false)

  useEffect(() => {
    // Prevent double-run in React StrictMode
    if (ranRef.current) return
    ranRef.current = true

    // Check sessionStorage — if already visited, skip immediately
    try {
      if (sessionStorage.getItem('mkp-visited')) {
        if (wrapperRef.current) {
          wrapperRef.current.style.display = 'none'
        }
        onComplete()
        return
      }
    } catch {
      // sessionStorage not available
      onComplete()
      return
    }

    const counter = { val: 0 }

    async function runAnimation() {
      try {
        const { gsap } = await import('gsap')

        const tl = gsap.timeline({
          onComplete: () => {
            try { sessionStorage.setItem('mkp-visited', 'true') } catch { /* noop */ }
            onComplete()
          },
        })

        tl.to(counter, {
          val: 100,
          duration: 1.5,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = String(Math.round(counter.val))
            }
          },
        }).to(
          wrapperRef.current,
          {
            yPercent: -105,
            duration: 0.9,
            ease: 'power4.inOut',
          },
          '+=0.2'
        )
      } catch {
        // GSAP failed to load, skip preloader
        onComplete()
      }
    }

    runAnimation()
  }, [onComplete])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0a',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
      role="status"
      aria-label="Loading"
    >
      <span
        ref={counterRef}
        style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 1,
        }}
      >
        0
      </span>
      <span
        style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        MKP
      </span>
    </div>
  )
}

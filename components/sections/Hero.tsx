'use client'

import { useEffect, useRef } from 'react'
import { loadGSAP } from '@/lib/gsap'

interface HeroProps {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const lastNameRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready) return

    let ctx: { revert: () => void } | undefined

    loadGSAP().then(({ gsap }) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline()

        tl.from(nameRef.current, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        })
          .from(
            lastNameRef.current,
            {
              yPercent: 100,
              opacity: 0,
              duration: 1,
              ease: 'power4.out',
            },
            '-=0.8'
          )
          .from(
            subRef.current,
            {
              y: 20,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.5'
          )
          .from(
            metaRef.current,
            {
              y: 16,
              opacity: 0,
              duration: 0.7,
              ease: 'power3.out',
            },
            '-=0.5'
          )
      })
    })

    return () => {
      ctx?.revert()
    }
  }, [ready])

  return (
    <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto">
      <div className="max-w-4xl">
        {/* Name — overflow hidden per line for clean reveal */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <div className="overflow-hidden">
            <span ref={nameRef} className="block">
              Maulana Kayyis
            </span>
          </div>
          <div className="overflow-hidden">
            <span ref={lastNameRef} className="block text-neutral-400">
              Purnadiva
            </span>
          </div>
        </h1>

        <div
          ref={subRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12"
        >
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
              Full Stack Engineer &amp; AI-Integrated Developer. Jakarta based,
              remote ready. Four years of experience building scalable web
              applications, AI-powered systems, and cloud infrastructure across
              fintech, e-commerce, and government sectors.
            </p>
          </div>

          <div
            ref={metaRef}
            className="flex flex-col gap-2 text-sm text-neutral-500 shrink-0"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
            <span>Indonesia / Remote</span>
            <span>4+ Years Experience</span>
          </div>
        </div>
      </div>
    </header>
  )
}

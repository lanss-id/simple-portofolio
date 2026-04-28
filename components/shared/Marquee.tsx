'use client'

import { useEffect, useRef } from 'react'
import { loadGSAP } from '@/lib/gsap'

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 50 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return
    let ctx: { revert: () => void } | undefined

    loadGSAP().then(({ gsap }) => {
      const track = trackRef.current
      if (!track) return

      // Get the width of half the items (since we duplicate for seamless loop)
      const children = Array.from(track.children) as HTMLElement[]
      const half = children.slice(0, children.length / 2)
      const halfWidth = half.reduce((acc, el) => acc + el.offsetWidth + 24, 0)

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: -halfWidth,
          duration: speed,
          ease: 'none',
          repeat: -1,
        })
      })
    })

    return () => {
      ctx?.revert()
    }
  }, [speed])

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-2" aria-hidden>
      <div ref={trackRef} className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { loadGSAP } from '@/lib/gsap'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    let lenis: any = null
    let rafId: number

    async function init() {
      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
        import('lenis'),
        loadGSAP(),
      ])

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      })

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)
    }

    init()

    return () => {
      lenis?.destroy()
    }
  }, [])

  useEffect(() => {
    async function refresh() {
      const { ScrollTrigger } = await loadGSAP()
      // Give DOM time to paint the new page layout
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
    refresh()
  }, [pathname])

  return <>{children}</>
}

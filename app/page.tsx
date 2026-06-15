'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

// Lazy-load preloader so it doesn't block initial render
const Preloader = dynamic(
  () => import('@/components/shared/Preloader').then((m) => ({ default: m.Preloader })),
  { ssr: false }
)

export default function Home() {
  const [heroReady, setHeroReady] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setHeroReady(true)
  }, [])

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />

      <div
        style={{
          opacity: heroReady ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <main>
          <Hero ready={heroReady} />
          <Work />
          <About />
          <Contact />
        </main>
      </div>
    </>
  )
}

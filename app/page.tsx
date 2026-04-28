'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { SmoothScroll } from '@/components/shared/SmoothScroll'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
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
    <ThemeProvider>
      <SmoothScroll>
        <Preloader onComplete={handlePreloaderComplete} />

        <div
          style={{
            opacity: heroReady ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <Navbar />

          <main>
            <Hero ready={heroReady} />
            <Work />
            <About />
            <Contact />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  )
}

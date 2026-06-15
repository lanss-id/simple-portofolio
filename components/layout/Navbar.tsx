'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/shared/ThemeProvider'
import { Sun, Moon, X, Menu, ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const isCaseStudy = pathname?.startsWith('/work/')

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleNavClick(href: string) {
    setMenuOpen(false)
    if (isCaseStudy) {
      router.push(`/${href}`)
      return
    }
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 pointer-events-none"
    >
      <nav
        className="floating-nav pointer-events-auto flex items-center gap-2 px-4 py-2.5"
        style={{ maxWidth: '680px', width: 'calc(100% - 3rem)' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity mr-auto"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
        >
          MKP
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {isCaseStudy ? (
            <Link
              href="/#work"
              className="nav-link text-sm font-medium tracking-widest uppercase flex items-center gap-2"
              style={{ color: 'var(--fg)' }}
            >
              <ArrowLeft size={14} /> Back home
            </Link>
          ) : (
            navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm font-medium tracking-widest uppercase"
                style={{ color: 'var(--fg-muted)' }}
              >
                {link.label}
              </button>
            ))
          )}
        </div>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={toggle}
            className="theme-toggle ml-2"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={13} strokeWidth={1.5} />
            ) : (
              <Sun size={13} strokeWidth={1.5} />
            )}
          </button>
        )}

        {/* Mobile hamburger */}
        {!isCaseStudy && (
          <button
            className="md:!hidden theme-toggle ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={13} strokeWidth={1.5} /> : <Menu size={13} strokeWidth={1.5} />}
          </button>
        )}
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && !isCaseStudy && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute top-20 left-6 right-6 rounded-2xl border overflow-hidden"
            style={{
              background: 'var(--bg)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-6 py-4 text-sm font-medium tracking-widest uppercase border-b last:border-0 transition-all"
                  style={{
                    color: 'var(--fg)',
                    borderColor: 'var(--border-color)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

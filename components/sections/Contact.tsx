'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  const ctaRef = useRef<HTMLAnchorElement>(null)

  return (
    <section
      id="contact"
      className="section-divider"
      style={{
        paddingTop: 'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}
    >
      <div className="site-container">
        {/* Label */}
        <span className="section-label" style={{ display: 'block', marginBottom: '2.5rem' }}>
          Get in Touch
        </span>

        {/* Giant CTA heading */}
        <motion.a
          ref={ctaRef}
          href="mailto:maulanakayyis354@gmail.com"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="contact-cta"
          style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '0.25rem' }}
        >
          Let&apos;s build
          <motion.span
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-flex' }}
          >
            <ArrowUpRight
              style={{ width: 'clamp(2rem, 6vw, 5.5rem)', height: 'clamp(2rem, 6vw, 5.5rem)', strokeWidth: 1.5 }}
            />
          </motion.span>
        </motion.a>

        <motion.a
          href="mailto:maulanakayyis354@gmail.com"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="contact-cta"
          style={{ color: 'var(--fg-muted)', display: 'block', marginBottom: 'clamp(2rem, 4vw, 4rem)' }}
        >
          together.
        </motion.a>

        {/* Bottom row: subtitle + CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginTop: 'clamp(2.5rem, 5vw, 5rem)',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              color: 'var(--fg-muted)',
              lineHeight: 1.7,
              maxWidth: '24rem',
            }}
          >
            Currently available for full-stack and AI integration projects.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:maulanakayyis354@gmail.com"
              className="cta-btn primary"
            >
              Send Email
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/lanss-id"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lanss-id"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

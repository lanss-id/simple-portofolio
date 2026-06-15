'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function Contact() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const [waHovered, setWaHovered] = useState(false)

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
        <motion.div
          ref={ctaRef as any}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="contact-cta"
          style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '0.25rem' }}
        >
          <a
            href="https://wa.me/6282120413227"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="hover:opacity-70 transition-opacity"
          >
            Let&apos;s build
          </a>

          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setWaHovered(true)}
            onMouseLeave={() => setWaHovered(false)}
          >
            <a
              href="https://wa.me/6282120413227"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', color: 'inherit' }}
              aria-label="Contact via WhatsApp"
            >
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
            </a>

            <AnimatePresence>
              {waHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -15, scale: 0.8, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -15, scale: 0.8, filter: 'blur(8px)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute left-full ml-4 flex items-center justify-center gap-2 px-5 py-3 pointer-events-none whitespace-nowrap z-50"
                  style={{
                    background: 'var(--fg)',
                    color: 'var(--bg)',
                    borderRadius: '9999px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
                    lineHeight: 1,
                  }}
                >
                  <WhatsAppIcon />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    WhatsApp
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.a
          href="https://wa.me/6282120413227"
          target="_blank"
          rel="noopener noreferrer"
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
              href="https://www.linkedin.com/in/lanss-id/"
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

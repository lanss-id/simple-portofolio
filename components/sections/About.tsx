'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '@/data/experience'

export function About() {
  return (
    <section
      id="about"
      className="section-divider"
      style={{ paddingTop: 'clamp(4rem, 8vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}
    >
      <div className="site-container">
        {/* Section label */}
        <span className="section-label" style={{ display: 'block', marginBottom: '2.5rem' }}>
          About
        </span>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 6vw, 8rem)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                color: 'var(--fg)',
                marginBottom: '1.5rem',
              }}
            >
              Four years in full stack development, working from freelance
              international clients to government-scale systems.
            </p>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: 'var(--fg-muted)',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              I&apos;ve built AI-integrated applications, banking platforms, and national education
              infrastructure. My approach is AI-first and research-driven — I leverage LLM
              integrations, RAG architectures, and automated workflows to ship products that are
              not just functional, but intelligent.
            </p>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: 'var(--fg-muted)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Since 2022, I&apos;ve served international clients via Freelancer.com, delivering
              end-to-end solutions with professional English communication. I work daily with
              Claude Code, GitHub Copilot, and Cursor AI to accelerate delivery without
              compromising code quality.
            </p>

            <a
              href="/Resume_MaulanaKayyisPurnadiva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              View CV
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Right: experience list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
              Experience
            </span>

            <div>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.07,
                  }}
                  className="exp-row group"
                  style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '0.3rem',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 'clamp(0.9rem, 1.15vw, 1rem)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        color: 'var(--fg)',
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.role}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--fg-subtle)',
                        whiteSpace: 'nowrap',
                        fontVariantNumeric: 'tabular-nums',
                        flexShrink: 0,
                        paddingTop: '0.1rem',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--fg-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {exp.company} — {exp.type}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--fg-subtle)',
                      lineHeight: 1.65,
                    }}
                  >
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

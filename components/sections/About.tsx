'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '@/data/experience'
import { skills } from '@/data/skills'

export function About() {
  return (
    <section
      id="about"
      className="section-divider"
      style={{ paddingTop: 'clamp(4rem, 8vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}
    >
      <div className="site-container">
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
            <span className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
              MY STORY
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                fontWeight: 800,
                lineHeight: 0.85,
                letterSpacing: '-0.02em',
                color: 'var(--fg)',
                marginBottom: '3.5rem',
              }}
            >
              About
            </h2>

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
                color: 'var(--fg)',
                fontWeight: 500,
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
                color: 'var(--fg)',
                fontWeight: 500,
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
            id="experience"
            style={{ scrollMarginTop: 'clamp(4rem, 8vw, 8rem)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="section-label" style={{ display: 'block', marginBottom: '2.5rem' }}>
              EXPERIENCE
            </span>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                  className="group"
                  style={{ 
                    paddingTop: '1.5rem', 
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        color: 'var(--fg)',
                        lineHeight: 1.2,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {exp.company}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--fg-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {exp.role}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--fg-subtle)',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                      flexShrink: 0,
                    }}
                  >
                    {exp.period}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* SKILLS SECTION */}
            <div style={{ marginTop: '4rem' }}>
              <span className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
                SKILLS
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.04,
                    }}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--fg-muted)',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

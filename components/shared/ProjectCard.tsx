'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '@/types'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: Project }) {
  const imageRef = useRef<HTMLDivElement>(null)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="project-row group"
      style={{ paddingTop: 'clamp(1.25rem, 2vw, 2rem)', paddingBottom: 'clamp(1.25rem, 2vw, 2rem)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          alignItems: 'start',
        }}
      >
        {/* Number */}
        <span
          className="project-number"
          style={{ paddingTop: '0.35rem', minWidth: '2rem' }}
        >
          {project.number}
        </span>

        {/* Main content: image + info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'start',
          }}
          className="md-project-grid"
        >
          {/* Image */}
          <motion.div
            ref={imageRef}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRadius: '0.75rem',
              overflow: 'hidden',
              aspectRatio: '16/9',
              position: 'relative',
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}
            >
              {project.emoji && (
                <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }} aria-hidden>
                  {project.emoji}
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {project.techStack.join(' · ')}
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              height: '100%',
            }}
          >
            <div>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="project-title"
                style={{ marginBottom: '0.75rem' }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: 'clamp(0.9rem, 1.25vw, 1rem)',
                  color: 'var(--fg)',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-body)',
                  marginBottom: '1.5rem',
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Tech stack */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ paddingTop: '0.25rem' }}>
          <motion.span
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
            className="arrow-link"
            aria-hidden
          >
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </motion.span>
        </div>
      </div>
    </motion.article>
  )
}

'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/types'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null)

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pcard"
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a3a3a3" />
          </linearGradient>
        </defs>
      </svg>
      <Link href={`/work/${project.slug}`} className="pcard-link">
        <div className="pcard-inner">
          {/* Left: Info */}
          <div className="pcard-info">
            <div className="pcard-top">
              <span className="pnum">{project.number}</span>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="pcard-mid">
              {project.company && (
                <span className="pcompany">{project.company}</span>
              )}
              <h3 className="pname">{project.title}</h3>
              <p className="pdesc">{project.subtitle}</p>
            </div>

            <div className="pcard-bottom">
              {project.metrics && project.metrics.length > 0 && (
                <div className="pmetrics">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="pmetric">
                      <span className="pm-val">{m.value}</span>
                      <span className="pm-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="pcard-techrow">
                {project.techStack.map((tech) => (
                  <span key={tech} className="ptech">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="pcard-vis">
            <div
              className="pcard-bg"
              style={{ background: project.heroGradient }}
            />
            {/* Decorative blobs */}
            <div
              className="blob blob1"
              style={{ background: project.accentColor }}
            />
            <div
              className="blob blob2"
              style={{ background: project.accentColor, opacity: 0.12 }}
            />
            {/* Emoji center */}
            <div className="pcard-emoji">
              {project.emoji && (
                <span className="pcard-emoji-icon">{project.emoji}</span>
              )}
              <span className="pcard-emoji-label">
                {project.techStack.join(' · ')}
              </span>
            </div>
            {/* Corner arrow */}
            <div className="p-arrow">
              <ArrowUpRight size={16} strokeWidth={1.5} color="white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

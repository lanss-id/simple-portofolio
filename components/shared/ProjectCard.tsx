'use client'

import { motion } from 'framer-motion'
import { cardHover, fadeUp, staggerContainer } from '@/lib/animations'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="group mb-20 md:mb-28"
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Number */}
        <div className="hidden md:block md:col-span-1">
          <span className="text-sm font-medium text-neutral-400 tabular-nums">
            {project.number}
          </span>
        </div>

        {/* Image */}
        <motion.div
          className="md:col-span-7"
          initial="rest"
          whileHover="hover"
          variants={cardHover}
        >
          <div className="overflow-hidden rounded-2xl aspect-[16/10] relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <div className="text-white text-center p-8">
                {project.emoji && (
                  <div className="text-6xl mb-4" aria-hidden>
                    {project.emoji}
                  </div>
                )}
                <div className="font-mono text-sm opacity-60">
                  {project.techStack.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <div className="md:col-span-4 flex flex-col justify-between">
          {/* Mobile number */}
          <span className="md:hidden text-sm font-medium text-neutral-400 mb-3 tabular-nums">
            {project.number}
          </span>

          <div>
            {/* Tags */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4 flex-wrap"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold leading-tight mb-3 group-hover:text-neutral-500 transition-colors duration-300">
              {project.title} —{' '}
              <span className="text-neutral-500">{project.subtitle}</span>
            </h2>

            <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

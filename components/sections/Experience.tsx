'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto section-divider"
    >
      <div className="grid md:grid-cols-12 gap-12">
        {/* Label */}
        <SectionReveal className="md:col-span-4">
          <span className="text-sm text-neutral-400 font-medium tracking-wide">
            Experience
          </span>
        </SectionReveal>

        {/* List */}
        <motion.div
          className="md:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="pb-8 mb-8 border-b border-neutral-100 last:border-0 last:mb-0 last:pb-0 group"
            >
              <div className="flex justify-between items-baseline mb-1 gap-4">
                <h3
                  className="text-lg font-semibold group-hover:text-neutral-500 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {exp.role}
                </h3>
                <span className="text-sm text-neutral-400 shrink-0 tabular-nums">
                  {exp.period}
                </span>
              </div>
              <p className="text-neutral-500 mb-2 text-sm">
                {exp.company} — {exp.type}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

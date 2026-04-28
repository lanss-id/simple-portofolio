'use client'

import { motion } from 'framer-motion'
import { textReveal, staggerContainer, fadeUp } from '@/lib/animations'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-6xl mx-auto section-divider"
    >
      <div className="max-w-3xl">
        {/* Heading reveal */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get in touch
          </motion.h2>
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="text-xl text-neutral-500 mb-12 leading-relaxed mt-6"
        >
          Currently available for full-stack and AI integration projects.
          Let&apos;s build something intelligent together.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            variants={fadeUp}
            href="mailto:maulanakayyis@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            Send an Email
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/maulanakayyis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 rounded-full text-sm font-medium hover:border-neutral-900 transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a
            variants={fadeUp}
            href="https://github.com/maulanakayyis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 rounded-full text-sm font-medium hover:border-neutral-900 transition-colors"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

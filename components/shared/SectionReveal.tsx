'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface SectionRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SectionReveal({
  children,
  delay = 0,
  className,
}: SectionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

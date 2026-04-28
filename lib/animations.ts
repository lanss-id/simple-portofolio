import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

export const cardHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  hover: {
    scale: 1.01,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

// Overflow-hidden parent needed for this to work
export const textReveal: Variants = {
  hidden: { y: '105%' },
  visible: {
    y: '0%',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideDown: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

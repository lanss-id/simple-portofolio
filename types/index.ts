import type { ReactNode } from 'react'

export interface ProjectSection {
  label: string
  title: string
  body: string[]
  findings?: { icon: ReactNode; title: string; text: string }[]
  quote?: string
}

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  techStack: string[]
  gradient: string
  heroGradient: string
  accentColor: string
  emoji?: ReactNode
  imageSrc?: string
  href?: string
  available: boolean
  company?: string
  year?: string
  role?: string
  type?: string
  metrics?: ProjectMetric[]
  sections?: ProjectSection[]
  nextProjectSlug?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  type: string
  period: string
  description: string
}

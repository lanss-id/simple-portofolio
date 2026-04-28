export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  techStack: string[]
  gradient: string
  emoji?: string
  imageSrc?: string
  href?: string
  available: boolean
}

export interface Experience {
  id: string
  role: string
  company: string
  type: string
  period: string
  description: string
}

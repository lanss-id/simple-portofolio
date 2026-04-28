import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'freelancer',
    role: 'Full Stack Engineer',
    company: 'Freelancer.com',
    type: 'Remote, Part-Time',
    period: '2022 — Present',
    description:
      'Delivered end-to-end web solutions for international clients. Built React/Next.js frontends, NestJS/Express backends, integrated Claude API for GenAI features, and deployed via Docker on AWS EC2.',
  },
  {
    id: 'dhisan',
    role: 'MIS Developer',
    company: 'Studio Dhisan Atelier',
    type: 'Hybrid',
    period: '2022 — 2025',
    description:
      'Led small dev team for internal management system. Improved work effectiveness by 15% through application enhancements using Laravel and JavaScript.',
  },
  {
    id: 'global-intermedia',
    role: 'Frontend Engineer',
    company: 'PT. Global Intermedia',
    type: 'Contract',
    period: '2022 — 2023',
    description:
      'Developed Sysdev application UI using JAMStack architecture (Vue.js, Ajax, CDN). Implemented dynamic, data-driven interfaces consuming real-time external APIs.',
  },
  {
    id: 'juke-solutions',
    role: 'Backend Developer',
    company: 'Juke Solutions',
    type: 'Kemenag Government API',
    period: '2023',
    description:
      "Maintained Ministry of Religious Affairs API products on microservice architecture. Applied MVC and Laravel best practices in production government environment.",
  },
]

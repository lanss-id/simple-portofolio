import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ai-trading-bot',
    number: '01',
    title: 'AI Trading Bot',
    subtitle: 'Automated Signal & Execution System',
    description:
      'End-to-end automated trading bot using Claude Sonnet as the core reasoning engine. Implemented RAG pipeline with historical market data to reduce hallucination and improve signal accuracy via structured prompt engineering.',
    tags: ['AI/ML', 'Fintech'],
    techStack: ['n8n', 'Claude API', 'Supabase', 'Docker'],
    gradient: 'from-emerald-900 via-emerald-800 to-teal-900',
    emoji: '🤖',
    available: true,
  },
  {
    id: 'horizon-banking',
    number: '02',
    title: 'Horizon',
    subtitle: 'Modern Banking Platform',
    description:
      'Full stack banking web application featuring account management, fund transfers, and real-time transaction tracking. Built with end-to-end TypeScript for type safety and optimal developer experience.',
    tags: ['Full Stack', 'Banking'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-slate-900 via-blue-900 to-indigo-900',
    emoji: '🏦',
    available: true,
  },
  {
    id: 'skaters-ecommerce',
    number: '03',
    title: 'Skaters',
    subtitle: 'Open Source E-Commerce Platform',
    description:
      'Backend architecture for multi-vendor skateboarding gear platform. Built store and shop modules with real-time notification systems for order status and platform events.',
    tags: ['Backend', 'E-Commerce'],
    techStack: ['Node.js', 'Next.js', 'Vercel'],
    gradient: 'from-orange-900 via-red-900 to-rose-900',
    emoji: '🛹',
    available: true,
  },
  {
    id: 'emis-government',
    number: '04',
    title: 'EMIS',
    subtitle: 'Education Management Information System',
    description:
      "National education management system under Indonesia's Ministry of Religious Affairs. Owned microservice for PDDikti data management with RESTful APIs and data consistency across distributed systems.",
    tags: ['Government', 'Backend'],
    techStack: ['PHP', 'Laravel', 'Microservices'],
    gradient: 'from-blue-950 via-slate-900 to-gray-900',
    emoji: '🏛️',
    available: true,
  },
]

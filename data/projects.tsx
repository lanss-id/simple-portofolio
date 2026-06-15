import type { Project } from '@/types'
import {
  TrendingUp,
  BrainCircuit,
  History,
  Zap,
  Landmark,
  Lock,
  Smartphone,
  ShoppingBag,
  Boxes,
  Bell,
  Globe,
  GraduationCap,
  RefreshCcw,
  ClipboardCheck,
  Rocket
} from 'lucide-react'

export const projects: Project[] = [
  {
    id: 'ai-trading-bot',
    slug: 'ai-trading-bot',
    number: '01',
    title: 'AI Trading Bot',
    subtitle: 'Automated Signal & Execution System',
    company: 'Freelance',
    year: '2024 — 2025',
    role: 'Full Stack Engineer',
    type: 'AI/ML · Fintech',
    description:
      'End-to-end automated trading bot using Claude Sonnet as the core reasoning engine. Implemented RAG pipeline with historical market data to reduce hallucination and improve signal accuracy via structured prompt engineering.',
    tags: ['AI/ML', 'Fintech'],
    techStack: ['n8n', 'Claude API', 'Supabase', 'Docker'],
    gradient: 'from-emerald-900 via-emerald-800 to-teal-900',
    heroGradient: 'linear-gradient(145deg, #001A0A 0%, #004A20 55%, #00A854 100%)',
    accentColor: '#00C96B',
    emoji: <TrendingUp size={80} strokeWidth={2} stroke="url(#icon-grad)" style={{ overflow: 'visible' }} />,
    available: true,
    nextProjectSlug: 'horizon-banking',
    metrics: [
      { value: '85%', label: 'Signal accuracy with RAG pipeline' },
      { value: '4×', label: 'Faster analysis vs manual trading' },
      { value: '24/7', label: 'Automated monitoring & execution' },
    ],
    sections: [
      {
        label: '01 — The Challenge',
        title: 'Manual trading was slow, emotional, and inconsistent',
        body: [
          'Day traders spend hours analyzing charts, reading news, and making emotionally-charged decisions. The result: inconsistent returns, missed opportunities, and burnout. The challenge was to build a system that could reason about market conditions as well as a skilled trader — but without fatigue, bias, or hesitation.',
          'I needed to create a bot that could ingest real-time market data, apply technical analysis, cross-reference with news sentiment, and execute trades autonomously — all while maintaining a clear audit trail of its reasoning.',
        ],
      },
      {
        label: '02 — The Approach',
        title: 'Claude Sonnet as the reasoning core, RAG as the memory',
        body: [
          'Rather than building a traditional algorithmic trading bot with hard-coded rules, I used Claude Sonnet as the core reasoning engine. The LLM analyzes market conditions in natural language, considers multiple factors simultaneously, and produces structured trading decisions.',
          'To ground Claude\'s analysis in reality, I implemented a RAG (Retrieval-Augmented Generation) pipeline using historical market data stored in Supabase. Before each analysis cycle, the system retrieves relevant historical patterns, previous trade outcomes, and technical indicators to provide context.',
          'The entire workflow is orchestrated through n8n, which handles data ingestion, RAG retrieval, prompt construction, LLM inference, and trade execution in a single automated pipeline. Docker containerization ensures consistent deployment and easy scaling.',
        ],
        findings: [
          { icon: <BrainCircuit size={24} strokeWidth={1.5} />, title: 'Structured Prompts', text: 'Developed a prompt engineering framework that forces Claude to output structured JSON with confidence scores, reducing hallucination by grounding decisions in retrieved data.' },
          { icon: <History size={24} strokeWidth={1.5} />, title: 'Historical Context', text: 'RAG pipeline retrieves similar market conditions from the past 2 years, giving the LLM pattern-matching capabilities beyond its training data.' },
          { icon: <Zap size={24} strokeWidth={1.5} />, title: 'Real-time Pipeline', text: 'n8n orchestration processes market data, runs analysis, and executes trades in under 30 seconds per cycle.' },
        ],
      },
      {
        label: '03 — The Solution',
        title: 'A fully autonomous trading system with human-readable reasoning',
        body: [
          'The final system operates 24/7 with minimal human intervention. Each trading decision comes with a detailed reasoning chain — explaining why the bot chose to buy, sell, or hold. This transparency was critical for building trust in the system.',
          'The bot monitors multiple trading pairs, applies risk management rules (position sizing, stop-losses, take-profits), and logs every decision with full context. A dashboard built on Supabase provides real-time visibility into performance, open positions, and historical decisions.',
        ],
      },
      {
        label: '04 — Results & Impact',
        title: 'Consistent performance with transparent decision-making',
        body: [
          'The RAG-augmented approach achieved 85% signal accuracy in backtesting, significantly outperforming simple rule-based bots. The structured prompt engineering reduced hallucinated signals by over 60% compared to raw LLM inference.',
          'Most importantly, the system removed emotion from trading decisions entirely, leading to more disciplined risk management and consistent execution across market conditions.',
        ],
        quote: 'The key insight was treating the LLM not as a black box, but as a reasoning engine that needs the right context to make good decisions — just like a human trader needs data to trade well.',
      },
    ],
  },
  {
    id: 'horizon-banking',
    slug: 'horizon-banking',
    number: '02',
    title: 'Horizon',
    subtitle: 'Modern Banking Platform',
    company: 'Personal Project',
    year: '2024',
    role: 'Full Stack Engineer',
    type: 'Full Stack · Banking',
    description:
      'Full stack banking web application featuring account management, fund transfers, and real-time transaction tracking. Built with end-to-end TypeScript for type safety and optimal developer experience.',
    tags: ['Full Stack', 'Banking'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Plaid API'],
    gradient: 'from-slate-900 via-blue-900 to-indigo-900',
    heroGradient: 'linear-gradient(145deg, #000B35 0%, #001F82 55%, #0050FF 100%)',
    accentColor: '#3B82F6',
    emoji: <Landmark size={80} strokeWidth={2} stroke="url(#icon-grad)" style={{ overflow: 'visible' }} />,
    available: true,
    nextProjectSlug: 'skaters-ecommerce',
    metrics: [
      { value: '100%', label: 'End-to-end TypeScript coverage' },
      { value: 'Real-time', label: 'Transaction tracking & updates' },
      { value: '3', label: 'Integrated banking APIs' },
    ],
    sections: [
      {
        label: '01 — The Challenge',
        title: 'Banking UIs are stuck in 2010',
        body: [
          'Most banking applications feel dated, slow, and frustrating to use. Users struggle with clunky interfaces, confusing navigation, and a lack of real-time feedback. The goal was to build a modern banking experience that feels as polished as the best consumer fintech apps.',
          'The technical challenge was equally demanding: integrating with real banking APIs (Plaid), handling sensitive financial data securely, and building a responsive, performant application that works flawlessly across devices.',
        ],
      },
      {
        label: '02 — The Approach',
        title: 'TypeScript-first architecture with modern banking APIs',
        body: [
          'I chose Next.js with full TypeScript coverage to ensure type safety across the entire stack — from API routes to database queries to frontend components. This eliminated an entire class of runtime errors that are critical to avoid in financial applications.',
          'Plaid API integration provides secure access to real bank account data, enabling features like account linking, balance checking, and transaction history. The UI was built with Tailwind CSS for rapid iteration and consistent design language.',
        ],
        findings: [
          { icon: <Lock size={24} strokeWidth={1.5} />, title: 'Secure by Default', text: 'All financial data encrypted in transit and at rest. Server-side rendering prevents sensitive data from leaking to client bundles.' },
          { icon: <Zap size={24} strokeWidth={1.5} />, title: 'Instant Feedback', text: 'Optimistic UI updates for transfers and actions, with server confirmation and rollback handling.' },
          { icon: <Smartphone size={24} strokeWidth={1.5} />, title: 'Responsive Design', text: 'Mobile-first approach ensures the banking experience works perfectly on any device.' },
        ],
      },
      {
        label: '03 — The Solution',
        title: 'A banking app that feels like it belongs in 2025',
        body: [
          'Horizon features a clean dashboard with account overview, recent transactions, and quick actions. Users can link multiple bank accounts via Plaid, transfer funds between accounts, and track spending patterns — all with smooth animations and instant feedback.',
          'The application demonstrates modern full-stack engineering practices: server components for data fetching, client components for interactivity, optimistic updates for perceived performance, and comprehensive error handling for edge cases.',
        ],
      },
      {
        label: '04 — Results & Impact',
        title: 'A showcase of modern full-stack engineering',
        body: [
          'The project demonstrates end-to-end proficiency in building production-grade financial applications. From secure API integration to polished UI, every layer of the stack is carefully crafted.',
          'The codebase serves as a reference implementation for TypeScript-first web development, with patterns that scale from prototype to production.',
        ],
        quote: 'Building a banking app taught me that the hardest problems aren\'t technical — they\'re about trust. Every pixel, every animation, every error message either builds or erodes user confidence.',
      },
    ],
  },
  {
    id: 'skaters-ecommerce',
    slug: 'skaters-ecommerce',
    number: '03',
    title: 'Skaters',
    subtitle: 'Open Source E-Commerce Platform',
    company: 'Open Source',
    year: '2023 — 2024',
    role: 'Backend Engineer',
    type: 'Backend · E-Commerce',
    description:
      'Backend architecture for multi-vendor skateboarding gear platform. Built store and shop modules with real-time notification systems for order status and platform events.',
    tags: ['Backend', 'E-Commerce'],
    techStack: ['Node.js', 'Next.js', 'Vercel', 'WebSocket'],
    gradient: 'from-orange-900 via-red-900 to-rose-900',
    heroGradient: 'linear-gradient(145deg, #1A0400 0%, #4A1000 55%, #7A1E00 100%)',
    accentColor: '#EF4444',
    emoji: <ShoppingBag size={80} strokeWidth={2} stroke="url(#icon-grad)" style={{ overflow: 'visible' }} />,
    available: true,
    nextProjectSlug: 'emis-government',
    metrics: [
      { value: 'Multi', label: 'Vendor architecture support' },
      { value: 'Real-time', label: 'Order status notifications' },
      { value: 'Open', label: 'Source community contribution' },
    ],
    sections: [
      {
        label: '01 — The Challenge',
        title: 'Building a marketplace that scales with community',
        body: [
          'The skateboarding community needed a dedicated e-commerce platform where multiple vendors could sell gear, share reviews, and build a community. Existing solutions like Shopify were too generic and expensive for small skate shops.',
          'The challenge was designing a backend that could handle multi-vendor operations — separate inventories, split payments, vendor dashboards — while keeping the platform fast and the developer experience clean.',
        ],
      },
      {
        label: '02 — The Approach',
        title: 'Modular backend with real-time capabilities',
        body: [
          'I designed the backend as a modular system with clear separation between store management, shop operations, user accounts, and notifications. Each module has its own service layer, making the codebase easy to extend and test.',
          'WebSocket integration enables real-time order status updates — customers see their order progress live, and vendors get instant notifications for new orders. This creates a responsive, modern shopping experience without constant page refreshes.',
        ],
        findings: [
          { icon: <Boxes size={24} strokeWidth={1.5} />, title: 'Modular Architecture', text: 'Store and shop modules operate independently, allowing vendors to customize their experience without affecting the platform.' },
          { icon: <Bell size={24} strokeWidth={1.5} />, title: 'Push Notifications', text: 'Real-time WebSocket events for order status changes, new reviews, and platform announcements.' },
          { icon: <Globe size={24} strokeWidth={1.5} />, title: 'Open Source', text: 'Documented API, contribution guidelines, and community-driven feature development.' },
        ],
      },
      {
        label: '03 — The Solution',
        title: 'A platform built by skaters, for skaters',
        body: [
          'The final platform supports multi-vendor registration, product catalog management, order processing with split payments, and a review system. The notification engine keeps all parties informed in real-time.',
          'Deployed on Vercel with Next.js for the storefront, the platform achieves excellent performance with edge caching and serverless API routes. The open-source nature encourages community contributions and transparency.',
        ],
      },
      {
        label: '04 — Results & Impact',
        title: 'Community-driven platform with solid architecture',
        body: [
          'The project demonstrates scalable backend architecture for marketplace applications. The modular design pattern has been adopted by other open-source projects as a reference implementation.',
          'Real-time notifications reduced customer support inquiries about order status significantly, proving that proactive communication is more effective than reactive support.',
        ],
        quote: 'Open source e-commerce isn\'t just about code — it\'s about building a platform that the community owns, shapes, and trusts.',
      },
    ],
  },
  {
    id: 'emis-government',
    slug: 'emis-government',
    number: '04',
    title: 'EMIS',
    subtitle: 'Education Management Information System',
    company: 'Kemenag RI',
    year: '2023',
    role: 'Backend Developer',
    type: 'Government · Backend',
    description:
      "National education management system under Indonesia's Ministry of Religious Affairs. Owned microservice for PDDikti data management with RESTful APIs and data consistency across distributed systems.",
    tags: ['Government', 'Backend'],
    techStack: ['PHP', 'Laravel', 'Microservices', 'PostgreSQL'],
    gradient: 'from-blue-950 via-slate-900 to-gray-900',
    heroGradient: 'linear-gradient(145deg, #0A0A1A 0%, #1A1A3A 55%, #2A2A5A 100%)',
    accentColor: '#818CF8',
    emoji: <GraduationCap size={80} strokeWidth={2} stroke="url(#icon-grad)" style={{ overflow: 'visible' }} />,
    available: true,
    nextProjectSlug: 'ai-trading-bot',
    metrics: [
      { value: '15%', label: 'Improvement in work effectiveness' },
      { value: 'National', label: 'Scale across Indonesia' },
      { value: 'REST', label: 'API architecture for data consistency' },
    ],
    sections: [
      {
        label: '01 — The Challenge',
        title: 'Managing education data at national scale',
        body: [
          "Indonesia's Ministry of Religious Affairs (Kemenag) manages thousands of educational institutions across the country. The existing system struggled with data inconsistency, slow processing, and poor interoperability between different government databases.",
          'The PDDikti (Pangkalan Data Pendidikan Tinggi) integration required real-time synchronization of student, faculty, and institutional data across a distributed microservice architecture — all while maintaining strict government compliance requirements.',
        ],
      },
      {
        label: '02 — The Approach',
        title: 'Microservice architecture with data consistency guarantees',
        body: [
          'I designed and implemented a dedicated microservice for PDDikti data management within the larger EMIS ecosystem. The service handles data ingestion from multiple sources, validates against government schemas, and ensures consistency across the distributed system.',
          'Built with Laravel following strict MVC patterns, the service exposes RESTful APIs that other microservices consume. PostgreSQL provides ACID compliance for critical government data, while Redis caching ensures sub-second response times for frequently accessed records.',
        ],
        findings: [
          { icon: <RefreshCcw size={24} strokeWidth={1.5} />, title: 'Data Sync', text: 'Designed eventual consistency patterns for distributed data across government databases, ensuring accuracy without blocking operations.' },
          { icon: <ClipboardCheck size={24} strokeWidth={1.5} />, title: 'Compliance', text: 'All APIs meet Indonesian government data standards and security requirements for handling citizen education records.' },
          { icon: <Rocket size={24} strokeWidth={1.5} />, title: 'Performance', text: 'Caching layer reduced average API response time from 2s to under 200ms for common queries.' },
        ],
      },
      {
        label: '03 — The Solution',
        title: 'A reliable backbone for national education data',
        body: [
          'The microservice handles PDDikti data management with high reliability: automated validation, conflict resolution, and audit logging. Government administrators can track data lineage and identify inconsistencies before they propagate.',
          'The RESTful API design allows other EMIS services to consume education data through well-documented endpoints, reducing integration complexity and improving development velocity across teams.',
        ],
      },
      {
        label: '04 — Results & Impact',
        title: 'Measurable improvement in government operations',
        body: [
          'The new system improved work effectiveness by 15% according to internal metrics. Data processing that previously took hours now completes in minutes, and data consistency issues dropped significantly.',
          'Working on government-scale infrastructure taught me the importance of reliability, documentation, and backward compatibility — skills that transfer directly to any production system.',
        ],
        quote: 'Government tech isn\'t glamorous, but it impacts millions of lives. Building reliable systems at this scale taught me more about engineering discipline than any side project ever could.',
      },
    ],
  },
]

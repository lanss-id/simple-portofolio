import { SectionReveal } from '@/components/shared/SectionReveal'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto section-divider">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Label */}
        <SectionReveal className="md:col-span-4">
          <span className="text-sm text-neutral-400 font-medium tracking-wide">
            About
          </span>
        </SectionReveal>

        {/* Content */}
        <SectionReveal delay={0.1} className="md:col-span-8 space-y-6">
          <p
            className="text-xl md:text-2xl leading-relaxed font-medium"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Four years in full stack development, working from freelance
            international clients to government-scale systems. I&apos;ve built
            AI-integrated applications, banking platforms, and national education
            infrastructure.
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            My approach is AI-first and research-driven. I leverage LLM
            integrations, RAG architectures, and automated workflows to ship
            products that are not just functional, but intelligent. I own the
            full development scope — from system architecture to deployed
            containers.
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            Since 2022, I&apos;ve served international clients via
            Freelancer.com, delivering end-to-end solutions with professional
            English communication. I work daily with Claude Code, GitHub Copilot,
            and Cursor AI to accelerate delivery without compromising code
            quality.
          </p>

          <div className="pt-4">
            <a
              href="/Resume_MaulanaKayyisPurnadiva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
            >
              View Full Resume (PDF)
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

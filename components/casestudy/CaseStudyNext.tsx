import Link from 'next/link'
import type { Project } from '@/types'
import { ArrowUpRight } from 'lucide-react'

export function CaseStudyNext({ nextProject }: { nextProject: Project }) {
  if (!nextProject) return null

  return (
    <Link href={`/work/${nextProject.slug}`} className="cs-next">
      <div className="cs-section-inner">
        <div className="cs-next-label">Next Case Study</div>
        <div className="cs-next-inner">
          <div>
            <div className="cs-next-name">{nextProject.title}</div>
            {nextProject.company && (
              <div className="cs-next-company">{nextProject.company}</div>
            )}
          </div>
          <div className="cs-next-arrow">
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </Link>
  )
}

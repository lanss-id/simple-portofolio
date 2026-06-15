import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { CaseStudyHero } from '@/components/casestudy/CaseStudyHero'
import { CaseStudySection } from '@/components/casestudy/CaseStudySection'
import { CaseStudyMetrics } from '@/components/casestudy/CaseStudyMetrics'
import { CaseStudyNext } from '@/components/casestudy/CaseStudyNext'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const nextProject = project.nextProjectSlug
    ? projects.find((p) => p.slug === project.nextProjectSlug)
    : undefined

  return (
    <main>
      <CaseStudyHero project={project} />

      {project.sections && project.sections.map((section, idx) => (
        <CaseStudySection
          key={idx}
          section={section}
          accentColor={project.accentColor}
        />
      ))}

      {project.metrics && project.metrics.length > 0 && (
        <div style={{ paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
          <CaseStudyMetrics metrics={project.metrics} />
        </div>
      )}

      {nextProject && <CaseStudyNext nextProject={nextProject} />}
    </main>
  )
}

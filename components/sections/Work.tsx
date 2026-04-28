import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { SectionReveal } from '@/components/shared/SectionReveal'

export function Work() {
  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionReveal className="mb-16">
        <span className="text-sm text-neutral-400 font-medium tracking-wide">
          Selected Work
        </span>
      </SectionReveal>

      {projects
        .filter((p) => p.available)
        .map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  )
}

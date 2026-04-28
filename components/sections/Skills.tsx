import { skills } from '@/data/skills'
import { Marquee } from '@/components/shared/Marquee'
import { SectionReveal } from '@/components/shared/SectionReveal'

export function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto section-divider">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Label */}
        <SectionReveal className="md:col-span-4">
          <span className="text-sm text-neutral-400 font-medium tracking-wide">
            Skills &amp; Technologies
          </span>
        </SectionReveal>

        {/* Marquee spans full width below on mobile, right cols on desktop */}
        <div className="md:col-span-8">
          <SectionReveal>
            <Marquee items={skills} speed={55} />
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

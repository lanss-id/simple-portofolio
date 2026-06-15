import { projects } from '@/data/projects'

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

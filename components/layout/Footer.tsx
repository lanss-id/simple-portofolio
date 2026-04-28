export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 max-w-6xl mx-auto section-divider flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
      <p>© {year} Maulana Kayyis Purnadiva — Full Stack Engineer</p>
      <p>Built with precision &amp; AI assistance</p>
    </footer>
  )
}

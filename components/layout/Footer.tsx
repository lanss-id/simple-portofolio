export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="section-divider"
      style={{
        paddingTop: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--fg-subtle)' }}>
            © {year} Maulana Kayyis Purnadiva
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--fg-subtle)' }}>
            Full Stack Engineer · Built with precision & AI
          </span>
        </div>
      </div>
    </footer>
  )
}

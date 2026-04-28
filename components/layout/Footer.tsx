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
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {/* Left: contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <a
              href="mailto:maulanakayyis@gmail.com"
              style={{
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                color: 'var(--fg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg)')}
            >
              maulanakayyis@gmail.com
            </a>
            <span style={{ fontSize: '0.8rem', color: 'var(--fg-subtle)' }}>
              Indonesia / Remote
            </span>
          </div>

          {/* Right: social links */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { href: 'https://linkedin.com/in/maulanakayyis', label: 'LinkedIn' },
              { href: 'https://github.com/maulanakayyis', label: 'GitHub' },
              { href: 'mailto:maulanakayyis@gmail.com', label: 'Email' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--fg-subtle)' }}>
            © {year} Maulana Kayyis Purnadiva
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--fg-subtle)' }}>
            Full Stack Engineer · Built with precision & AI
          </span>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from 'next'
import { Big_Shoulders, Inter_Tight } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { SmoothScroll } from '@/components/shared/SmoothScroll'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const bigShoulders = Big_Shoulders({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const interTight = Inter_Tight({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maulana Kayyis Purnadiva — Full Stack Engineer & AI Developer Indonesia',
  description:
    'Full Stack Engineer & AI Developer based in Jakarta, Indonesia. 4+ years building scalable web apps, AI-powered systems, and cloud infrastructure. Available for freelance.',
  keywords: [
    'Full Stack Engineer Indonesia', 'AI Developer Jakarta', 'Freelance Full Stack Developer',
    'React Developer', 'Next.js Developer', 'TypeScript', 'Node.js',
    'AI Integration', 'Jakarta Freelancer', 'Bandung Developer',
    'Maulana Kayyis', 'Remote Full Stack Engineer', 'AI Engineer Indonesia',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer & AI Developer Indonesia',
    description:
      'Full Stack Engineer & AI Developer based in Jakarta, Indonesia. Available for freelance. 4+ years experience in Next.js, TypeScript, AI systems.',
    url: 'https://lanss.my.id',
    siteName: 'MKP Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://lanss.my.id/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer & AI Developer Indonesia',
    description: 'Full Stack Engineer & AI Developer based in Jakarta, Indonesia. Available for freelance. 4+ years experience.',
    images: ['https://lanss.my.id/og-image.svg'],
  },
  alternates: {
    canonical: 'https://lanss.my.id',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: 'var(--font-body)' }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maulana Kayyis Purnadiva",
              url: "https://lanss.my.id",
              jobTitle: "Full Stack Engineer & AI Developer",
              description:
                "Full Stack Engineer & AI Developer based in Jakarta, Indonesia. Available for freelance projects. 4+ years experience building scalable web apps, AI systems, and cloud infrastructure.",
              sameAs: [
                "https://github.com/lanss-id",
                "https://www.linkedin.com/in/lanss-id/",
              ],
              knowsAbout: [
                "Full Stack Development",
                "React", "Next.js", "TypeScript",
                "AI Integration", "Cloud Infrastructure",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('mkp-theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}

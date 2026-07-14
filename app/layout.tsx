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
  title: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
  description:
    'Full Stack Engineer & AI-Integrated Developer. Jakarta based, remote ready. Four years building scalable web apps, AI-powered systems, and cloud infrastructure.',
  keywords: [
    'Full Stack Engineer', 'AI Developer', 'Jakarta', 'React', 'Next.js',
    'TypeScript', 'Node.js', 'Freelancer', 'Indonesia', 'Web Developer',
    'Maulana Kayyis', 'MKP',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
    description:
      'Full Stack Engineer & AI-Integrated Developer. Jakarta based, remote ready.',
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
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
    description: 'Full Stack Engineer & AI-Integrated Developer.',
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
              jobTitle: "Full Stack Engineer",
              description:
                "Full Stack Engineer & AI-Integrated Developer. Jakarta based, remote ready.",
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

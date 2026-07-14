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
  openGraph: {
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
    description:
      'Full Stack Engineer & AI-Integrated Developer. Jakarta based, remote ready.',
    url: 'https://lanss.my.id',
    siteName: 'MKP Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maulana Kayyis Purnadiva — Full Stack Engineer',
    description: 'Full Stack Engineer & AI-Integrated Developer.',
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

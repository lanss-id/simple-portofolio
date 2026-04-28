import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const soraFont = Sora({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
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
    url: 'https://mkp.dev',
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
      className={`${soraFont.variable} ${dmSans.variable}`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <body>{children}</body>
    </html>
  )
}

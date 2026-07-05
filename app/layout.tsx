import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Western Pharma - Medicine Wholesaler & Commission Agent',
    template: '%s | Western Pharma',
  },
  description:
    'Western Pharma is a trusted pharmaceutical distributor and commission agent in Bangladesh, serving wholesalers, retailers, and healthcare businesses with reliable medicine supply and ethical logistics.',
  metadataBase: new URL('https://www.westernpharma.com'),
  keywords: [
    'medicine wholesaler Bangladesh',
    'pharmaceutical distribution',
    'pharma commission agent',
    'medicine supply chain',
    'healthcare wholesale',
    'Western Pharma',
  ],
  authors: [{ name: 'Western Pharma', url: 'https://www.westernpharma.com' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Western Pharma - Medicine Wholesaler & Commission Agent',
    description:
      'Trusted pharmaceutical distribution in Bangladesh since 1980, serving wholesalers, retailers, and healthcare partners with reliable medicine supply and ethical logistics.',
    type: 'website',
    url: 'https://www.westernpharma.com',
    siteName: 'Western Pharma',
    locale: 'en_US',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Western Pharma logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Pharma - Medicine Wholesaler & Commission Agent',
    description:
      'Trusted pharmaceutical distribution in Bangladesh since 1980, serving wholesalers, retailers, and healthcare partners with reliable medicine supply and ethical logistics.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

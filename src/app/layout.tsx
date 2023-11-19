import type { Metadata, Viewport } from 'next'
import { dmSans, isProduction, libre, metadata as meta } from '@/utils'
import { GoogleAnalytics } from '@/components'
import '@/styles/globals.scss'

export const metadata: Metadata = meta

export const viewport: Viewport = {
  themeColor: '#18181b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libre.variable}`}>
      {isProduction() && <GoogleAnalytics />}
      <body>{children}</body>
    </html>
  )
}

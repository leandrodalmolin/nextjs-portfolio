import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leandro Dal Molin | Web Developer',
  description: 'Web developer based in Bristol',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#18181B',
      },
      {
        rel: 'shortcut icon',
        url: '/favicon/favicon.ico',
      },
    ],
    apple: {
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  },
  manifest: '/favicon/site.webmanifest',
}

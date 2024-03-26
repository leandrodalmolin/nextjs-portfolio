import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leandro Dal Molin | Frontend Software Engineer',
  description: 'Frontend Software Engineer based in Bristol with experience building websites for a range of different industries using technologies like Next.js, React, Javascript, Typescript, HTML, CSS/SASS and PHP.',
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

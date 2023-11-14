import { DM_Sans, Libre_Baskerville } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

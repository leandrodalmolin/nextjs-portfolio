import { ReactNode } from 'react'

export interface ISection {
  theme: 'light' | 'dark'
  extraClasses?: string
  children?: ReactNode
}

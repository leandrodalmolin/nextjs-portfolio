import { ReactNode } from 'react'

export interface ISection {
  theme: 'light' | 'dark'
  children?: ReactNode
}

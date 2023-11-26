import { ReactNode } from 'react'

export interface ISection {
  id?: string
  theme?: 'light' | 'dark'
  noPadding?: boolean
  fullHeight?: boolean
  children?: ReactNode
}

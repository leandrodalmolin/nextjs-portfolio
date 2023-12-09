import { THeadline } from '@/api'
import { ReactNode } from 'react'

export interface ISection {
  id?: string
  headline?: THeadline
  theme?: 'light' | 'dark'
  noPadding?: boolean
  fullHeight?: boolean
  children?: ReactNode
}

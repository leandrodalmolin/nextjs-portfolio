import { ReactNode } from 'react'

export interface IWrapper {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children?: ReactNode
}

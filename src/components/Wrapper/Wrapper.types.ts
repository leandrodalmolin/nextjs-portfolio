import { ReactNode } from 'react'

export interface IWrapper {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children?: ReactNode
}

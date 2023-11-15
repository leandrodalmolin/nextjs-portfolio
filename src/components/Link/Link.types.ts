import { HTMLProps, ReactNode } from 'react'

export interface ILink extends HTMLProps<HTMLAnchorElement> {
  variant?: 'default' | 'border'
  children?: ReactNode
}

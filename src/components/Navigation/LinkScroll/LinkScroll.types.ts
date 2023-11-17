import { ReactNode } from 'react'
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link'

export interface ILinkScroll extends ReactScrollLinkProps {
  href?: string
  children: ReactNode
}

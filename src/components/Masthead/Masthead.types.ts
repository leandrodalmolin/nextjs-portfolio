import { ReactNode } from 'react'
import { TMasthead } from '@/api'

export interface IMasthead extends TMasthead {
  children: ReactNode
}

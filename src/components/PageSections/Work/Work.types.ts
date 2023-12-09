import { THeadline, TWork } from '@/api'

export interface IWork {
  anchor: string
  headline: THeadline
  works?: TWork[]
}

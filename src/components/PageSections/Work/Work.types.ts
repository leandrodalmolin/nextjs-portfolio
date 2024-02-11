import { THeadline, TWork } from '@/api'

export interface IWork {
  target: string
  headline: THeadline
  works?: TWork[]
}

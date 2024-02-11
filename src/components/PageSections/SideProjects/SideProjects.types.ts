import { THeadline, TProject } from '@/api'

export interface ISideProjects {
  target: string
  headline: THeadline
  projects?: TProject[]
}

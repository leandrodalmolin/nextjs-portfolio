import { THeadline, TProject } from '@/api'

export interface ISideProjects {
  anchor: string
  headline: THeadline
  projects?: TProject[]
}

import { THeadline, TSkill } from '@/api'

export interface ISkillSet {
  anchor: string
  headline: THeadline
  skills?: TSkill[]
}

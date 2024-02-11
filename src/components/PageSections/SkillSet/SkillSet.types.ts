import { THeadline, TSkill } from '@/api'

export interface ISkillSet {
  target: string
  headline: THeadline
  skills?: TSkill[]
}

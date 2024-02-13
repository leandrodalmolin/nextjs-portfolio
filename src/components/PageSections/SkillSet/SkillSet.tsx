import { Wrapper, FadeInScroll, Section, HTMLRenderer } from '@/components'
import styles from './SkillSet.module.scss'
import { ISkillSet } from './SkillSet.types'

export function SkillSet({ target, headline, skills }: ISkillSet) {
  if (!skills) return null
  return (
    <Section
      id={target}
      headline={headline}
      theme="light"
      tabIndex={0}
      aria-label="Skill set section"
    >
      <Wrapper size="lg">
        <FadeInScroll>
          <ul className={styles.list}>
            {skills.map((skill) => {
              return (
                <li key={skill.id}>
                  <HTMLRenderer
                    html={skill.iconSvg}
                    title={skill.title}
                    tabIndex={0}
                  />
                </li>
              )
            })}
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

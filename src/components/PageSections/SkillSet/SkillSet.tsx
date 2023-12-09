import {
  Heading,
  Wrapper,
  FadeInScroll,
  Section,
  HTMLRenderer,
} from '@/components'
import styles from './SkillSet.module.scss'
import { ISkillSet } from './SkillSet.types'

export function SkillSet({ anchor, headline, skills }: ISkillSet) {
  if (!skills) return null
  return (
    <Section id={anchor} theme="light">
      <Wrapper size="lg">
        <FadeInScroll>
          <Heading
            heading={headline.heading}
            subheading={headline.subheading}
            theme="light"
          />
        </FadeInScroll>
        <FadeInScroll>
          <ul className={styles.list}>
            {skills.map((skill) => {
              return (
                <li key={skill.id}>
                  <HTMLRenderer html={skill.iconSvg} title={skill.title} />
                </li>
              )
            })}
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

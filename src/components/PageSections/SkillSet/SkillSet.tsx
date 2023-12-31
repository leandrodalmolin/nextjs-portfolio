import { Heading, Wrapper, FadeInScroll, Section } from '@/components'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import styles from './SkillSet.module.scss'

export function SkillSet() {
  return (
    <Section id="tech" theme="light">
      <Wrapper size="lg">
        <FadeInScroll>
          <Heading
            heading="Skill Set"
            subheading="Technologies I Use"
            theme="light"
          />
        </FadeInScroll>
        <FadeInScroll>
          <ul className={styles.list}>
            <li>
              <SiNextdotjs title="Next.js" />
            </li>
            <li>
              <FaReact title="React" />
            </li>
            <li>
              <FaJsSquare title="JavaScript" />
            </li>
            <li>
              <FaHtml5 title="HTML5" />
            </li>
            <li>
              <FaCss3Alt title="CSS3" />
            </li>
            <li>
              <FaPhp title="PHP" />
            </li>
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

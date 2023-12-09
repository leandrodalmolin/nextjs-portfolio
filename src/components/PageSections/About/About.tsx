import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  Heading,
  Link,
  Wrapper,
  FadeInScroll,
  Section,
  HTMLRenderer,
} from '@/components'
import styles from './About.module.scss'
import { IAbout } from './About.types'

export function About({ anchor, headline, content }: IAbout) {
  if (!content) return null
  return (
    <Section id={anchor} headline={headline} fullHeight>
      <Wrapper>
        <FadeInScroll>
          <div className={styles.copy}>
            <HTMLRenderer html={content.html} />
          </div>
          <ul className={styles.links}>
            <li>
              <Link href="/leandro-dal-molin-cv.pdf" target="_blank">
                <FaFileAlt /> CV
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/leandrodalmolin/"
                target="_blank"
              >
                <FaLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.github.com/leandrodalmolin"
                target="_blank"
              >
                <FaGithub /> GitHub
              </Link>
            </li>
            <li>
              <Link href="mailto:leandro.swk@hotmail.com">
                <FaEnvelope /> Email
              </Link>
            </li>
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

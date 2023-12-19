import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  Link,
  Wrapper,
  FadeInScroll,
  Section,
  HTMLRenderer,
} from '@/components'
import styles from './About.module.scss'
import { IAbout } from './About.types'
import { useBoundStore } from '@/store'

export function About({ anchor, headline, content }: IAbout) {
  if (!content) return null

  const { globals } = useBoundStore.getState()

  return (
    <Section id={anchor} headline={headline} fullHeight>
      <Wrapper>
        <FadeInScroll>
          <div className={styles.copy}>
            <HTMLRenderer html={content.html} />
          </div>
          <ul className={styles.links}>
            <li>
              <Link href={globals?.cvFile?.url} target="_blank">
                <FaFileAlt /> CV
              </Link>
            </li>
            <li>
              <Link href={globals?.linkedin} target="_blank">
                <FaLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link href={globals?.github} target="_blank">
                <FaGithub /> GitHub
              </Link>
            </li>
            <li>
              <Link href={`mailto:${globals?.email}`}>
                <FaEnvelope /> Email
              </Link>
            </li>
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

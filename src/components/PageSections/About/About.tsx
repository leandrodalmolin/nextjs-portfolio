import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Heading, Link, Wrapper, FadeInScroll, Section } from '@/components'
import styles from './About.module.scss'

export function About() {
  return (
    <Section id="about" noPadding>
      <div className={styles.container}>
        <Wrapper>
          <FadeInScroll>
            <Heading heading="About Me" subheading="Who am I?" />
          </FadeInScroll>
          <FadeInScroll>
            <div className={styles.copy}>
              <p className={styles.intro}>
                <strong>
                  My name is Leandro Dal Molin.
                  <br />A web developer mostly focused on the front-end.
                </strong>
              </p>
              <p>
                My interest in web development started back in 2000 building
                websites on Microsoft FrontPage (I know) about my favourite
                bands.
              </p>
              <p>
                Since then, I&apos;ve graduated, had the chance to work on a
                variety of projects (software and web) and finally moved from
                Brazil to England in 2017, where I&apos;ve been working as a web
                developer building websites for businesses throughout the UK.
              </p>
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
      </div>
    </Section>
  )
}

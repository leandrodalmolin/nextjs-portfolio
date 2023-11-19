import { Link, Wrapper, FadeIn, Section } from '@/components'
import styles from './Masthead.module.scss'
import { NextSectionLink } from './NextSectionLink'

export function Masthead() {
  return (
    <Section id="home" noPadding>
      <div className={styles.container}>
        <Wrapper size="xl">
          <FadeIn delay={500}>
            <h1 className={styles.heading}>Hi, I&apos;m Leandro!</h1>
            <p className={styles.subheading}>
              A web developer focused on creating interactive experiences on the
              web.
            </p>
            <Link
              variant="border"
              href="/leandro-dal-molin-cv.pdf"
              target="_blank"
            >
              Curriculum Vitae
            </Link>
          </FadeIn>
        </Wrapper>
        <NextSectionLink />
      </div>
    </Section>
  )
}

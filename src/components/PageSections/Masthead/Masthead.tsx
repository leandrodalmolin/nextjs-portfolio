import { Link, Wrapper, FadeIn, Section } from '@/components'
import styles from './Masthead.module.scss'
import { NextSectionLink } from './NextSectionLink'
import { IMasthead } from './Masthead.types'

export function Masthead({ heading, subheading }: IMasthead) {
  return (
    <Section id="home" noPadding>
      <div className={styles.container}>
        <Wrapper size="xl">
          <FadeIn delay={500}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.subheading}>{subheading}</p>
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

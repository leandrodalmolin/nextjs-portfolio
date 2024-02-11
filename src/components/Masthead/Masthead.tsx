import { getGlobals } from '@/api'
import { Link, Wrapper, FadeIn, Section } from '@/components'
import styles from './Masthead.module.scss'
import { IMasthead } from './Masthead.types'

export async function Masthead({ heading, subheading, children }: IMasthead) {
  return (
    <Section id="home" noPadding>
      <div className={styles.container}>
        <Wrapper size="xl">
          <FadeIn delay={500}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.subheading}>{subheading}</p>
            <Link variant="border" href="/cv" target="_blank">
              Curriculum Vitae
            </Link>
          </FadeIn>
        </Wrapper>
        {children}
      </div>
    </Section>
  )
}

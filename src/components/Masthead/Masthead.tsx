import { FadeIn } from '@/utils'
import { Link, Wrapper } from '@/components'
import styles from './Masthead.module.scss'

export function Masthead() {
  return (
    <div className={styles.masthead}>
      <Wrapper size="xl">
        <FadeIn delay={500}>
          <h1>Hi, I&apos;m Leandro!</h1>
          <p>
            A web developer focused on creating interactive experiences on the
            web.
          </p>
          <p>
            <Link
              variant="border"
              href="/leandro-dal-molin-cv.pdf"
              target="_blank"
            >
              Curriculum Vitae
            </Link>
          </p>
        </FadeIn>
      </Wrapper>
    </div>
  )
}

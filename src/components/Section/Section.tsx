import { ISection } from './Section.types'
import styles from './Section.module.scss'
import cn from 'classnames'
import { Heading } from '@/components'

export function Section({
  id,
  headline,
  theme = 'dark',
  noPadding = false,
  fullHeight = false,
  children,
}: ISection) {
  const classes = cn(styles.section, styles[theme], {
    [styles['no-padding']]: noPadding,
    [styles['full-height']]: fullHeight,
  })
  return (
    <section id={id} className={classes}>
      <div>
        {headline && (
          <Heading
            heading={headline.heading}
            subheading={headline.subheading}
            theme={theme}
          />
        )}
        {children}
      </div>
    </section>
  )
}

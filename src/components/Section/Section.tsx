import { ISection } from './Section.types'
import styles from './Section.module.scss'
import cn from 'classnames'

export function Section({
  id,
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
      <div>{children}</div>
    </section>
  )
}

import { ISection } from './Section.types'
import styles from './Section.module.scss'
import cn from 'classnames'

export function Section({
  id,
  theme = 'dark',
  noPadding = false,
  children,
}: ISection) {
  const classes = cn(styles.container, styles[theme], {
    [styles['no-padding']]: noPadding,
  })
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

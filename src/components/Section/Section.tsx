import { ISection } from './Section.types'
import styles from './Section.module.scss'
import classNames from 'classnames'

export function Section({ theme = 'dark', children, ...rest }: ISection) {
  const classes = classNames(styles.section, styles[`section--${theme}`])
  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  )
}

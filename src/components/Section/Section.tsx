import { ISection } from './Section.types'
import styles from './Section.module.scss'
import classNames from 'classnames'

export function Section({
  theme = 'dark',
  extraClasses = '',
  children,
  ...rest
}: ISection) {
  const classes = classNames(
    styles.section,
    styles[`section--${theme}`],
    extraClasses
  )

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  )
}

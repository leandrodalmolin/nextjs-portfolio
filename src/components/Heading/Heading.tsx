import { FadeInScroll } from '..'
import styles from './Heading.module.scss'
import { IHeading } from './Heading.types'
import cn from 'classnames'

export function Heading({ heading, subheading, theme = 'dark' }: IHeading) {
  return (
    <FadeInScroll>
      <div className={styles.container}>
        <p className={styles.subheading}>{subheading}</p>
        <h2 className={cn(styles.heading, styles[theme])}>{heading}</h2>
      </div>
    </FadeInScroll>
  )
}

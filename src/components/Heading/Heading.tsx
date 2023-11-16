import styles from './Heading.module.scss'
import { IHeading } from './Heading.types'

export function Heading({ heading, subheading }: IHeading) {
  return (
    <>
      <p className={styles.subheading}>{subheading}</p>
      <h2 className={styles.heading}>{heading}</h2>
    </>
  )
}

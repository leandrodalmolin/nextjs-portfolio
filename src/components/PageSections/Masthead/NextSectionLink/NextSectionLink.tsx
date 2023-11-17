'use client'

import { Link as ReactScrollLink } from 'react-scroll'
import styles from './NextSectionLink.module.scss'

export function NextSectionLink() {
  return (
    <div className={styles.link}>
      <ReactScrollLink
        smooth="easeOutQuart"
        duration={1500}
        spy={true}
        to="work"
        href="#work"
      >
        <span className={styles.text}>scroll</span>
        <span className={styles.pipe}></span>
      </ReactScrollLink>
    </div>
  )
}

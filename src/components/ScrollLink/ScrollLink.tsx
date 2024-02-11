'use client'

import { Link as ReactScrollLink } from 'react-scroll'
import styles from './ScrollLink.module.scss'

export function ScrollLink({ target }: { target: string }) {
  return (
    <div className={styles.container}>
      <ReactScrollLink
        smooth="easeOutQuart"
        duration={1500}
        spy={true}
        to={target}
        href={`#${target}`}
      >
        <span className={styles.text}>scroll</span>
        <span className={styles.pipe}></span>
      </ReactScrollLink>
    </div>
  )
}

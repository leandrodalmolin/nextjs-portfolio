'use client'

import { Link as ReactScrollLink } from 'react-scroll'
import { ILinkScroll } from './LinkScroll.types'
import styles from './LinkScroll.module.scss'

export function LinkScroll({ children, href, ...rest }: ILinkScroll) {
  return (
    <ReactScrollLink
      smooth="easeOutQuart"
      duration={1500}
      spy={true}
      activeClass={styles.active}
      className={styles.link}
      href={href}
      {...rest}
    >
      {children}
    </ReactScrollLink>
  )
}

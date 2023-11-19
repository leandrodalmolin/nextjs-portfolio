'use client'

import { useEffect, useState } from 'react'
import { IFadeIn } from './FadeIn.types'
import styles from './FadeIn.module.scss'
import cn from 'classnames'

export function FadeIn({ delay = 0, children }: IFadeIn) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, delay)
  }, [delay])

  const classes = cn(styles.container, {
    [styles.active]: isActive,
  })
  return <div className={classes}>{children}</div>
}

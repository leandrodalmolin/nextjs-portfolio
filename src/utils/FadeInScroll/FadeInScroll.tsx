'use client'

import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { IFadeInScroll } from './FadeInScroll.types'
import styles from './FadeInScroll.module.scss'

export function FadeInScroll({ children }: IFadeInScroll) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Fades in only once
        if (!isVisible && entry.isIntersecting) {
          setVisible(true)
        }
      })
    })

    // Prevent exhaustive-deps: https://stackoverflow.com/a/67069936
    let localRef: null | HTMLDivElement = null
    if (domRef.current) {
      observer.observe(domRef.current)
      localRef = domRef.current
    }

    return () => {
      if (localRef) {
        observer.unobserve(localRef)
      }
    }
  }, [isVisible])

  const classes = cn(styles['fade-in-scroll'], {
    [styles['is-visible']]: isVisible,
  })

  return (
    <div className={classes} ref={domRef}>
      {children}
    </div>
  )
}

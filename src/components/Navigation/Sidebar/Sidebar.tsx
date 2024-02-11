'use client'

import React, { useRef } from 'react'
import { ISidebar } from './Sidebar.types'
import styles from './Sidebar.module.scss'
import { CSSTransition } from 'react-transition-group'

export const Sidebar = ({ isOpen = false, children }: ISidebar) => {
  const ref = useRef(null)

  const lockScroll = () => {
    const body = document.querySelector('body')
    body?.classList.add('overflow-hidden')
  }

  const unlockScroll = () => {
    const body = document.querySelector('body')
    body?.classList.remove('overflow-hidden')
  }

  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      unmountOnExit
      onEntered={lockScroll}
      onExited={unlockScroll}
      nodeRef={ref}
    >
      <div ref={ref} className={styles.sidebar}>
        {children}
      </div>
    </CSSTransition>
  )
}

Sidebar.displayName = 'Sidebar'

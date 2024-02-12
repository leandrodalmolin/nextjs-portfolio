'use client'

import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ISidebar } from './Sidebar.types'
import styles from './Sidebar.module.scss'

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
      nodeRef={ref}
      onEntered={lockScroll}
      onExited={unlockScroll}
      unmountOnExit
      classNames={{
        enter: styles.transitionEnter,
        enterActive: styles.transitionEnterActive,
        exit: styles.transitionExit,
        exitActive: styles.transitionExitActive,
      }}
    >
      <nav ref={ref} className={styles.sidebar}>
        {children}
      </nav>
    </CSSTransition>
  )
}

Sidebar.displayName = 'Sidebar'

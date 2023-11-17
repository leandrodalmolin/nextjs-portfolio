'use client'

import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Squash as Hamburger } from 'hamburger-react'
import cn from 'classnames'
import { LinkScroll, Logo, Menu, Sidebar, Wrapper } from '@/components'
import { FadeIn } from '@/utils'
import styles from './Navbar.module.scss'

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const sidebarRef = useRef(null)

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  const lockScroll = () => {
    const body = document.querySelector('body')
    body?.classList.add('overflow-hidden')
  }

  const unlockScroll = () => {
    const body = document.querySelector('body')
    body?.classList.remove('overflow-hidden')
  }

  const handleScroll = () => {
    const threshold = 300
    setIsScrolling(window.scrollY > threshold)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const classes = cn(styles.navbar, {
    [styles.open]: isSidebarOpen,
    [styles.close]: !isSidebarOpen,
    [styles['navbar-scroll']]: isScrolling,
  })

  return (
    <>
      <header className={classes}>
        <Wrapper size="2xl">
          <nav className={styles.nav}>
            <FadeIn delay={1000}>
              <LinkScroll to="home" href="#home" onClick={handleCloseSidebar}>
                <div className={styles.logo}>
                  <Logo />
                </div>
              </LinkScroll>
            </FadeIn>

            <div className={styles.hamburger}>
              <FadeIn delay={1500}>
                <Hamburger
                  color="#d4d4d8"
                  size={28}
                  distance="sm"
                  toggled={isSidebarOpen}
                  toggle={setIsSidebarOpen}
                />
              </FadeIn>
            </div>

            <div className={styles.menu}>
              <FadeIn delay={1500}>
                <Menu />
              </FadeIn>
            </div>
          </nav>
        </Wrapper>
      </header>

      <CSSTransition
        in={isSidebarOpen}
        timeout={400}
        classNames="sidebar"
        unmountOnExit
        onEntered={lockScroll}
        onExited={unlockScroll}
        nodeRef={sidebarRef}
      >
        <Sidebar ref={sidebarRef} onCloseSidebar={handleCloseSidebar} />
      </CSSTransition>
    </>
  )
}

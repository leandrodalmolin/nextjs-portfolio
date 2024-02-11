'use client'

import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import cn from 'classnames'
import { LinkScroll, Logo, Menu, Sidebar, Wrapper, FadeIn } from '@/components'
import styles from './Navbar.module.scss'
import { useScrollStatus } from '@/hooks'

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isScrolling } = useScrollStatus()

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  const classes = cn(styles.navbar, {
    [styles.open]: isSidebarOpen,
    [styles.close]: !isSidebarOpen,
    [styles.scroll]: isScrolling,
  })

  return (
    <>
      <header className={classes}>
        <Wrapper size="xxl">
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

      <Sidebar isOpen={isSidebarOpen}>
        <Menu onLinkClick={handleCloseSidebar} />
      </Sidebar>
    </>
  )
}

'use client'

import cn from 'classnames'
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { LinkScroll, Logo, Menu, Sidebar, Wrapper } from '@/components'
import { useScrollStatus, useWindowResize } from '@/hooks'
import styles from './Navbar.module.scss'
import { INavbar } from './Navbar.types'

export function Navbar({ menuItems }: INavbar) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isScrolling } = useScrollStatus()

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Close sidebar on screen resize in case sidebar is open
  useWindowResize(() => handleCloseSidebar(), {
    minWidth: 768,
  })

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
            <LinkScroll to="home" href="#home" onClick={handleCloseSidebar}>
              <div className={styles.logo}>
                <Logo />
              </div>
            </LinkScroll>

            <div className={styles.hamburger}>
              <Hamburger
                color="#d4d4d8"
                size={28}
                distance="sm"
                toggled={isSidebarOpen}
                toggle={setIsSidebarOpen}
                label="Show menu"
              />
            </div>

            <div className={styles.menu}>
              <Menu items={menuItems} />
            </div>
          </nav>
        </Wrapper>
      </header>

      <Sidebar isOpen={isSidebarOpen}>
        <Menu items={menuItems} onLinkClick={handleCloseSidebar} />
      </Sidebar>
    </>
  )
}

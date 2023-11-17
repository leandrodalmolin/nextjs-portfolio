import React from 'react'
import { Menu } from '@/components'
import { ISidebar } from './Sidebar.types'
import styles from './Sidebar.module.scss'

export const Sidebar = React.forwardRef<HTMLDivElement, ISidebar>(
  ({ onCloseSidebar }, ref) => {
    return (
      <div ref={ref} className={styles.sidebar}>
        <Menu onLinkClick={onCloseSidebar} />
      </div>
    )
  }
)

Sidebar.displayName = 'Sidebar'

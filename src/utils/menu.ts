import { TSection } from '@/api'

export function buildMenu(sections?: TSection[]) {
  if (!sections) return []

  const menu = sections.map((section) => {
    return {
      text: section.menuText,
      target: section.menuTarget,
    }
  })

  // Add home as first section (fixed)
  menu.unshift({
    text: 'Home',
    target: 'home',
  })

  return menu
}

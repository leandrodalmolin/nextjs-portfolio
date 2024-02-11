import {
  Navbar,
  Masthead,
  ScrollLink,
  PageSectionGenerator,
} from '@/components'
import { getPage } from '@/api'
import { buildMenu } from '@/utils'

export default async function Home() {
  const page = await getPage('home')
  if (!page) return null

  const menuItems = buildMenu(page.sections)
  const scrollTarget = menuItems[1].target

  return (
    <>
      <Navbar menuItems={menuItems} />
      <main>
        <Masthead {...page.masthead}>
          <ScrollLink target={scrollTarget} />
        </Masthead>
        <PageSectionGenerator sections={page.sections} />
      </main>
    </>
  )
}

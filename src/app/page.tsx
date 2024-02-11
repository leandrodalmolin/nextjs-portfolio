import { Navbar, Masthead, PageSectionGenerator } from '@/components'
import { getPage } from '@/api'
import { buildMenu } from '@/utils'

export default async function Home() {
  const page = await getPage('home')
  if (!page) return null

  const menu = buildMenu(page.sections)

  return (
    <>
      <Navbar menuItems={menu} />
      <main>
        <Masthead {...page.masthead} />
        <PageSectionGenerator sections={page.sections} />
      </main>
    </>
  )
}

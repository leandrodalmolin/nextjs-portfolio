import { Navbar, Masthead, PageSectionGenerator } from '@/components'
import { getPage } from '@/api'

export default async function Home() {
  const page = await getPage('home')

  if (!page) return null

  return (
    <>
      <Navbar />
      <main>
        <Masthead {...page.masthead} />
        <PageSectionGenerator sections={page.sections} />
      </main>
    </>
  )
}

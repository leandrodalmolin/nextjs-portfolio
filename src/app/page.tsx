import { useStore } from '@/store'
import { Navbar, Masthead, PageSectionGenerator } from '@/components'

export default async function Home() {
  const { page, fetchGlobals, fetchPage } = useStore.getState()
  fetchGlobals()
  fetchPage()

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

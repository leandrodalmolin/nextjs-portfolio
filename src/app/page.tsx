import { loadStore, useBoundStore } from '@/store'
import { Navbar, Masthead, PageSectionGenerator } from '@/components'

export default async function Home() {
  await loadStore()
  const { page } = useBoundStore.getState()

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

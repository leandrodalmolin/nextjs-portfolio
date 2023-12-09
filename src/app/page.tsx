import { getPage } from '@/api'
import { Navbar, Masthead, PageSectionGenerator } from '@/components'
import { useGlobalsStore } from '@/store'

export default async function Home() {
  const globalsState = useGlobalsStore.getState()
  globalsState.fetch()

  const data = await getPage('home')
  if (!data) return null
  const {
    page: { masthead, sections },
  } = data

  return (
    <>
      <Navbar />
      <main>
        <Masthead heading={masthead.heading} subheading={masthead.subheading} />
        <PageSectionGenerator sections={sections} />
      </main>
    </>
  )
}

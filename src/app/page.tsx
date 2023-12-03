import {
  About,
  Masthead,
  Navbar,
  PageSectionGenerator,
  SideProjects,
  SkillSet,
  Work,
} from '@/components'
import { getPage } from '@/api'

export default async function Home() {
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

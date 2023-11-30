import {
  About,
  Masthead,
  Navbar,
  SideProjects,
  SkillSet,
  Work,
} from '@/components'
import { getPage } from '@/lib'

export default async function Home() {
  const { page } = await getPage('home')
  console.log(page.sections)

  return (
    <>
      <Navbar />
      <main>
        <Masthead />
        <Work />
        <SideProjects />
        <SkillSet />
        <About />
      </main>
    </>
  )
}

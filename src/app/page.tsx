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
  const data = await getPage('home')
  console.log(data)

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

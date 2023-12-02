import {
  About,
  Masthead,
  Navbar,
  SideProjects,
  SkillSet,
  Work,
} from '@/components'
import { getPage } from '@/api'

export default async function Home() {
  const data = await getPage('home')
  if (!data) return null
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

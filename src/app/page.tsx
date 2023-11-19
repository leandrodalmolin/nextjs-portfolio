import {
  About,
  Masthead,
  Navbar,
  SideProjects,
  SkillSet,
  Work,
} from '@/components'

export default function Home() {
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

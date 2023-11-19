import {
  About,
  Masthead,
  Navbar,
  Section,
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

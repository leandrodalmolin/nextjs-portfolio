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
        <section
          id="home"
          className="section section--dark section--no-padding"
        >
          <Masthead />
        </section>
        <section id="work" className="section section--light">
          <Work />
        </section>
        <section id="projects" className="section section--dark">
          <SideProjects />
        </section>
        <section id="tech" className="section section--light">
          <SkillSet />
        </section>
        <section
          id="about"
          className="section section--dark section--no-padding"
        >
          <About />
        </section>
      </main>
    </>
  )
}

import { Masthead, SideProjects, SkillSet, Work } from '@/components'

export default function Home() {
  return (
    <div>
      <section id="about" className="section section--dark section--no-padding">
        <Masthead />
      </section>
      <section className="section section--light">
        <Work />
      </section>
      <section className="section section--dark">
        <SideProjects />
      </section>
      <section className="section section--light">
        <SkillSet />
      </section>
    </div>
  )
}

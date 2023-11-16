import { Wrapper, Masthead, SideProjects } from '@/components'

export default function Home() {
  return (
    <div>
      <section id="about" className="section section--dark section--no-padding">
        <Masthead />
      </section>
      <section className="section section--dark">
        <SideProjects />
      </section>
    </div>
  )
}

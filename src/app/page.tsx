import { Wrapper, Masthead } from '@/components'

export default function Home() {
  return (
    <div>
      <section className="section section--dark section--no-padding">
        <Masthead />
      </section>
      <section className="section section--light">
        <Wrapper size="lg">
          <h1>Dark section</h1>
        </Wrapper>
      </section>
    </div>
  )
}

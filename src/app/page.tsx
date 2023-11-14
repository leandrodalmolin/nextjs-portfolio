import { Section, Wrapper } from '@/components'

export default function Home() {
  return (
    <div>
      <Section theme="light">
        <Wrapper size="md">
          <h1>Light section</h1>
        </Wrapper>
      </Section>
      <Section theme="dark">
        <Wrapper size="lg">
          <h1>Dark section</h1>
        </Wrapper>
      </Section>
    </div>
  )
}

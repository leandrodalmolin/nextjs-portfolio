import { Wrapper } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="not-found">
      <Wrapper>
        <h1>Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </Wrapper>
    </section>
  )
}

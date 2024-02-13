'use client'

import { Wrapper } from '@/components'

interface IError {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: IError) {
  return (
    <section className="error">
      <Wrapper>
        <h1>Something went wrong!</h1>
        <p>Error message: {error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </Wrapper>
    </section>
  )
}

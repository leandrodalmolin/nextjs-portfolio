'use client'

import { Link, Wrapper, Section } from '@/components'
import styles from './Masthead.module.scss'
import { IMasthead } from './Masthead.types'
import { useScramble } from 'use-scramble'
import { useEffect } from 'react'

export function Masthead({ heading, subheading, children }: IMasthead) {
  const { ref, replay } = useScramble({
    text: subheading,
    overdrive: false,
    overflow: true,
    range: [97, 122],
    chance: 0.5,
    seed: 10,
    playOnMount: false,
  })

  useEffect(() => replay(), [replay])

  return (
    <Section id="home" noPadding>
      <div className={styles.container}>
        <Wrapper size="xl">
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subheading} ref={ref} />
          <Link variant="border" href="/cv" target="_blank">
            Curriculum Vitae
          </Link>
        </Wrapper>
        {children}
      </div>
    </Section>
  )
}

import cn from 'classnames'
import { Card, Wrapper, Section } from '@/components'
import styles from './Work.module.scss'
import { IWork } from './Work.types'

export function Work({ target, headline, works }: IWork) {
  if (!works) return null
  return (
    <Section id={target} headline={headline} theme="light">
      <Wrapper size="xxl">
        <ul className={styles.grid}>
          {works.map((work) => (
              <li key={work.id} className={styles.item}>
                <div className={styles['item-container']}>
                  <Card
                    title={work.title}
                    description={work.description}
                    url={work.siteUrl}
                    imageSrc={work.image.url}
                    bgColor={work.cardColour.hex}
                  />
                </div>
              </li>
            ))}
        </ul>
      </Wrapper>
    </Section>
  )
}

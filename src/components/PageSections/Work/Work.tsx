import cn from 'classnames'
import { Card, Wrapper, Section } from '@/components'
import styles from './Work.module.scss'
import { IWork } from './Work.types'

export function Work({ target, headline, works }: IWork) {
  if (!works) return null
  return (
    <Section id={target} headline={headline} theme="light">
      <Wrapper size="xxl">
        <div className={styles.grid}>
          {works.map((work, index) => {
            const lastItem = works.length - 1 === index
            const itemClasses = cn(styles.item, {
              [styles['last-item']]: lastItem,
            })
            return (
              <div key={work.id} className={itemClasses}>
                <div className={styles['item-container']}>
                  <Card
                    title={work.title}
                    description={work.description}
                    url={work.siteUrl}
                    imageSrc={work.image.url}
                    bgColor={work.cardColour.hex}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </Section>
  )
}

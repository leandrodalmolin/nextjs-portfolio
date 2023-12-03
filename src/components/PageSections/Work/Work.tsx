import cn from 'classnames'
import { Card, Heading, Wrapper, FadeInScroll, Section } from '@/components'
import styles from './Work.module.scss'
import { IWork } from './Work.types'

export function Work({ works }: IWork) {
  if (!works) return null
  return (
    <Section id="work" theme="light">
      <Wrapper size="xxl">
        <FadeInScroll>
          <Heading
            heading="Selected Work"
            subheading="© Artworking/Golfworking"
            theme="light"
          />
        </FadeInScroll>
        <div className={styles.grid}>
          {works.map((work, index) => {
            const lastItem = works.length - 1 === index
            const itemClasses = cn(styles.item, {
              [styles['last-item']]: lastItem,
            })
            return (
              <div key={work.id} className={itemClasses}>
                <div className={styles['item-container']}>
                  <FadeInScroll>
                    <Card
                      title={work.title}
                      description={work.description}
                      url={work.siteUrl}
                      imageSrc={work.image.url}
                      bgColor={work.cardColour.hex}
                    />
                  </FadeInScroll>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </Section>
  )
}

import cn from 'classnames'
import { Card, Heading, Wrapper, FadeInScroll, Section } from '@/components'
import styles from './Work.module.scss'

const WORK_DATA = [
  {
    id: 'wd1',
    title: 'GolfWorking',
    description:
      'GolfWorking specialise in building websites for golf clubs, with clients throughout UK and Ireland.',
    url: 'https://www.golfworking.co.uk/',
    imageSrc: '/work/gw-work.jpg',
    bgColor: '#222',
  },
  {
    id: 'wd2',
    title: 'Royal Lytham & St Annes Golf Club',
    description:
      'One of the premier links courses in the World, host to eleven Open Championships, two Ryder Cups and numerous other major tournaments.',
    url: 'https://www.royallytham.org/',
    imageSrc: '/work/rl-work.jpg',
    bgColor: '#111b36',
  },
  {
    id: 'wd3',
    title: "Royal St. David's Golf Club",
    description:
      'Established in 1894, the Harlech links has long been ranked within the ‘Top Fifty’ of British golf courses, and most recently ranked 2nd in the Top 50 Courses in Wales by Golf World.',
    url: 'https://www.royalstdavids.co.uk/',
    imageSrc: '/work/sd-work.jpg',
    bgColor: '#2f3543',
  },
  {
    id: 'wd4',
    title: 'Congo Falls',
    description:
      'Congo Falls Adventure Golf is a spectacular outdoor mini golf course suitable for adults of all ages and families.',
    url: 'https://www.congofalls.co.uk/',
    imageSrc: '/work/cf-work.jpg',
    bgColor: '#29452A',
  },
  {
    id: 'wd5',
    title: 'SPC Group',
    description:
      'Leading global manufacturer of rubber compounds, specialise in technically demanding high quality materials used in seals, gaskets, hoses and more.',
    url: 'https://www.spc-group.com/',
    imageSrc: '/work/spc-work.jpg',
    bgColor: '#002856',
  },
]

export function Work() {
  return (
    <Section id="work" theme="light">
      <Wrapper size="2xl">
        <FadeInScroll>
          <Heading
            heading="Selected Work"
            subheading="© Artworking/Golfworking"
            theme="light"
          />
        </FadeInScroll>
        <div className={styles.grid}>
          {WORK_DATA.map((work, index) => {
            const lastItem = WORK_DATA.length - 1 === index
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
                      url={work.url}
                      imageSrc={work.imageSrc}
                      bgColor={work.bgColor}
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

import { Heading, Link, Wrapper, FadeInScroll } from '@/components'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './SideProjects.module.scss'

const DATA = [
  {
    id: 'i1',
    title: 'URL Shortener',
    description:
      'Integration with API to create shortened URLs and display them on the landing page.',
    links: [
      {
        id: 'l1',
        title: 'Landing page repository',
        url: 'https://github.com/leandrodalmolin/url-shortening-front',
        icon: 'github',
      },
      {
        id: 'l2',
        title: 'Serverless API repository',
        url: 'https://github.com/leandrodalmolin/url-shortening-server',
        icon: 'github',
      },
      {
        id: 'l3',
        title: 'See live demo',
        url: 'https://shrtl.netlify.app',
        icon: 'external',
      },
    ],
  },
  {
    id: 'i2',
    title: 'Personal Website',
    description:
      'Feature some of my work, side projects and a little about me. Built with React, Tailwind CSS and Vite.',
    links: [
      {
        id: 'l4',
        title: 'Repository',
        url: 'https://github.com/leandrodalmolin/react-portfolio',
        icon: 'github',
      },
    ],
  },
]

export function SideProjects() {
  const renderIcon = (icon: string) => {
    if (icon === 'github') return <FaGithub size={12} />
    return <FaExternalLinkAlt size={12} />
  }

  return (
    <Wrapper size="lg">
      <FadeInScroll>
        <div className={styles.header}>
          <Heading heading="Side Projects" subheading="Pinned from GitHub" />
        </div>
      </FadeInScroll>
      <FadeInScroll>
        <ul className={styles.grid}>
          {DATA.map((item) => (
            <li key={item.id} className={styles.item}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <ul>
                {item.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} target="_blank">
                      {renderIcon(link.icon)}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </FadeInScroll>
    </Wrapper>
  )
}

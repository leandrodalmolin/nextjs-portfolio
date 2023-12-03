import { Heading, Link, Wrapper, FadeInScroll, Section } from '@/components'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './SideProjects.module.scss'
import { ISideProjects } from './SideProjects'
import { TProjectLinkIcon } from '@/api'

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

export function SideProjects({ projects }: ISideProjects) {
  if (!projects) return null

  const renderIcon = (icon: TProjectLinkIcon) => {
    if (icon === 'Github') return <FaGithub size={12} />
    return <FaExternalLinkAlt size={12} />
  }

  return (
    <Section id="projects">
      <Wrapper size="lg">
        <FadeInScroll>
          <Heading heading="Side Projects" subheading="Pinned from GitHub" />
        </FadeInScroll>
        <FadeInScroll>
          <ul className={styles.grid}>
            {projects.map((item) => (
              <li key={item.id} className={styles.item}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ul>
                  {item.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} target="_blank">
                        {link.icon && renderIcon(link.icon)}
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  )
}

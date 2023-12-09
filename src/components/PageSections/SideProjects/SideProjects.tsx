import { Heading, Link, Wrapper, FadeInScroll, Section } from '@/components'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './SideProjects.module.scss'
import { ISideProjects } from './SideProjects.types'
import { TProjectLinkIcon } from '@/api'

export function SideProjects({ anchor, headline, projects }: ISideProjects) {
  if (!projects) return null

  const renderIcon = (icon: TProjectLinkIcon) => {
    if (icon === 'Github') return <FaGithub size={12} />
    return <FaExternalLinkAlt size={12} />
  }

  return (
    <Section id={anchor}>
      <Wrapper size="lg">
        <FadeInScroll>
          <Heading
            heading={headline.heading}
            subheading={headline.subheading}
          />
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

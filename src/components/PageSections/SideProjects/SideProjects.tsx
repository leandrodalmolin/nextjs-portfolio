import { Link, Wrapper, FadeInScroll, Section } from '@/components'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './SideProjects.module.scss'
import { ISideProjects } from './SideProjects.types'
import { TProjectLinkIcon } from '@/api'

export function SideProjects({ target, headline, projects }: ISideProjects) {
  if (!projects) return null

  const renderIcon = (icon: TProjectLinkIcon) => {
    if (icon === 'Github') return <FaGithub size={12} />
    return <FaExternalLinkAlt size={12} />
  }

  return (
    <Section
      id={target}
      headline={headline}
      tabIndex={0}
      aria-label="Side projects section"
    >
      <Wrapper size="lg">
        <FadeInScroll>
          <ul className={styles.grid}>
            {projects.map((item) => (
              <li key={item.id} className={styles.item}>
                <h3>{item.title}</h3>
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

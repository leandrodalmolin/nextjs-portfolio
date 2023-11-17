import { LinkScroll } from '@/components'
import { IMenu } from './Menu.types'

export function Menu({ onLinkClick, ...rest }: IMenu) {
  return (
    <ul {...rest}>
      <li>
        <LinkScroll to="home" href="#home" onClick={onLinkClick}>
          Home
        </LinkScroll>
      </li>
      <li>
        <LinkScroll to="work" href="#work" onClick={onLinkClick}>
          Work
        </LinkScroll>
      </li>
      <li>
        <LinkScroll to="projects" href="#projects" onClick={onLinkClick}>
          Projects
        </LinkScroll>
      </li>
      <li>
        <LinkScroll to="tech" href="#tech" onClick={onLinkClick}>
          Skill Set
        </LinkScroll>
      </li>
      <li>
        <LinkScroll to="about" href="#about" onClick={onLinkClick}>
          About
        </LinkScroll>
      </li>
    </ul>
  )
}

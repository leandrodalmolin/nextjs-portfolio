import { LinkScroll } from '@/components'
import { IMenu } from './Menu.types'

export function Menu({ items, onLinkClick, ...rest }: IMenu) {
  return (
    <ul {...rest}>
      {items.map((item) => {
        return (
          <li key={item.target}>
            <LinkScroll
              to={item.target}
              href={`#${item.target}`}
              onClick={onLinkClick}
            >
              {item.text}
            </LinkScroll>
          </li>
        )
      })}
    </ul>
  )
}

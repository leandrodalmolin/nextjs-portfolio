import cn from 'classnames'
import styles from './Link.module.scss'
import { ILink } from './Link.types'

export function Link({ variant = 'default', children, ...rest }: ILink) {
  const classes = cn(styles.link, {
    [styles['link--border']]: variant === 'border',
  })
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}

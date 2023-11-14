import { IWrapper } from './Wrapper.types'
import styles from './Wrapper.module.scss'
import classNames from 'classnames'

export function Wrapper({ size = 'sm', children, ...rest }: IWrapper) {
  const classes = classNames(styles.wrapper, styles[`wrapper--${size}`])
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

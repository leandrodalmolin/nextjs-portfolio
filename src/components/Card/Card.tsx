import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from '@/components'
import { ICard } from './Card.types'
import styles from './Card.module.scss'
import Image from 'next/image'

export function Card({ title, description, url, imageSrc, bgColor }: ICard) {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <p>{description}</p>
        <p>
          <Link href={url} target="_blank" rel="nofollow noreferrer noopener">
            Visit Website
            <FaLongArrowAltRight />
          </Link>
        </p>
      </div>
      <div className={styles.image}>
        <Image src={imageSrc} alt={title} width={500} height={500} priority />
      </div>
    </div>
  )
}

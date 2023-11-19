import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from '@/components'
import { ICard } from './Card.types'
import styles from './Card.module.scss'
import Image from 'next/image'

export function Card({ title, description, url, imageSrc, bgColor }: ICard) {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.copy}>
        <p>{description}</p>
        <Link href={url} target="_blank" rel="nofollow noreferrer noopener">
          Visit Website
          <FaLongArrowAltRight />
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={imageSrc} alt={title} width={500} height={500} priority />
      </div>
    </div>
  )
}

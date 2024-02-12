import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

export function useScrollStatus(threshold = 300) {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolling(window.scrollY > threshold)
    }, 300)

    handleScroll() // Guarantee right status on component mount
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return {
    isScrolling,
  }
}

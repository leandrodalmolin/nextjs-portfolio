import { useEffect, useState } from 'react'

export function useScrollStatus(threshold = 300) {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > threshold)

    handleScroll() // Guarantee right status on component mount
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return {
    isScrolling,
  }
}

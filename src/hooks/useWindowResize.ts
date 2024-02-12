import { useEffect } from 'react'
import debounce from 'lodash.debounce'

interface IScreenSize {
  minWidth?: number
  maxWidth?: number
}

export function useWindowResize(callback: () => void, screenSize: IScreenSize) {
  const { minWidth, maxWidth } = screenSize
  useEffect(() => {
    const handleResize = debounce(() => {
      if (
        (maxWidth && window.innerWidth < maxWidth) ||
        (minWidth && window.innerWidth > minWidth)
      ) {
        callback()
      }
    }, 300)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [callback, maxWidth, minWidth])
}

import { useEffect, useRef, useState } from 'react'

export const useStickyHeader = () => {
  const [sticky, setSticky] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect()
    const handleScrollEvent = () => {
      handleScroll(header?.top as number, header?.height as number)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return { headerRef, sticky }
}

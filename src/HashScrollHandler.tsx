import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { attachAnchorHandler, scrollToHash } from './utils/scroll'

export default function HashScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    // On hash change or initial mount with hash
    if (location.hash) {
      // Slight delay to ensure content is rendered
      const t = setTimeout(() => scrollToHash(location.hash), 0)
      return () => clearTimeout(t)
    }
  }, [location.hash])

  useEffect(() => {
    // Intercept in-page anchor clicks (href="#...")
    const detach = attachAnchorHandler()
    return detach
  }, [])

  return null
}
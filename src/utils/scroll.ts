export function scrollToHash(hash: string) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  const header = document.querySelector('header') as HTMLElement | null
  const offset = header?.offsetHeight ?? 0
  const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
  window.scrollTo({ top, behavior: 'smooth' })
}

export function attachAnchorHandler() {
  const handler = (e: Event) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a') as HTMLAnchorElement | null
    if (!anchor) return
    const href = anchor.getAttribute('href') || ''
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToHash(href)
      history.replaceState(null, '', href)
    }
  }
  document.addEventListener('click', handler)
  return () => document.removeEventListener('click', handler)
}
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://bakuiscalling.com'
const GA_MEASUREMENT_ID = 'G-V1X23X9XR8'

export default function Canonical() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Normalise: strip trailing slash except for the homepage
    const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'
    const href = `${SITE_URL}${path}`

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = href

    let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.content = href

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: href,
        page_path: path,
        page_title: document.title,
        send_to: GA_MEASUREMENT_ID,
      })
    }
  }, [pathname])

  return null
}
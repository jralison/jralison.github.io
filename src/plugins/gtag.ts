const gtagEnabled: boolean = ((import.meta.env.VITE_GTAG_ENABLED || 'false').toLowerCase() === 'true')
const gtagPropertyId: string = import.meta.env.VITE_GTAG_ID || ''

const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${gtagPropertyId}`
const gtagScriptId = 'gtagJsManager'

export function useGTag (): void {
  if (!gtagEnabled) {
    return
  }

  if (document.getElementById(gtagScriptId) !== null) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = () => window.dataLayer.push(arguments)

  window.gtag('js', new Date())
  window.gtag('config', gtagPropertyId)

  const script = document.createElement('script')
  script.async = true
  script.src = gtagUrl
  document.head.appendChild(script)
}

declare global {
  interface Window {
    dataLayer: any
    gtag: (...args: any) => void
  }
}

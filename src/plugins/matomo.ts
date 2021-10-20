import { onBeforeMount } from 'vue'

const matomoScriptId: string = import.meta.env.VITE_MATOMO_SCRIPT_ID || 'matomoAnalytics'

const matomoEnabled: boolean = (import.meta.env.VITE_MATOMO_ENABLED || 'false').toLowerCase() === 'true'
const matomoHost: string = import.meta.env.VITE_MATOMO_HOST || ''
const matomoSiteId: string = import.meta.env.VITE_MATOMO_SITE_ID || ''

const debug = (msg: string) => {
  if (!import.meta.env.DEV) return
  window.console.log(msg)
}

export function useMatomo (): void {
  debug('Usando matomo...')
  onBeforeMount(() => {
    if (!matomoEnabled) {
      debug('Matomo não está habilitado.')
      return
    }

    if (document.getElementById(matomoScriptId) !== null) {
      debug('Matomo já está presente na página.')
      return
    }

    debug('Configurando o matomo...')

    window._paq = window._paq || []
    window._paq.push(
      ['trackPageView'],
      ['enableLinkTracking'],
      ['setTrackerUrl', `//${matomoHost}/matomo.php`],
      ['setSiteId', matomoSiteId],
    )

    const s = document.createElement('script')
    s.id = matomoScriptId
    s.type = 'text/javascript'
    s.async = true
    s.defer = true
    s.src = `//${matomoHost}/matomo.js`
    document.body.appendChild(s)
    debug('Matomo inserido na página.')
  })
}

declare global {
  interface Window {
    _paq: any
  }
}

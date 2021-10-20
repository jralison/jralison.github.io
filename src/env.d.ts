/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_MATOMO_SITE_ID: string
  readonly VITE_MATOMO_HOST: string
  readonly VITE_MATOMO_SCRIPT_ID: string
  readonly VITE_MATOMO_ENABLED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

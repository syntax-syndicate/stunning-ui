// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'Create stunning websites that are visually appealing',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }]
    }
  },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  content: {
    highlight: {
      theme: 'vitesse-dark'
    }
  },
  components: {
    global: true,
    dirs: ['@/components']
  },
  build: {
    transpile: ['vue-sonner']
  },
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ]
  }
})

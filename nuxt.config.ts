// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title:
        'Stunning UI is a collection of interactive Tailwind CSS components built for Vue.js/React.',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }],
      script: [
        // {
        //   defer: true,
        //   src: 'https://widget.senja.io/embed/frame.js'
        // },
        // {
        //   defer: true,
        //   src: 'https://cdn.paritydeals.com/banner.js'
        // },
        {
          defer: true,
          'data-domain': 'stunningui.design',
          src: 'https://plausible.io/js/script.js'
        }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-icon'
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
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark'
      }
    }
  },
  components: {
    global: true,
    dirs: ['@/components']
  },
  build: {
    transpile: ['vue-sonner']
  }
})

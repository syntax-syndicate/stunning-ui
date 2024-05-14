// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'text-primary': 'text-neutral-900 dark:text-neutral-50',
      'text-secondary': 'text-neutral-800 dark:text-neutral-200/48',
      'text-neon':
        'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 dark:to-emerald-300',
      'text-neon-wb':
        'text-transparent bg-clip-text bg-gradient-to-b from-white  to-neutral-800',
      'text-neon-p':
        'text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 via-60%  via-neutral-400 to-neutral-600'
    }
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()]
})

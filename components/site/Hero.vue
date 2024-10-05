<template>
  <TyndallEffect
    class="min-h-[80vh]"
    :showOverlay="isDark"
    :streak-color="isDark ? '#fff' : '#f4a'"
  >
    <div
      class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
    >
      <div
        class="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <ShimmerText
          class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
        >
          ✨ Stunning UI Beta
          <Icon
            name="ri:arrow-right-line"
            class="w-4 h-4 ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </ShimmerText>
      </div>

      <h1
        class="mt-8 bg-gradient-to-br from-neutral-900/90 via-neutral-700 to-neutral-500 dark:from-stone-200/90 dark:via-stone-50 dark:to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Create Stunning Websites <br />
        That Stand Out
      </h1>

      <p class="text-neutral-500 dark:text-neutral-400 text-xl mt-4">
        Stunning UI is a collection of interactive Tailwind CSS components built
        for Vue and Nuxt.
      </p>

      <GlassBorderButton class="z-10 mt-12" @click="navigateTo('/components')">
        Browse components
      </GlassBorderButton>

      <div class="stacks grid grid-cols-3 sm:grid-cols-6 gap-8 mt-24">
        <template v-for="item in frameworkList">
          <div
            class="group relative flex items-center gap-2 text-muted-foreground"
          >
            <Icon
              :name="item.icon"
              class="w-8 h-8 grayscale group-hover:grayscale-0"
            />
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-neutral-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-neutral-100 dark:text-neutral-900"
            >
              <div class="text-sm font-semibold">{{ item.name }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <template #particles>
      <ParticlesEffect
        :density="256"
        :size="1.5"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
      />
    </template>
  </TyndallEffect>
</template>

<script lang="ts" setup>
import TyndallEffect from '~/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '~/components/stunning/ParticlesEffect/Slim.vue'
import GlassBorderButton from '~/components/stunning/GlassBorderButton.vue'
import ShimmerText from '~/components/stunning/ShimmerText.vue'

import { useDarkmode } from '@/composables/useDarkmode'

const { isDark } = useDarkmode()

const frameworkList = [
  {
    name: 'Nuxt 3',
    icon: 'logos:nuxt-icon'
  },
  {
    name: 'Vue 3',
    icon: 'logos:vue'
  },
  {
    name: 'VueUse',
    icon: 'logos:vueuse'
  },
  {
    name: 'Shadcn Vue',
    icon: 'simple-icons:shadcnui'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon'
  },
  {
    name: 'GSAP',
    icon: 'logos:greensock-icon'
  }
]
</script>

<style scoped></style>

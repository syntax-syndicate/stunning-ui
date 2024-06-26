<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main class="container mx-auto max-w-screen-2xl flex-center flex-col mt-40">
      <h1
        class="text-6xl font-semibold text-center"
        :class="isDark ? 'text-neon-wb' : 'text-neon'"
      >
        <p>Create Stunning Websites</p>
        <p>That Stand Out</p>
      </h1>

      <p class="text-neutral-500 dark:text-neutral-400 text-xl mt-4">
        Stunning UI is a collection of interactive Tailwind CSS components built
        for Vue.js/React.
      </p>

      <div class="mt-8 flex items-center gap-8">
        <Button @click="navigateTo('/components')"> Browse Components </Button>
        <Button variant="outline"> Getting Started </Button>
      </div>

      <div class="stacks grid grid-cols-5 gap-8 mt-8">
        <div class="flex items-center gap-2 text-muted-foreground">
          <Icon name="simple-icons:nuxtdotjs" class="w-8 h-8" />
          <!-- <span>Nuxt 3</span> -->
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <Icon name="simple-icons:vuedotjs" class="w-8 h-8" />
          <!-- <span>Vue 3</span> -->
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <svg
            class="h-6 w-6"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_102_1338)">
              <path
                d="M208 128L128 208"
                stroke="currentColor"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M192 40L40 192"
                stroke="currentColor"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_102_1338">
                <rect width="256" height="256" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <!-- <span>Shadcn Vue</span> -->
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <Icon name="simple-icons:tailwindcss" class="w-8 h-8" />
          <!-- <span>TailwindCSS</span> -->
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <Icon name="simple-icons:greensock" class="w-8 h-8" />
          <!-- <span>GSAP</span> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'

const { isDark } = useDarkmode()
</script>

<style></style>

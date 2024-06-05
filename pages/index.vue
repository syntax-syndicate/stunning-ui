<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main class="container mx-auto max-w-screen-2xl flex-center flex-col mt-40">
      <h1 class="text-5xl font-semibold text-neon-p">
        Create Stunning Websites That Stand Out
      </h1>

      <p class="text-neutral-500 dark:text-neutral-400 text-xl mt-4">
        Stunning UI is a collection of interactive Tailwind CSS components built
        for Vue.js.
      </p>

      <div class="mt-8">
        <Button @click="navigateTo('/components')"> Browse Components </Button>
        <Button variant="ghost"> Getting Started </Button>
      </div>

      <div class="stacks grid grid-cols-5 gap-8 mt-16">
        <div class="flex items-center gap-2 text-muted-foreground">
          <simple-icons:nuxtdotjs class="w-8 h-8" />
          <span>Nuxt 3</span>
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <simple-icons:vuedotjs class="w-8 h-8" />
          <span>Vue 3</span>
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <simple-icons:vuedotjs class="w-8 h-8" />
          <span>Shadcn Vue</span>
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <simple-icons:tailwindcss class="w-8 h-8" />
          <span>TailwindCSS</span>
        </div>
        <div class="flex items-center gap-2 text-muted-foreground">
          <simple-icons:greensock class="w-8 h-8" />
          <span>GSAP</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
</script>

<style></style>

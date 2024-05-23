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
        <Button @click="navigateTo('/components')"> Browser Components </Button>
        <Button variant="ghost"> Getting Started </Button>
      </div>

      <div class="stacks grid grid-cols-4 gap-8 mt-16">
        <simple-icons:nuxtdotjs class="w-10 h-10" />
        <simple-icons:vuedotjs class="w-10 h-10" />
        <simple-icons:tailwindcss class="w-10 h-10" />
        <simple-icons:greensock class="w-10 h-10" />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
</script>

<style></style>

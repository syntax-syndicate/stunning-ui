<template>
  <div class="bg-neutral-950 w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>
    <main class="container mx-auto max-w-screen-xl flex-center flex-col mt-40">
      <h1 class="text-black dark:text-white text-5xl">
        Create stunning websites
      </h1>
      <h1 class="text-black dark:text-white text-5xl">
        that are visually appealing
      </h1>

      <p class="text-neutral-500 dark:text-neutral-400 text-xl mt-4">
        Stunning UI is a collection of interactive Tailwind CSS components built
        for React and Vue.js.
      </p>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'
</script>

<style></style>

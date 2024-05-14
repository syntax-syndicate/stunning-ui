<template>
  <header class="container flex h-16 items-center max-w-screen-xl mx-auto">
    <div class="mr-4 hidden md:flex">
      <a
        class="flex items-center justify-center space-x-3 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
        href="/"
      >
        <div
          class="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-neutral-800 text-white flex items-center justify-center rounded-md text-sm antialiased"
        >
          <div
            class="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"
          ></div>
          <div class="text-sm text-emerald-500 relative z-20">
            <Logo class="w-7 h-7" />
          </div>
        </div>
        <div class="flex flex-col">
          <h1 class="text-black dark:text-white">Stunning UI</h1>
        </div>
      </a>
    </div>
    <a
      class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      type="button"
      href="/"
      ><div
        class="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-neutral-800 text-white flex items-center justify-center rounded-md text-sm antialiased"
      >
        <div
          class="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"
        ></div>
        <div class="text-sm text-emerald-500 relative z-20"></div></div
    ></a>
    <nav class="flex items-center space-x-6 text-sm font-medium xl:flex">
      <a
        class="transition-colors hover:text-foreground/80 text-white/60 hidden sm:block"
        href="/components"
        >Components</a
      ><a
        class="transition-colors hover:text-foreground/80 text-white/60"
        href="/pricing"
        >Pricing</a
      >
    </nav>
    <div
      class="flex flex-1 items-center justify-end gap-2 sm:gap-4 md:justify-end"
    >
      <NuxtLink href="https://twitter.com/robert_shaw_x" target="_blank">
        <ri:twitter-x-line
          class="w-4 h-4 dark:text-white/60 hover:text-white"
        />
      </NuxtLink>
      <GlowButton />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'

toggleDark(true)
</script>

<style scoped></style>

<template>
  <main class="w-screen h-screen bg-dots">
    <LandingBanner
      :class="
        cn(
          'dark:bg-neutral-950 bg-neutral-50 border-b border-neutral-100/50 dark:border-neutral-900/90',
          'dark:hover:bg-neutral-900 hover:bg-white',
          'before:content-normal before:absolute before:w-2/5 before:h-full before:bg-gradient-radial before:from-emerald-300 before:dark:from-emerald-700 before:to-transparent before:scale-150 before:top-[-50%] before:animate-pulse before:duration-[10000ms] before:z-[-1]'
        )
      "
    >
      <div>
        Stunning UI 1.0 is here. Create stunning website that stand out!
      </div>
      <div>
        <Button size="xs" class="gap-2">
          <Icon name="ri:sparkling-2-line" />
          <span>Getting Started</span>
        </Button>
      </div>
    </LandingBanner>
  </main>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>

<style scoped></style>

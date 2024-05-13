<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
</script>

<style>
html,
body {
  @apply bg-neutral-950 text-primary;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>

<template>
  <div
    ref="scrollRef"
    class="max-w-screen-lg min-h-[100vh] items-center flex justify-center relative"
  >
    <slot :isActive="targetIsVisible" ref="contentRef" />
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const scrollRef = ref(null)

const targetIsVisible = useElementVisibility(scrollRef)

useSmoothScroll()
</script>

<style scoped>
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

<template>
  <div
    ref="scrollRef"
    class="max-w-screen-lg min-h-[100vh] items-center flex justify-center relative"
  >
    <slot :isVisible="targetIsVisible" ref="contentRef" />
  </div>
</template>

<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const scrollRef = ref(null)

useSmoothScroll()

const targetIsVisible = useElementVisibility(scrollRef)
</script>

<style scoped></style>

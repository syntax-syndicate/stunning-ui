<template>
  <main class="w-screen h-screen bg-neutral-900">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-primary dark:text-white"
      >
        Morphing Gradient
      </p>
    </div>
    <MorphingGradient class="bg-background" />
  </main>
</template>

<script lang="ts" setup>
import MorphingGradient from '~/components/stunning/MorphingGradient.vue'
</script>

<style scoped></style>

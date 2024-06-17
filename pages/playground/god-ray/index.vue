<template>
  <main class="w-screen h-screen">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-primary-foreground dark:text-white"
      >
        God Ray
      </p>
    </div>
    <GodRay />
  </main>
</template>

<script lang="ts" setup>
import GodRay from '@/components/stunning/GodRay.vue'
</script>

<style scoped></style>

<template>
  <main class="w-screen h-screen bg-neutral-900">
    <div class="absolute flex h-full w-full items-center justify-center">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-primary-foreground dark:text-white"
      >
        Rising Stars
      </p>
    </div>
    <RisingStars class="from-neutral-950 to-neutral-900" />
  </main>
</template>

<script lang="ts" setup>
import RisingStars from '@/components/stunning/RisingStars.vue'
</script>

<style scoped></style>

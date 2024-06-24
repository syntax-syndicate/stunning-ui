<template>
  <main class="w-screen h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section A
      </span>
    </div>

    <GlowyDivider showBuckle direction="bottom" class="lg:px-24" />

    <div class="flex flex-col md:items-center">
      <span class="font-mono text-sm tracking-tight text-neon">
        Section B
      </span>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlowyDivider from '@/components/stunning/GlowyDivider.vue'
</script>

<style scoped></style>

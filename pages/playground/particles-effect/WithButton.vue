<template>
  <main
    class="w-screen h-screen flex flex-col bg-gradient-to-b from-emerald-950 to-emerald-700"
  >
    <div
      class="absolute top-32 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
    >
      <Badge> New Version 1.0 </Badge>

      <h1
        class="mt-8 bg-gradient-to-br from-emerald-300/90 via-emerald-50 to-emerald-300/90 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Stunning UI is a better way <br />
        to build websites
      </h1>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 bottom-48">
      <GlassBorderButton
        class="z-10 w-40"
        @click="navigateTo('/components/glass-border-button')"
      >
        Start for free
      </GlassBorderButton>
    </div>
  </main>
</template>

<script lang="ts" setup>
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>

<template>
  <main
    class="w-screen h-screen bg-gradient-to-b from-emerald-950 to-emerald-500 dark:from-neutral-950 dark:to-neutral-800 flex justify-center items-center"
  >
    <GlassBorderButton class="z-10"> Start for free </GlassBorderButton>
    <ParticlesStarEffect
      :density="32"
      class="absolute z-0 inset-x-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[160px] w-[160px] [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
    />
  </main>
</template>

<script lang="ts" setup>
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
import ParticlesStarEffect from '@/components/stunning/ParticlesStarEffect.vue'
</script>

<style scoped></style>

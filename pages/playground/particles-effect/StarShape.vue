<template>
  <div class="h-screen w-screen overflow-hidden bg-black">
    <div
      class="relative z-0 h-screen w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
    >
      <ParticlesStarEffect
        :density="1200"
        class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />
    </div>
  </div>
</template>

<script setup>
import ParticlesStarEffect from '@/components/stunning/ParticlesEffect/Star.vue'
</script>

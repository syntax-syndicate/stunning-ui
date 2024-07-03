<template>
  <div class="relative h-screen w-screen overflow-hidden bg-black">
    <div
      class="h-screen w-screen absolute left-0 top-0 flex items-center justify-center"
    >
      <p
        className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Particles Effect With Star Shape
      </p>
    </div>
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

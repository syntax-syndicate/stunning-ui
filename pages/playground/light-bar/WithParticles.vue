<template>
  <main class="w-full h-full relative">
    <LightBar />
    <ParticlesEffect
      :density="1200"
      class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
    />
    <div
      class="absolute bottom-32 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
    >
      <p
        class="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50"
      >
        New Version 2.0
      </p>

      <h1
        class="mt-8 bg-gradient-to-br from-white via-emerald-50 to-emerald-500/50 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Stunning UI is a better way <br />
        to build websites
      </h1>
    </div>
  </main>
</template>

<script lang="ts" setup>
import LightBar from '@/components/stunning/LightBar.vue'
import ParticlesEffect from '@/components/stunning/ParticlesEffect.vue'
</script>

<style scoped></style>

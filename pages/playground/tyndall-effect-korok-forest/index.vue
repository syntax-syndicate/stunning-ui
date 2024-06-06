<template>
  <main class="w-full h-full">
    <TyndallEffect
      :style="{
        '--sui-tyndall-effect-bg-first-color': '#34d399',
        '--sui-tyndall-effect-bg-second-color': '#065f46',
        '--sui-tyndall-effect-bg-third-color': '#1665342e',
        '--sui-tyndall-effect-bg-fourth-color': 'rgb(0, 0, 0)',
        '--sui-tyndall-effect-streak-color': '#99f6e4'
      }"
    >
      <div
        class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
      >
        <p
          class="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50"
        >
          New Version 1.0
        </p>

        <h1
          class="mt-8 bg-gradient-to-br from-teal-200/90 via-teal-50 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import TyndallEffect from '@/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '@/components/stunning/ParticlesEffect.vue'
</script>

<style scoped></style>

<template>
  <main class="w-full h-full bg-black">
    <TyndallEffect>
      <div
        class="absolute top-48 left-1/2 -translate-x-1/2 transform w-full flex flex-col items-center px-5"
      >
        <Badge>New Version 1.0</Badge>

        <h1
          class="mt-8 bg-gradient-to-br from-sky-200/90 via-sky-50 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Stunning UI is a better way <br />
          to build websites
        </h1>

        <GlassBorderButton class="z-10 w-40 mt-12">
          Start for free
        </GlassBorderButton>
      </div>
      <template #particles>
        <ParticlesEffect
          :density="256"
          :size="1.5"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] z-10"
        />
      </template>
    </TyndallEffect>
  </main>
</template>

<script lang="ts" setup>
import TyndallEffect from '@/components/stunning/TyndallEffect.vue'
import ParticlesEffect from '@/components/stunning/ParticlesEffect/Slim.vue'
import GlassBorderButton from '@/components/stunning/GlassBorderButton.vue'
</script>

<style scoped></style>

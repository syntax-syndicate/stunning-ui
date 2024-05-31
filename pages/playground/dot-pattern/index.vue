<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
      >
        <p
          className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
        >
          Dot Pattern
        </p>
        <DotPattern
          :width="20"
          :height="20"
          :cx="1"
          :cy="1"
          :cr="1"
          class="fill-neutral-400/80 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        />
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import DotPattern from '@/components/stunning/DotPattern.vue'
</script>

<style scoped></style>

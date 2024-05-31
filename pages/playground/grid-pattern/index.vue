<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex flex-col justify-center items-center px-8">
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
      >
        <p
          className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
        >
          Grid Pattern
        </p>
        <GridPattern
          :width="20"
          :height="20"
          :x="-1"
          :y="-1"
          class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        />
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GridPattern from '~/components/stunning/GridPattern.vue'
</script>

<style scoped></style>

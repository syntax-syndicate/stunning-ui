<template>
  <NuxtLayout name="playground">
    <main class="w-full h-full flex justify-center items-center gap-8">
      <GradientBorderButton> Click me </GradientBorderButton>
      <GradientBorderButton
        gradientColor="from-violet-700 via-indigo-500 to-violet-300"
      >
        Click me
      </GradientBorderButton>
      <GradientBorderButton
        gradientColor="from-purple-700 via-red-500 to-amber-400"
      >
        Click me
      </GradientBorderButton>
      <GradientBorderButton
        gradientColor="from-pink-300 via-purple-300 to-indigo-400"
      >
        Click me
      </GradientBorderButton>
      <GradientBorderButton
        gradientColor="from-sky-400 via-rose-400 to-lime-400"
      >
        Click me
      </GradientBorderButton>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GradientBorderButton from '@/components/stunning/GradientBorderButton.vue'
</script>

<style scoped></style>

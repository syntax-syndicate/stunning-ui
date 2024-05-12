<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Morphing Gradient Animation</h1>
        <p class="text-secondary">
          An elegant animation with a shifting background gradient.
        </p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-240 rounded-2xl overflow-hidden"
        >
          <AnimationsMorphingGradient />
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

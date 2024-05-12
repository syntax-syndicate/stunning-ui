<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">God Ray</h1>
        <p class="text-secondary">
          Commonly used for the background in the Page header
        </p>
      </header>
      <main class="w-full mt-8">
        <div
          class="border border-neutral-800 relative w-full h-240 rounded-2xl overflow-hidden"
        >
          <GodRay />
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

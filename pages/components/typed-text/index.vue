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
          class="border border-neutral-800 relative w-full h-80 rounded-2xl overflow-hidden"
        >
          <div class="flex-center flex-col h-full text-5xl font-semibold">
            <p class="text-center">
              <span class="text-neon">Stunning UI</span> is designed for
            </p>
            <p>
              <TypedText
                :words="['Designers', 'Devlopers', 'Creators']"
                class="ml-2 text-neon"
                :typeSpeed="75"
              />
            </p>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style scoped></style>

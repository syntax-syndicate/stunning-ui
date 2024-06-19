<template>
  <main class="w-full h-full">
    <h2>Landing Page</h2>
    <GlowyCardWrapper class="grid grid-cols-3 gap-4" :size="320">
      <GlowyCard
        class="rounded-lg p-6 lg:p-4 flex flex-col gap-2"
        @click="navigateTo('/templates/minimal-template')"
      >
        <div
          class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-lg p-3"
        >
          <div
            class="aspect-video rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"
          >
            <ImagePlaceholder />
          </div>
        </div>

        <div class="relative px-4 pb-2 pt-4 line-clamp-2 text-neon-p">
          <h1 class="font-medium text-lg">Minimal Gallery</h1>
          built on top of Vue.js/Shadcn-Vue
        </div>
      </GlowyCard>
    </GlowyCardWrapper>
  </main>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

import ImagePlaceholder from './ImagePlaceholder.vue'
</script>

<style scoped></style>

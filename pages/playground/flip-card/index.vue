<template>
  <main class="w-screen h-screen flex justify-center items-center bg-dots">
    <FlipCard class="w-96 h-72 rounded-lg">
      <template #front>
        <div
          class="h-full p-4 gap-2 flex flex-col rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <div
            class="ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-[8px] p-3"
          >
            <div
              class="aspect-video rounded-[8px] relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
            </div>
          </div>
          <h1 class="font-medium text-xl mt-2">Hover me</h1>
        </div>
      </template>
      <template #back>
        <div
          class="h-full p-4 flex flex-col gap-2 rounded-lg bg-neutral-100/80 dark:bg-neutral-800 border border-white/10 text-foreground"
        >
          <Icon name="ri:vip-crown-line" class="w-8 h-8" />

          <h1 class="font-medium text-2xl">Hover me</h1>

          <p class="text-neon-wb">
            {{ paragraphPlaceholder }}
          </p>
        </div>
      </template>
    </FlipCard>
  </main>
</template>

<script lang="ts" setup>
import FlipCard from '~/components/stunning/FlipCard.vue'

import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

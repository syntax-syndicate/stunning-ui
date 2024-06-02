<template>
  <NuxtLayout name="playground">
    <main class="w-full flex flex-col justify-center items-center h-full px-8">
      <GlowyCardWrapper class="grid grid-cols-12 gap-4">
        <GlowyCard class="col-span-8 rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:magic-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="col-span-4 rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:stack-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="col-span-4 rounded-lg">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:cake-2-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
        <GlowyCard class="col-span-8">
          <div class="rounded p-6 lg:p-8 flex flex-col gap-2">
            <ri:vip-crown-line class="w-8 h-8" />

            <h1 class="font-medium text-2xl">Hover me</h1>

            <p class="line-clamp-4 text-neon-p">
              {{ paragraphPlaceholder }}
            </p>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'
import { paragraphPlaceholder } from '~/lib/constants'
</script>

<style scoped></style>

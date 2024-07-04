<template>
  <main class="w-full h-full">
    <template v-for="group in componentList">
      <h2>{{ group.category }}</h2>
      <GlowyCardWrapper
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
        :size="240"
      >
        <GlowyCard
          class="rounded-lg p-6 lg:p-4 flex flex-col gap-2"
          v-for="item in group.components"
          :href="item.path"
        >
          <template v-if="item.image">
            <img
              :src="item.image"
              class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
            />
            <img
              :src="CommingSoon"
              class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
            />
          </template>
          <div
            class="relative bg-neutral-900/5 dark:bg-white/5 ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-lg p-3"
            v-else
          >
            <div
              class="aspect-video rounded-lg relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white"
              >
                Comming Soon
              </div>
            </div>
          </div>

          <div class="relative pt-2 text-neon-wb">
            <h1 class="font-medium text-lg mb-1">{{ item.name }}</h1>
            <span class="line-clamp-3 text-sm">{{ item.desc }}</span>
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </template>
  </main>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'

import { componentList } from '~/lib/constants'
import ImagePlaceholder from './ImagePlaceholder.vue'
</script>

<style scoped></style>

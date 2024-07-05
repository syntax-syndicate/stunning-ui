<template>
  <main class="w-full h-full">
    <template v-for="group in blockList">
      <h2>{{ group.category }}</h2>
      <GlowyCardWrapper
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        :size="240"
      >
        <GlowyCard
          class="group/card rounded-lg p-4 lg:p-4 flex flex-col gap-2 cursor-pointer"
          v-for="item in group.components"
          @click="navigateTo(item.path)"
        >
          <template v-if="item.image">
            <img
              :src="item.image"
              class="my-0 rounded-lg group-hover/card:scale-[1.02] transition-all duration-200"
            />
          </template>

          <div
            class="bg-neutral-900/5 dark:bg-white/5 ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10 rounded-[8px] p-3"
            v-else
          >
            <div
              class="aspect-video rounded-[8px] relative overflow-hidden border border-dashed border-neutral-900/10 dark:border-white/10"
            >
              <ImagePlaceholder />
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

import { blockList } from '~/lib/constants'
import ImagePlaceholder from './ImagePlaceholder.vue'
</script>

<style scoped></style>

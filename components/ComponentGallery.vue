<template>
  <main class="w-full h-full">
    <template v-for="group in componentList">
      <h2>{{ group.category }}</h2>
      <GlowyCardWrapper class="grid grid-cols-2 gap-4" :size="320">
        <GlowyCard
          class="rounded-lg p-6 lg:p-4 flex flex-col gap-2"
          v-for="item in group.components"
          :href="item.path"
        >
          <div
            class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-2xl p-3"
          >
            <div
              class="aspect-video rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
                fill="none"
              >
                <defs>
                  <pattern
                    id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                  </pattern>
                </defs>
                <rect
                  stroke="none"
                  fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
                  width="100%"
                  height="100%"
                ></rect>
              </svg>
            </div>
          </div>

          <div class="relative px-4 pb-2 pt-4 line-clamp-2 text-neon-p">
            <h1 class="font-medium text-lg">{{ item.name }}</h1>
            {{ item.desc }}
          </div>
        </GlowyCard>
      </GlowyCardWrapper>
    </template>
  </main>
</template>

<script lang="ts" setup>
import GlowyCardWrapper from '~/components/stunning/GlowyCard/GlowyCardWrapper.vue'
import GlowyCard from '~/components/stunning/GlowyCard/GlowyCard.vue'
import { paragraphPlaceholder } from '~/lib/constants'

import { componentList } from '~/lib/constants'
</script>

<style scoped></style>

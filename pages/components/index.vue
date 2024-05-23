<template>
  <NuxtLayout name="component">
    <header class="flex flex-col gap-2">
      <h1 class="text-3xl">Components are building Blocks</h1>
      <h2 class="text-secondary-foreground">
        Boost your website development with our top Vue.js/React.js components,
        designed to enhance your stunning websites.
      </h2>
    </header>
    <main class="pb-32">
      <template v-for="group in componentList">
        <figcaption class="text-2xl font-semibold mt-16">
          {{ group.category }}
        </figcaption>
        <figure class="grid grid-cols-2 gap-4 mt-4">
          <template v-for="(item, index) in group.components">
            <div
              class="preview-card flex flex-col items-center flex-wrap p-1 relative justify-center rounded-xl bg-neutral-900"
            >
              <div>
                <img
                  v-if="index === 0"
                  :src="Demo1"
                  class="aspect-ratio-video"
                />
                <img
                  v-if="index === 1"
                  :src="Demo2"
                  class="aspect-ratio-video"
                />
                <img
                  v-if="index === 2"
                  :src="Demo3"
                  class="aspect-ratio-video"
                />
                <img
                  v-if="index === 3"
                  :src="Demo4"
                  class="aspect-ratio-video"
                />
                <img
                  v-if="index === 4"
                  :src="Demo5"
                  class="aspect-ratio-video"
                />
                <img
                  v-if="index === 5"
                  :src="Demo6"
                  class="aspect-ratio-video"
                />
              </div>
              <div
                class="group h-12 w-full flex justify-between items-center px-3"
              >
                <div>{{ item.name }}</div>
                <NuxtLink :href="item.path">
                  <ri:arrow-right-line class="group-hover:scale-110" />
                </NuxtLink>
              </div>
            </div>
          </template>
        </figure>
      </template>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { componentList } from '@/lib/constants'

import Demo1 from '@/assets/images/001.gif'
import Demo2 from '@/assets/images/002.gif'
import Demo3 from '@/assets/images/003.gif'
import Demo4 from '@/assets/images/004.gif'
import Demo5 from '@/assets/images/005.gif'
import Demo6 from '@/assets/images/006.gif'
</script>

<style scoped></style>

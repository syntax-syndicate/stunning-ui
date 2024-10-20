<template>
  <main class="w-full h-full">
    <template v-for="group in componentList">
      <h2>{{ group.category }}</h2>
      <GlowyCardWrapper
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4"
        :size="240"
      >
        <GlowyCard
          class="rounded-lg p-6 lg:p-4 flex flex-col gap-2 cursor-pointer"
          v-for="item in group.components"
          @click="navigateTo(item.path)"
        >
          <div class="relative pt-2 text-neon-wb">
            <h1 class="font-medium text-lg mb-1">{{ item.name }}</h1>
            <span class="line-clamp-3 text-sm">{{
              item.desc || 'Upcoming'
            }}</span>
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
</script>

<style scoped></style>

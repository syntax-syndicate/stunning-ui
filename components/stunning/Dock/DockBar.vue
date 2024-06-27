<template>
  <div class="relative">
    <!-- {/* Dock background */} -->
    <div
      class="absolute bottom-0 left-0 right-0 h-[80px] max-w-full rounded-[22px] border border-gray-600/60 bg-gray-800/60"
    />
    <!-- {/* Scrollable container */} -->
    <ScrollArea>
      <div class="overflow-hidden max-w-full">
        <div
          class="fade-lr relative flex max-w-full flex-1 overflow-x-auto pt-4"
        >
          <template v-for="app in appList" :key="app.name">
            <DockItem :app="app" />
          </template>
        </div>
      </div>

      <ScrollBar orientation="vertical"> </ScrollBar>
      <ScrollBar orientation="horizontal"> </ScrollBar>
    </ScrollArea>
  </div>
</template>

<script lang="ts" setup>
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area'
import DockItem from './DockItem.vue'
import type { App } from './DockItem.vue'

withDefaults(
  defineProps<{
    appList: App[]
  }>(),
  {
    appList: () => [
      {
        name: '',
        iconUrl: ''
      }
    ]
  }
)
</script>

<style scoped></style>

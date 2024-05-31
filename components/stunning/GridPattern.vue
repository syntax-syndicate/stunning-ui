<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30 stroke-neutral-400/30"
    v-bind="$attrs"
  >
    <defs>
      <pattern
        :id="id"
        :height="height"
        :width="width"
        patternUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <path
          :d="`M.5 ${height}V.5H${width}`"
          fill="none"
          :stroke-dasharray="strokeDasharray"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width="0" :fill="`url(#${id})`" />
    <template v-if="squares" v-for="([x, y], idx) in squares">
      <svg :x="x" :y="y" className="overflow-visible">
        <rect
          stroke-width="0"
          :key="`${x}-${y}`"
          :width="width - 1"
          :height="height - 1"
          :x="x * width + 1"
          :y="y * height + 1"
        />
      </svg>
    </template>
  </svg>
</template>

<script lang="ts" setup>
import { randomId } from '@/lib/utils'

withDefaults(
  defineProps<{
    width?: number
    height?: number
    strokeDasharray?: number
    squares?: Array<[x: number, y: number]> | null
    x?: number
    y?: number
  }>(),
  {
    width: 40,
    height: 40,
    strokeDasharray: 0,
    squares: null,
    x: -1,
    y: -1
  }
)

const id = randomId()
</script>

<style scoped></style>

<template>
  <div class="relative w-full py-24">
    <!-- the glowy light -->
    <div
      class="absolute left-0 h-full w-full"
      :class="
        cn(
          direction === 'bottom'
            ? 'top-1/2 dark:bg-[radial-gradient(35%_96px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_96px_at_50%_0%,theme(backgroundColor.neutral[950]/5%),transparent)]'
            : '-top-1/2 dark:bg-[radial-gradient(35%_96px_at_50%_100%,theme(backgroundColor.white/8%),transparent)] bg-[radial-gradient(35%_96px_at_50%_100%,theme(backgroundColor.neutral[950]/5%),transparent)]'
        )
      "
    ></div>
    <!-- the line -->
    <div
      class="absolute inset-x-12 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent dark:via-white/30 via-neutral-950/30 to-transparent"
    />
    <!-- the buckle in middle-->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-950 p-1.5"
      v-if="showBuckle"
    >
      <div class="h-1.5 w-8 rounded-lg bg-neutral-950/90 dark:bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

withDefaults(
  defineProps<{
    showBuckle?: boolean
    direction?: 'top' | 'bottom'
  }>(),
  {
    showBuckle: false,
    direction: 'bottom'
  }
)
</script>

<style scoped></style>

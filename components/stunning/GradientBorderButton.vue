<template>
  <Button
    variant="ghost"
    :class="
      cn(
        'group !relative inline-flex h-10 overflow-hidden rounded-xl p-[1px] ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2'
      )
    "
  >
    <div
      :class="
        cn(
          'absolute inset-[-1000%] animate-[spin_2.2s_linear_infinite] blur bg-gradient-conic',
          gradientColor
        )
      "
    />
    <div
      :class="
        cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-1 text-sm font-medium',
          'bg-gradient-to-t from-neutral-50 dark:from-neutral-800 to-white dark:to-black text-neutral-950 dark:text-neutral-300 backdrop-blur-3xl',
          'group-hover:from-neutrl-700 group-hover:to-neutral-950'
        )
      "
    >
      <span
        class="transition-transform duration-100 ease-in-out group-hover:scale-105"
      >
        <slot />
      </span>
    </div>
  </Button>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

import { Button } from '@/components/ui/button'

withDefaults(defineProps<{ gradientColor?: string }>(), {
  gradientColor: 'from-sky-700 via-blue-500 to-emerald-400'
})
</script>

<style scoped></style>

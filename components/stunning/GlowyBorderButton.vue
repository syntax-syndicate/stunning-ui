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
      class="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+2.5px)] w-[calc(100%+2.5px)] overflow-hidden rounded-lg"
    >
      <div
        class="animate-spin-slow blur absolute left-[-12.5%] top-[-40px] aspect-square h-auto w-[125%]"
        :style="{
          background: conicGraident
        }"
      />
    </div>
    <div
      :class="
        cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-8 py-1 text-sm font-medium',
          'bg-gradient-to-t from-neutral-50 dark:from-neutral-800 to-white dark:to-black text-neutral-950 dark:text-neutral-300 backdrop-blur-3xl',
          'dark:group-hover:from-neutral-700 dark:group-hover:to-neutral-950 group-hover:from-neutral-50 group-hover:to-white'
        )
      "
    >
      <div
        class="flex items-center justify-center gap-2 transition-transform duration-100 ease-in-out group-hover:scale-105"
      >
        <slot />
      </div>
    </div>
  </Button>
</template>

<script lang="ts" setup>
import { colord } from 'colord'
import { cn } from '~/lib/utils'
import { Button } from '@/components/ui/button'

const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  { color: '#ffffff' }
)

const conicGraident = computed(() => {
  const alphaColor = colord(props.color).alpha(0.33).toRgbString()
  return `conic-gradient(from 90deg at 50% 50%, ${alphaColor} 0, ${alphaColor} 10%, ${props.color} 20%, ${alphaColor} 30%, ${alphaColor} 60%, ${props.color} 70%, ${alphaColor} 80%, ${alphaColor} 100%)`
})
</script>

<style scoped></style>

<template>
  <div :class="cn('group [perspective:1000px]')">
    <div
      :class="
        cn(
          'relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
          direction === 'vertical'
            ? 'group-hover:[transform:rotateX(180deg)]'
            : 'group-hover:[transform:rotateY(180deg)]'
        )
      "
    >
      <!-- {/* Front Card */} -->
      <div class="absolute h-full w-full [backface-visibility:hidden]">
        <slot name="front" />
      </div>

      <!-- {/* Back Card */} -->
      <div
        :class="
          cn(
            'absolute h-full w-full [backface-visibility:hidden]',
            direction === 'vertical'
              ? '[transform:rotateX(180deg)]'
              : '[transform:rotateY(180deg)]'
          )
        "
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

interface FlipCardProps {
  direction?: 'vertical' | 'horizontal'
}

withDefaults(defineProps<FlipCardProps>(), {
  direction: 'vertical'
})
</script>

<style scoped></style>

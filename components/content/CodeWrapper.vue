<template>
  <div :class="cn('relative overflow-hidden my-6 rounded-md')">
    <div
      :class="
        cn(
          '[&_pre]:my-0 [&_pre]:max-h-[640px] [&_pre]:pb-[100px]',
          !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]'
        )
      "
    >
      <slot />
    </div>
    <div class="absolute right-4 top-1/2 -translate-y-1/2">
      <CopyButton
        v-if="$slots.default?.()[0]?.props?.code"
        :code="$slots.default?.()[0]?.props?.code"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import CopyButton from './CopyButton.vue'
</script>

<style scoped></style>

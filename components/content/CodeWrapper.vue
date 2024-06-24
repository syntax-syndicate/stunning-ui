<template>
  <div :class="cn('relative overflow-hidden my-6 rounded-md')">
    <div
      :class="
        cn(
          '[&_pre]:my-0 [&_pre]:max-h-[640px] [&_pre]:pb-[100px] [&_pre]:overflow-hidden'
        )
      "
    >
      <slot />
    </div>
    <div
      class="absolute right-6 w-6 h-6 flex items-center justify-center"
      :class="newLines > 1 ? 'top-6' : 'top-1/2 -translate-y-1/2'"
    >
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

const slots = useSlots()

const code = computed(() => slots.default?.()[0]?.props?.code)

const newLines = computed(() => {
  return (code.value.match(/\n/g) || []).length
})
</script>

<style scoped></style>

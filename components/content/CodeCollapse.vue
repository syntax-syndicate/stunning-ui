<template>
  <Collapsible v-model:open="isOpened">
    <div :class="cn('relative overflow-hidden my-6 rounded-md')">
      <CollapsibleContent
        forceMount
        :class="
          cn('overflow-hidden min-h-[18rem]', !isOpened && 'max-h-[18rem]')
        "
      >
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
      </CollapsibleContent>
      <div
        :class="
          cn(
            'absolute w-full flex items-center justify-center bg-gradient-to-b from-neutral-50/30 dark:from-neutral-950/30 dark:to-black to-white to-90% p-2 inset-x-0 bottom-0 h-20'
          )
        "
      >
        <CollapsibleTrigger asChild>
          <Button variant="secondary" class="mb-8 h-8 text-xs">
            {{ isOpened ? 'Collapse' : 'Expand' }}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div class="absolute right-6 top-6">
        <CopyButton
          v-if="$slots.default?.()[0]?.props?.code"
          :code="$slots.default?.()[0]?.props?.code"
        />
      </div>
    </div>
  </Collapsible>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import Button from '@/components/ui/button/Button.vue'
import CopyButton from './CopyButton.vue'
import { cn } from '~/lib/utils'

const isOpened = ref(false)
</script>

<style scoped></style>

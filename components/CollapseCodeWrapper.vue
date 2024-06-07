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
            'absolute w-full h-full flex items-center justify-center bg-gradient-to-b from-background/10 to-background to-90% p-2',
            isOpened
              ? 'inset-x-0 bottom-0 h-12 from-neutral-50/30 dark:from-neutral-900/30'
              : 'inset-x-0 bottom-0 h-12 from-neutral-50/30 dark:from-neutral-900/30'
          )
        "
      >
        <CollapsibleTrigger asChild>
          <Button variant="secondary" class="mb-8 h-8 text-xs">
            {{ isOpened ? 'Collapse' : 'Expand' }}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div class="absolute right-4 top-4">
        <Button size="icon" variant="ghost" @click="handleCopy">
          <radix-icons:copy class="h-4 w-4" />
        </Button>
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
import { cn } from '~/lib/utils'
import Button from '@/components/ui/button/Button.vue'

const { $toast } = useNuxtApp()
const isOpened = ref(false)

const handleCopy = () => {
  $toast.success('Copied!')
}
</script>

<style scoped></style>

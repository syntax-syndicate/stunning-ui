<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps
} from 'radix-vue'
import { ChevronDownIcon, PlusIcon } from '@radix-icons/vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<
    AccordionTriggerProps & {
      class?: HTMLAttributes['class']
      variant: 'arrow' | 'cross'
    }
  >(),
  {
    class: '',
    variant: 'arrow'
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline',
          props.class,
          props.variant === 'arrow'
            ? '[&[data-state=open]>svg]:rotate-180'
            : '[&[data-state=open]>svg]:rotate-[135deg]'
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDownIcon
          v-if="props.variant === 'arrow'"
          class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        />
        <PlusIcon
          v-else
          class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

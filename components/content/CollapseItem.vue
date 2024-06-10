<template>
  <AccordionItem :key="value" :value="value">
    <AccordionTrigger class="text-xl">{{
      title || $slots.title
    }}</AccordionTrigger>
    <AccordionContent>
      <slot />
    </AccordionContent>
  </AccordionItem>
</template>

<script lang="ts" setup>
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '~/components/ui/accordion'

defineProps<{
  title?: string
  content?: string
  value: string
}>()
</script>

<style scoped></style>

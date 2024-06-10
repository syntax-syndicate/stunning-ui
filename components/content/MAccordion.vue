<template>
  <Accordion
    type="single"
    class="w-full"
    collapsible
    :default-value="defaultValue"
  >
    <slot />
  </Accordion>
</template>

<script lang="ts" setup>
import { Accordion } from '~/components/ui/accordion'

const defaultValue = 'tab-1'
</script>

<style scoped></style>

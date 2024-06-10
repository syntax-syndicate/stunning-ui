<template>
  <render />
</template>

<script setup lang="ts">
import MTabs from './MTabs.vue'

const _slots = useSlots()
function render() {
  const slots = _slots?.default?.() || []
  return h(MTabs, { variant: 'card' }, slots)
}
</script>

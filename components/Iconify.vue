<template>
  <Iconify />
</template>

<script lang="ts" setup>
import { Icon } from '#components'

const props = defineProps({
  name: {
    type: String,
    require: true,
    default: ''
  }
})

const { name } = toRefs(props)

const Iconify = h(Icon, { name: name.value })
</script>

<style scoped></style>

<template>
  <NuxtLayout :name="currentLayout">
    <ContentDoc />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { path } = useRoute()
console.log(path)

const currentLayout = computed(() => {
  return path.startsWith('/components')
    ? 'components'
    : path.startsWith('/blocks')
    ? 'blocks'
    : 'default'
})
</script>

<style scoped></style>

<template>
  <NuxtLayout :name="currentLayout">
    <ContentDoc />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { path } = useRoute()

const currentLayout = computed(() => {
  return path.startsWith('/blocks')
    ? 'blocks'
    : path.startsWith('/templates')
    ? 'templates'
    : 'components'
})
</script>

<style scoped></style>

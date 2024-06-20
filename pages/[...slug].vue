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

const { data: page } = await useAsyncData(path, () =>
  queryContent(path).findOne()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
</script>

<style scoped></style>

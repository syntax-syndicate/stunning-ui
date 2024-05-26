<template>
  <NuxtLayout name="components">
    <ContentDoc />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { path } = useRoute()
console.log(path)
</script>

<style scoped></style>

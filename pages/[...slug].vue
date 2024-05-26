<template>
  <NuxtLayout name="component">
    <main class="prose prose-neutral dark:prose-invert pb-16">
      <ContentDoc />
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { path } = useRoute()
console.log(path)
</script>

<style scoped>
.prose {
  @apply max-w-none;
}

.prose :where(pre) {
  @apply bg-neutral-900/80 p-6 my-0 border dark:border-neutral-700/80 rounded-lg;
}

.prose :where(h2 a) {
  @apply no-underline block border-b pb-2;
}

.prose :where(h3 a) {
  @apply no-underline;
}

.prose :where(p code) {
  @apply bg-neutral-800/80 text-muted-foreground p-1 rounded-md;
}

.prose
  :where(code):not(
    :where([class~='not-prose'], [class~='not-prose'] *)
  )::before,
.prose
  :where(code):not(
    :where([class~='not-prose'], [class~='not-prose'] *)
  )::after {
  @apply content-none;
}
</style>

<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="container max-w-screen-2xl py-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="cols-span-12 lg:col-span-12 w-full">
          <main class="w-full prose prose-neutral dark:prose-invert pb-16">
            <PageHeader />
            <slot />
          </main>
          <PageFooter />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/content/PageHeader.vue'
import PageFooter from '~/components/content/PageFooter.vue'
</script>

<style scoped>
.prose {
  @apply max-w-none;
}

.prose :where(pre) {
  @apply bg-neutral-50/80 dark:bg-neutral-950/80 p-6 my-0 border dark:border-neutral-700/80 rounded-lg;
}

.prose :where(h2 a) {
  @apply no-underline block border-b pb-2;
}

.prose :where(h3 a) {
  @apply no-underline;
}

.prose :where(p code) {
  @apply bg-neutral-200/50 dark:bg-neutral-800/80 text-muted-foreground p-1 rounded-md;
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

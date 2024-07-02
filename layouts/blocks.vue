<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <aside
      class="flex justify-center p-5 border-b bg-background/75 backdrop-blur sticky top-16 z-50"
    >
      <nav class="relative container max-w-screen-2xl flex gap-4 flex-wrap">
        <template v-for="group in blockList">
          <Badge
            size="lg"
            :variant="isDark ? 'secondary' : 'default'"
            v-for="item in group.components"
          >
            <NuxtLink
              :href="item.path"
              :class="
                route.path === item.path ? 'text-emerald-500 font-semibold' : ''
              "
            >
              <span>{{ item.name }}</span>
            </NuxtLink>
          </Badge>
        </template>
      </nav>
    </aside>

    <main class="container max-w-screen-2xl py-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <main
          class="cols-span-12 w-full prose prose-neutral dark:prose-invert pb-16"
          :class="isBlockHome ? 'lg:col-span-12' : 'lg:col-span-9'"
        >
          <PageHeader />
          <slot />
        </main>
        <aside
          v-if="config.toc.enable && !isBlockHome"
          class="hidden text-sm lg:block w-full"
          :class="isBlockHome ? 'lg:col-span-0' : 'lg:col-span-3'"
        >
          <div class="sticky top-36 h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc :is-small="false" />
          </div>
        </aside>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { blockList } from '~/lib/constants'
import PageHeader from '~/components/content/PageHeader.vue'
import PageFooter from '~/components/content/PageFooter.vue'

const { isDark } = useDarkmode()
const config = useConfig()
const route = useRoute()
console.log(route.path)

const isBlockHome = computed(() => {
  return route.path === '/blocks'
})
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

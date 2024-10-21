<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="container max-w-screen-2xl py-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-3">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] lg:px-4 lg:-mx-4"
          >
            <div class="relative">
              <div class="space-y-4">
                <NuxtLink
                  href="/getting-started"
                  class="flex gap-2 items-center group"
                >
                  <div
                    class="rounded-md p-1 inline-flex ring-inset ring-1 bg-neutral-50/50 dark:bg-neutral-800/50 ring-neutral-300 dark:ring-neutral-700 group-hover:dark:bg-emerald-800/50 group-hover:ring-emerald-300 group-hover:dark:ring-emerald-600"
                  >
                    <Icon
                      name="ph:rocket-launch-duotone"
                      class="w-5 h-5 text-emerald-500"
                    />
                  </div>
                  <span class="group-hover:text-emerald-500">
                    Getting Started
                  </span>
                </NuxtLink>
                <NuxtLink
                  href="/installation"
                  class="flex gap-2 items-center group"
                >
                  <div
                    class="rounded-md p-1 inline-flex ring-inset ring-1 bg-neutral-50/50 dark:bg-neutral-800/50 ring-neutral-300 dark:ring-neutral-700 group-hover:dark:bg-emerald-800/50 group-hover:ring-emerald-300 group-hover:dark:ring-emerald-600"
                  >
                    <Icon
                      name="ph:notebook-duotone"
                      class="w-5 h-5 text-emerald-500"
                    />
                  </div>
                  <span class="group-hover:text-emerald-500">
                    Installation</span
                  >
                </NuxtLink>
              </div>
            </div>
            <Separator class="my-6" />
            <nav class="relative space-y-6">
              <template v-for="group in componentList">
                <section>
                  <h3 class="mb-3 text-sm font-semibold">
                    {{ group.category }}
                  </h3>
                  <div class="flex flex-col text-sm">
                    <NuxtLink
                      v-for="item in group.components"
                      :href="item.status === 'upcoming' ? undefined : item.path"
                      :disabled="item.status === 'upcoming'"
                      class="border-l pl-4 py-1 hover:text-emerald-600 dark:hover:text-emerald-300"
                      :class="[
                        route.path === item.path
                          ? 'text-emerald-500 font-semibold border-emerald-500'
                          : 'text-muted-foreground border-border',
                        item.status === 'upcoming'
                          ? 'text-gray-400 cursor-not-allowed pointer-events-none'
                          : ''
                      ]"
                    >
                      <span>{{ item.name }}</span>
                      <Badge
                        v-if="item.status === 'upcoming'"
                        class="ml-2 border-emerald-500/50 font-400 text-emerald-500"
                        size="sm"
                        variant="outline"
                        >{{ item.status }}</Badge
                      >
                      <Badge
                        v-if="item.status === 'new'"
                        class="ml-2 bg-emerald-500 font-400 text-white"
                        size="sm"
                        variant="outline"
                        >{{ item.status }}</Badge
                      >
                    </NuxtLink>
                  </div>
                </section>
              </template>
            </nav>
          </aside>
        </div>
        <div class="lg:col-span-9 w-full">
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
import { Separator } from '@/components/ui/separator'
import { componentList } from '~/lib/constants'
import PageHeader from '~/components/content/PageHeader.vue'
import PageFooter from '~/components/content/PageFooter.vue'

const route = useRoute()

console.log(route.path)
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

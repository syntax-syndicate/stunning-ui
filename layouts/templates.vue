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
          <footer class="mx-auto w-full space-y-10 pb-16">
            <div
              class="flex flex-col items-center justify-between gap-5 border-t border-neutral-900/5 pt-8 sm:flex-row dark:border-white/5"
            >
              <p class="text-xs text-neutral-600 dark:text-neutral-500">
                Building in public by
                <NuxtLink
                  target="_blank"
                  class="underline"
                  href="https://github.com/robert_shaw_x"
                >
                  Robert Shaw
                </NuxtLink>
              </p>
              <div class="flex gap-4">
                <NuxtLink
                  target="_blank"
                  class="group underline"
                  href="https://twitter.com/robert_shaw_x"
                >
                  <span class="sr-only">Follow me on X</span>
                  <Icon
                    name="ri:twitter-x-line"
                    class="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-300"
                  />
                </NuxtLink>
                <NuxtLink
                  target="_blank"
                  class="group underline"
                  href="https://github.com/xiaoluoboding"
                >
                  <span class="sr-only">Follow me on GitHub</span>
                  <Icon
                    name="ri:github-line"
                    class="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-300"
                  />
                </NuxtLink>
                <!-- <NuxtLink
                  target="_blank"
                  class="group underline"
                  href="https://twitter.com/robert_shaw_x"
                >
                  <span class="sr-only">Join the discord</span>
                  <Icon name="ri:discord-line
                    class="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-300"
                  />
                </NuxtLink> -->
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/content/PageHeader.vue'

const { isDark } = useDarkmode()
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

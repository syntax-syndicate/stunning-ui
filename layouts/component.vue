<template>
  <div class="bg-background w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="container max-w-screen-2xl my-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-3">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] lg:px-4 lg:-mx-4"
          >
            <div class="relative">
              <div class="space-y-4">
                <NuxtLink
                  href="/getting-started"
                  class="flex gap-2 items-center"
                >
                  <ph:book-open-text-duotone class="w-5 h-5 text-emerald-500" />
                  Getting Started</NuxtLink
                >
                <NuxtLink href="/installation" class="flex gap-2 items-center">
                  <ph:notebook-duotone class="w-5 h-5 text-emerald-500" />
                  Installation</NuxtLink
                >
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
                      :href="item.path"
                      class="border-l pl-4 py-1"
                      :class="
                        route.path === item.path
                          ? 'text-emerald-500 font-semibold border-emerald-500'
                          : 'text-muted-foreground border-border'
                      "
                    >
                      {{ item.name }}
                    </NuxtLink>
                  </div>
                </section>
              </template>
            </nav>
          </aside>
        </div>
        <div class="lg:col-span-9">
          <section>
            <slot />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { componentList } from '@/lib/constants'

const route = useRoute()

console.log(route.path)
</script>

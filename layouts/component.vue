<template>
  <div class="bg-neutral-950 w-full h-screen">
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="container max-w-screen-xl my-12 mx-auto sm:rounded">
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-3">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] lg:px-4 lg:-mx-4"
          >
            <div class="relative">
              <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                <NuxtLink href="/components">Get Started</NuxtLink>
              </div>
              <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                <NuxtLink href="/components">Installation</NuxtLink>
              </div>
            </div>
            <div class="h-[1px] w-full bg-neutral-800 my-8"></div>
            <nav class="relative space-y-3">
              <section>
                <h3 class="mb-3 text-sm font-semibold">Background</h3>
                <div class="flex flex-col gap-2 text-sm">
                  <NuxtLink
                    href="/components/morphing-gradient-animation"
                    class="border-l pl-4 py-1"
                    :class="
                      route.path === '/components/morphing-gradient-animation'
                        ? 'text-emerald-500 font-semibold border-emerald-500'
                        : 'text-secondary border-neutral-700'
                    "
                  >
                    Morphing Gradient Animation
                  </NuxtLink>
                  <NuxtLink href="/components" class="text-secondary">
                    Meteor Grid Animation
                  </NuxtLink>
                  <NuxtLink href="/components" class="text-secondary">
                    God Ray
                  </NuxtLink>
                </div>
                <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0"></div>
              </section>
              <section>
                <h3 class="mb-3 text-sm font-semibold">Bento Grid</h3>
                <div class="flex flex-col gap-2 text-sm">
                  <NuxtLink href="/components" class="text-secondary">
                    Gravity Elements
                  </NuxtLink>
                  <NuxtLink href="/components" class="text-secondary">
                    God Ray
                  </NuxtLink>
                </div>
                <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0"></div>
              </section>
              <section>
                <h3 class="mb-3 text-sm font-semibold">Paragraph</h3>
                <div class="flex flex-col text-sm">
                  <NuxtLink
                    href="/components/typed-text"
                    class="border-l pl-4 py-1"
                    :class="
                      route.path === '/components/typed-text'
                        ? 'text-emerald-500 font-semibold border-emerald-500'
                        : 'text-secondary border-neutral-700'
                    "
                  >
                    Typed Text
                  </NuxtLink>
                  <NuxtLink
                    class="border-l pl-4 py-1"
                    href="/components"
                    :class="
                      route.path === '/components/collapsible-details'
                        ? 'text-emerald-500 font-semibold border-emerald-500'
                        : 'text-secondary border-neutral-700'
                    "
                  >
                    Collapsible Details
                  </NuxtLink>
                </div>
                <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0"></div>
              </section>
              <section>
                <h3 class="mb-3 text-sm font-semibold">Card</h3>
                <div class="flex flex-col gap-2 text-sm">
                  <NuxtLink href="/components" class="text-secondary">
                    Gravity Elements
                  </NuxtLink>
                  <NuxtLink href="/components" class="text-secondary">
                    God Ray
                  </NuxtLink>
                </div>
                <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0"></div>
              </section>
              <section>
                <h3 class="mb-3 text-sm font-semibold">Scroll Animation</h3>
                <div class="flex flex-col gap-2 text-sm">
                  <NuxtLink href="/components" class="text-secondary">
                    Blurry Text Reveal
                  </NuxtLink>
                  <NuxtLink href="/components" class="text-secondary">
                    God Ray
                  </NuxtLink>
                </div>
                <div class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0"></div>
              </section>
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
const route = useRoute()

console.log(route.path)
</script>

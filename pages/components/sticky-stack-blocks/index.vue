<template>
  <NuxtLayout name="component">
    <div class="">
      <header class="space-y-2">
        <h1 class="text-3xl text-primary">Sticky Stack Blocks</h1>
        <p class="text-secondary-foreground">
          Sticky stack blocks are commonly used as visually fixed elements to
          introduce key features on a website while scrolling.
        </p>
      </header>
      <main class="w-full mt-8">
        <div class="border border-border relative w-full rounded-2xl">
          <div class="flex flex-col p-8">
            <div className="pb-4 flex justify-center w-full">
              <span class="text-neon-wb text-2xl text-white/30">
                On-Scroll Sticky Stacked Block
              </span>
            </div>
            <div
              class="mt-24 sm:mt-32 mb-2 sm:mb-8 mx-8 md:mx-auto flex flex-col text-center gap-2 max-w-xl"
            >
              <h1 class="text-4xl font-bold text-neon-wb">Features</h1>
              <h2
                class="text-xl font-semibold text-secondary-foreground text-balance md:text-wrap"
              >
                <p class="line-clamp-3">
                  {{ paragraphPlaceholder }}
                </p>
                <p class="text-neon">No login required.</p>
              </h2>
            </div>
            <div class="">
              <StickyStackBlock :maxHeight="80">
                <template v-slot:card>
                  <div
                    class="h-full bg-gradient-to-br from-emerald-700 to-emerald-300 border-2 border-emerald-600 rounded-2xl flex"
                  >
                    <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                      <ri:magic-line class="w-8 h-8" />

                      <h1 class="font-medium text-2xl">Section 1</h1>

                      <p class="line-clamp-5 text-secondary-foreground">
                        {{ paragraphPlaceholder }}
                      </p>
                    </div>
                    <div
                      class="w-1/2 bg-neutral-950/80 flex-center rounded-tr-2xl rounded-br-2xl"
                    >
                      <div class="w-64">
                        <div
                          class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
                        >
                          <div class="h-24 rounded-lg bg-white/5"></div>
                          <div class="space-y-3">
                            <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                            <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                            <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </StickyStackBlock>
              <StickyStackBlock :maxHeight="80">
                <template v-slot:card>
                  <div
                    class="h-full bg-gradient-to-br from-violet-700 to-violet-300 border-2 border-violet-600 rounded-2xl flex"
                  >
                    <div
                      class="w-1/2 bg-neutral-950/80 flex-center rounded-tl-2xl rounded-bl-2xl"
                    >
                      <div class="w-64">
                        <div
                          class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
                        >
                          <div class="h-24 rounded-lg bg-white/5"></div>
                          <div class="space-y-3">
                            <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                            <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                            <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                      <ri:stack-line class="w-8 h-8" />

                      <h1 class="font-medium text-2xl">Section 2</h1>

                      <p class="line-clamp-5 text-secondary-foreground">
                        {{ paragraphPlaceholder }}
                      </p>
                    </div>
                  </div>
                </template>
              </StickyStackBlock>
              <StickyStackBlock :maxHeight="80">
                <template v-slot:card>
                  <div
                    class="h-full bg-gradient-to-br from-amber-700 to-amber-300 border border-amber-600 rounded-2xl flex"
                  >
                    <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                      <ri:database-2-line class="w-8 h-8" />

                      <h1 class="font-medium text-2xl">Section 3</h1>

                      <p class="line-clamp-5 text-secondary-foreground">
                        {{ paragraphPlaceholder }}
                      </p>
                    </div>
                    <div
                      class="w-1/2 bg-neutral-950/80 flex-center rounded-tr-2xl rounded-br-2xl"
                    >
                      <div class="w-64">
                        <div
                          class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
                        >
                          <div class="h-24 rounded-lg bg-white/5"></div>
                          <div class="space-y-3">
                            <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                            <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                            <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </StickyStackBlock>
              <StickyStackBlock :maxHeight="80">
                <template v-slot:card>
                  <div
                    class="h-full bg-gradient-to-br from-sky-700 to-sky-300 border border-sky-600 rounded-2xl flex"
                  >
                    <div
                      class="w-1/2 bg-neutral-950/80 flex-center rounded-tl-2xl rounded-bl-2xl"
                    >
                      <div class="w-64">
                        <div
                          class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
                        >
                          <div class="h-24 rounded-lg bg-white/5"></div>
                          <div class="space-y-3">
                            <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                            <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                            <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                      <ri:edit-2-line class="w-8 h-8" />

                      <h1 class="font-medium text-2xl">Section 4</h1>

                      <p class="line-clamp-5 text-secondary-foreground">
                        {{ paragraphPlaceholder }}
                      </p>
                    </div>
                  </div>
                </template>
              </StickyStackBlock>
              <StickyStackBlock :maxHeight="80">
                <template v-slot:card>
                  <div
                    class="h-full bg-gradient-to-br from-fuchsia-700 to-fuchsia-300 border border-fuchsia-600 rounded-2xl flex"
                  >
                    <div class="w-1/2 p-16 flex gap-2 justify-center flex-col">
                      <ri:search-line class="w-8 h-8" />

                      <h1 class="font-medium text-2xl">Section 5</h1>

                      <p class="line-clamp-5 text-secondary-foreground">
                        {{ paragraphPlaceholder }}
                      </p>
                    </div>
                    <div
                      class="w-1/2 bg-neutral-950/80 flex-center rounded-tr-2xl rounded-br-2xl"
                    >
                      <div class="w-64">
                        <div
                          class="relative flex flex-col h-full space-y-5 overflow-hidden rounded-2xl bg-white/5 p-8 shadow-xl shadow-black/5"
                        >
                          <div class="h-24 rounded-lg bg-white/5"></div>
                          <div class="space-y-3">
                            <div class="h-3 w-3/5 rounded-lg bg-white/5"></div>
                            <div class="h-3 w-4/5 rounded-lg bg-white/10"></div>
                            <div class="h-3 w-2/5 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </StickyStackBlock>
            </div>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { paragraphPlaceholder } from '@/lib/constants'
</script>

<style scoped></style>
